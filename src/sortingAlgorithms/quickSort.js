export function getQuickSortAnimations(array) {
  const animations = [];
  //   const swaps = [];
  quickSort(array, 0, array.length - 1, animations);
  if (array.length <= 1) return array;
  return animations;
}

function quickSort(array, left, right, animations) {
  let index;
  console.log(array);
  console.log(animations);
  if (array.length > 1) {
    index = partition(array, left, right, animations); //index returned by partition
    if (left < index - 1) {
      quickSort(array, left, index - 1, animations);
    } //there are more nums on the left side of the pivot
    if (index < right) {
      quickSort(array, index, right, animations);
    } //there are more nums on the right side of the pivot
  }
  return array;
}

function swap(items, leftIndex, rightIndex) {
  console.log('swapping in quick sort');
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(array, left, right, animations) {
  let pivotIndex = Math.floor((right + left) / 2);
  let pivot = array[Math.floor((right + left) / 2)]; //middle element in array
  let i = left; //left pointer
  let j = right; //right pointer
  while (i <= j) {
    while (array[i] < pivot) {
      animations.push([i, pivotIndex, false]);
      animations.push([i, pivotIndex, false]);
      i++;
    }
    while (array[j] > pivot) {
      animations.push([j, pivotIndex, false]);
      animations.push([i, pivotIndex, false]);
      j--;
    }
    if (i <= j) {
      animations.push([i, j, false]);
      swap(array, i, j); //swaps elements
      animations.push([i, j, true]);
      i++;
      j--;
    }
  }
  return i;
}

export function quickSortTest(array, left, right) {
  let index;
  console.log(array);
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quickSortTest(array, left, index - 1);
    }
    if (index < right) {
      quickSortTest(array, index, right);
    }
  }

  return array;
}
