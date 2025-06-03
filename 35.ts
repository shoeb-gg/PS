function searchInsert(nums: number[], target: number): number {
  if (target < nums[0]) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    } else if (i === nums.length - 1) {
      return nums.length;
    } else if (target > nums[i] && target < nums[i + 1]) {
      return i + 1;
    }
  }
}

let nums = [1, 3, 5, 6];

console.log(searchInsert(nums, 0));
