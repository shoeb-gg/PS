function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

let testArr = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(testArr, 3));
console.log(testArr);
