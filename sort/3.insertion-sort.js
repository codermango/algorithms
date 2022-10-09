function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let preIdx = i - 1;
    while (nums[preIdx + 1] < nums[preIdx] && preIdx >= 0) {
      const tmp = nums[preIdx + 1];
      nums[preIdx + 1] = nums[preIdx];
      nums[preIdx] = tmp;
      preIdx = preIdx - 1;
    }
  }
  console.log(nums);
}

insertionSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]);

function is(nums) {
  for (let i = 1; i < nums.length; i++) {
    let preIdx = i - 1;
    while (nums[preIdx + 1] < nums[preIdx] && preIdx >= 0) {
      const tmp = nums[preIdx + 1];
      nums[preIdx + 1] = nums[preIdx];
      nums[preIdx] = tmp;
      preIdx = preIdx - 1;
    }
  }
  console.log(nums);
}

is([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]);
