export const rupee = (n) => '₹' + Number(n).toLocaleString('en-IN')

export const discountPercent = (price, mrp) =>
  mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0
