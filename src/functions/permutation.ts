function getNum(v: number[]): number {
  let n = v.length;
  let index = Math.floor(Math.random() * n);
  let num = v[index];
  v[index] = v[n - 1];
  v.splice(n - 1, 1);
  return num;
}

function generateRandom(n: number): number[] {
  let array: number[] = [];
  let v: number[] = [];
  for (let i = 0; i < n; i++) v.push(i);
  while (v.length > 0) {
    array.push(getNum(v));
  }
  return array;
}

export default generateRandom;