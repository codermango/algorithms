function selectionSort(nums) {
  let minIndex;
  for (let i = 0; i < nums.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    const tmp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = tmp;
  }
  console.log(nums);
}

selectionSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]);

// 一个数组，超出最小数的index
function findSmallestIndex(nums) {
  let minIndx = 0;
  let min = nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < min) {
      minIndx = i;
      min = nums[i];
    }
  }
  console.log(minIndx);
}

findSmallestIndex([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]);

function ss(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    const tmp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = tmp;
  }
  console.log(nums);
}

ss([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]);
