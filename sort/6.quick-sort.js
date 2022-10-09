function quickSort(nums, start, end) {
  if (start >= end) {
    return;
  }

  let pivot = nums[start];
  let i = start;
  let j = end;

  while (i < j) {
    while (i < j && nums[j] >= pivot) {
      j--;
    }
    nums[i] = nums[j];

    while (i < j && nums[i] < pivot) {
      i++;
    }
    nums[j] = nums[i];
  }

  nums[i] = pivot;
  quickSort(nums, start, i - 1);
  quickSort(nums, i + 1, end);
}

const n = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70];

quickSort(n, 0, n.length - 1);

console.log(n);
