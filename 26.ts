function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) {
    return 1;
  }

  let unique: number[] = [];

  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] !== nums[j]) {
        unique.push(nums[i]);
        i = j;
        continue;
      }
    }
  }

  nums.unshift(...unique);

  return unique.length;
}

let testArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(testArr));
