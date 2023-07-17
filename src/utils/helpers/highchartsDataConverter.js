export function highchartsDataConvert(data) {
  const newData = data.map((item) => [
    item.dEven,
    item.xNivInuPbMresIbs,
    item.xNivInuPhMresIbs,
    item.xNivInuClMresIbs,
  ]);
  return newData;
}
