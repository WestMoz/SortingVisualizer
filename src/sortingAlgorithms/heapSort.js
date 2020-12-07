export function getHeapSortAnimations(input) {
  const animations = [];
  heapSort(input, animations);
  return animations;
}

//creates max heap
function maxHeap(input, i, animations) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < arrLength && input[left] > input[max]) {
    animations.push([left, max, false]);
    animations.push([left, max, false]);
    max = left;
  }

  if (right < arrLength && input[right] > input[max]) {
    animations.push([right, max, false]);
    animations.push([right, max, false]);
    max = right;
  }

  if (max !== i) {
    animations.push([i, max, false]);
    swap(input, i, max);
    animations.push([i, max, true]);
    maxHeap(input, max, animations);
  }
}

//swaps two values
function swap(input, indexA, indexB) {
  const temp = input[indexA];

  input[indexA] = input[indexB];
  input[indexB] = temp;
}

//iterates over input and creates max heaps for each iteration
export function heapSort(input, animations) {
  arrLength = input.length;

  for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
    maxHeap(input, i, animations);
  }

  for (let i = input.length - 1; i > 0; i--) {
    animations.push([0, i, false]);
    swap(input, 0, i);
    animations.push([0, i, true]);
    arrLength--;

    maxHeap(input, 0, animations);
  }
  return;
}

let arrLength;

// function heap_root(input, i) {
//   let left = 2 * i + 1;
//   let right = 2 * i + 2;
//   let max = i;

//   if (left < array_length && input[left] > input[max]) {
//     max = left;
//   }

//   if (right < array_length && input[right] > input[max]) {
//     max = right;
//   }

//   if (max != i) {
//     swap(input, i, max);
//     heap_root(input, max);
//   }
// }

// function swap(input, index_A, index_B) {
//   let temp = input[index_B];

//   input[index_A] = input[index_B];
//   input[index_B] = temp;
// }

// function heapSort(input) {
//   array_length = input.array_length;

//   for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {
//     heap_root(input, i);
//   }

//   for (let i = input.length - 1; i > 0; i--) {
//     swap(input, 0, i);
//     array_length--;

//     heap_root;
//   }
// }
