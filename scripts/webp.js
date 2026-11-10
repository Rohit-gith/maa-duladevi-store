// Converts every .jpg / .jpeg / .png inside public/ to .webp, then deletes the original.
//
// Runs automatically:
//   • when `npm run dev` or `npm run build` starts (all existing photos)
//   • while `npm run dev` is running, whenever you drop a new photo into public/
// Run it by hand with: npm run images
//
// The original is deleted ONLY after its .webp was written successfully, so a broken
// or unreadable file is left untouched (and an error is printed).
// After conversion, use the .webp path in code, e.g. '/images/owner/owner.webp'.

import { readdir, readFile, unlink, stat } from 'node:fs/promises'
import { join, extname, relative } from 'node:path'
import sharp from 'sharp'

sharp.cache(false) // don't keep files open (Windows would refuse to delete them)

const EXTS = new Set(['.jpg', '.jpeg', '.png'])
const MAX_WIDTH = 1920 // larger photos are scaled down; smaller ones keep their size
const QUALITY = 82

export const isConvertible = (file) => EXTS.has(extname(file).toLowerCase())

// Windows can briefly lock a just-copied file (antivirus, Explorer preview), so retry a few times
async function removeWithRetry(file) {
  for (let i = 0; ; i++) {
    try {
      return await unlink(file)
    } catch (err) {
      if (i >= 10 || !['EPERM', 'EBUSY', 'EACCES'].includes(err.code)) throw err
      await new Promise((r) => setTimeout(r, 300))
    }
  }
}

export async function convertFile(file, root = process.cwd()) {
  const out = file.slice(0, -extname(file).length) + '.webp'
  try {
    // read into memory first so the original file is not locked while converting
    const input = await readFile(file)
    await sharp(input)
      .rotate() // respect phone camera orientation (EXIF)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out)
    await removeWithRetry(file)
    console.log(`  🖼  ${relative(root, file)} → ${relative(root, out)} (original deleted)`)
    return out
  } catch (err) {
    console.error(`  ✖ Could not convert ${relative(root, file)}: ${err.message}`)
    return null
  }
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => [])
  const files = await Promise.all(
    entries.map((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)])),
  )
  return files.flat()
}

export async function convertAll(dir, root = process.cwd()) {
  const files = (await walk(dir)).filter(isConvertible)
  for (const f of files) await convertFile(f, root)
  return files.length
}

// Vite plugin: converts on startup and watches public/ during `npm run dev`
export function webpPlugin() {
  let publicDir
  let root
  const busy = new Set()

  // Windows paths may arrive with \ or /, and with any drive-letter case
  const norm = (p) => p.replace(/\\/g, '/').toLowerCase()

  const handle = async (file) => {
    if (!isConvertible(file) || busy.has(file) || !norm(file).startsWith(norm(publicDir))) return
    busy.add(file)
    try {
      // wait until the file has finished copying (size stops changing)
      let last = -1
      for (let i = 0; i < 20; i++) {
        const { size } = await stat(file)
        if (size > 0 && size === last) break
        last = size
        await new Promise((r) => setTimeout(r, 250))
      }
      await convertFile(file, root)
    } catch {
      // file vanished before we could read it — nothing to do
    } finally {
      busy.delete(file)
    }
  }

  return {
    name: 'auto-webp',
    configResolved(config) {
      publicDir = config.publicDir
      root = config.root
    },
    async buildStart() {
      if (publicDir) await convertAll(publicDir, root)
    },
    configureServer(server) {
      server.watcher.add(publicDir)
      server.watcher.on('add', handle)
      server.watcher.on('change', handle)
    },
  }
}

// `npm run images`
if (import.meta.url === `file:///${process.argv[1]?.replace(/\\/g, '/').replace(/^\//, '')}`) {
  const n = await convertAll(join(process.cwd(), 'public'))
  console.log(n ? `Done: ${n} photo(s) converted.` : 'No .jpg/.jpeg/.png photos found in public/.')
}
