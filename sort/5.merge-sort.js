function mergeSort(nums, start, end) {
  if (start >= end) {
    return;
  }

  let mid = Math.floor((start + end) / 2);

  mergeSort(nums, start, mid);
  mergeSort(nums, mid + 1, end);
  merge(nums, start, mid, end);
}

function merge(nums, start, mid, end) {
  let i = start;
  let j = mid + 1;
  let k = 0;

  const tmp = new Array(end - start + 1);

  while (i <= mid && j <= end) {
    if (nums[i] < nums[j]) {
      tmp[k] = nums[i];
      k++;
      i++;
    } else {
      tmp[k] = nums[j];
      k++;
      j++;
    }
  }

  while (i <= mid) {
    tmp[k] = nums[i];
    i++;
    k++;
  }

  while (j <= end) {
    tmp[k] = nums[j];
    k++;
    j++;
  }

  // console.log(tmp);
  k = 0;
  while (k < tmp.length) {
    nums[start] = tmp[k];
    start++;
    k++;
  }
  console.log(nums);
}

// merge([1, 4, 5, 2, 3, 7], 0, 2, 5);

mergeSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70], 0, 13);
