export function getBubbleSortAnimations(array) {
  const animations = [];
  const swaps = [];
  if (array.length <= 1) return array;
  bubbleSortHelper(array, animations, swaps);
  console.log(swaps);
  return animations;
}

function bubbleSortHelper(array, animations, swaps) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      animations.push([j, j + 1, false]);
      //swaps.push(false);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swaps.push(true);
        animations.push([j, j + 1, true]);
      } //if value is greater than next value swap values
      else {
        swaps.push(false);
        animations.push([j, j + 1, false]);
      }
      //animations.push([j, j + 1]);
    }
  }
}

//WORKING SLIGHTLY
// function bubbleSortHelper(array, animations, swaps) {
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - i - 1; j++) {
//       animations.push([j, j + 1]);
//       swaps.push(false);
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//         swaps.push(true);
//       } //if value is greater than next value swap values
//       else {
//         swaps.push(false);
//       }
//       animations.push([j, j + 1]);
//     }
//   }
// }

// function bubbleSortHelper(array, animations, swaps) {
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - 1; j++) {
//       animations.push([j, j + 1]);
//       swaps.push(false);
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//         swaps.push(true);
//       } //if value is greater than next value swap values
//       else {
//         swaps.push(false);
//       }
//       animations.push([j, j + 1]);
//     }
//   }
// }

// function bubbleSortHelper(array, animations) {
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i; j < length; j++) {
//       //changes color
//       animations.push([i, j]);
//       if (array[i] > array[j]) {
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//       //reverts color
//       animations.push([i, j]);
//     }
//   }
// }

export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

// export const mergeSort = (array) => {
//   if (array.length === 1) return array;
//   const middleIndex = Math.floor(array.length / 2);
//   const firstHalf = mergeSort(array.slice(0, middleIndex));
//   const secondHalf = mergeSort(array.slice(middleIndex));
//   const sortedArray = [];

//   let i = 0,
//     j = 0;

//   while (i < firstHalf.length && j < secondHalf.length) {
//     if (firstHalf[i] < secondHalf[j]) {
//       sortedArray.push(firstHalf[i++]);
//     } else {
//       sortedArray.push(secondHalf[j++]);
//     }
//   }
//   while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
//   while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
//   return sortedArray;
// };
