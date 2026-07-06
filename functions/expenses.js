export function getSpentSum(arr) {
  return arr.reduce((sum, item) => sum + item.amount, 0);
}
