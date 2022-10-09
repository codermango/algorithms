function shellSort(nums) {
  for (let k = parseInt(nums.length / 2); k >= 1; k = parseInt(k / 2)) {
    for (let i = k; i < nums.length; i++) {
      for (let j = i; j >= k; j -= k) {
        if (nums[j] < nums[j - k]) {
          const tmp = nums[j];
          nums[j] = nums[j - k];
          nums[j - k] = tmp;
        }
      }
    }
  }

  console.log(nums);
}

shellSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]);
