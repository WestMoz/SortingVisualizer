import React from 'react';
//import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';
import {
  getBubbleSortAnimations,
  getMergeSortAnimations,
  heapSortTest,
} from '../sortingAlgorithms/sortingAlgorithms';
import { getQuickSortAnimations } from '../sortingAlgorithms/quickSort';
import { getHeapSortAnimations } from '../sortingAlgorithms/heapSort';
import './SortingVisualizer.css';

const ANIMATION_SPEED = 20;

const LENGTH_OF_ARRAY = 20;

const PRIMARY_COLOR = 'lightblue';

const SECONDARY_COLOR = 'purple';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < LENGTH_OF_ARRAY; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({ array });
  }

  // mergeSort() {
  //   const javaScriptSortedArray = this.state.array
  //     .slice()
  //     .sort((a, b) => a - b);
  //   const sortedArray = sortingAlgorithms.mergeSort(this.state.array);

  //   console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
  // }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [bareOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[bareOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      //const isColorChange = i % 2 === 0;
      const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      const [barOneIndex, barTwoIndex, swap] = animations[i];
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      if (swap) {
        console.log('swapping');

        setTimeout(() => {
          const barOneHeight = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = barOneHeight;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      }
    }
  }

  quickSort() {
    console.log(this.state.array);
    // console.log(
    //   quickSortTest(this.state.array, 0, this.state.array.length - 1),
    // );
    const animations = getQuickSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      const [barOneIndex, barTwoIndex, swap] = animations[i];

      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      if (swap) {
        console.log('swapping items');

        setTimeout(() => {
          const barOneHeight = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = barOneHeight;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      }
    }
  }

  // bubbleSort() {
  //   const animations = getBubbleSortAnimations(this.state.array);
  //   console.log(animations);
  //   for (let i = 0; i < animations.length; i++) {
  //     const arrayBars = document.getElementsByClassName('array-bar');
  //     const isColorChange = i % 2 === 0;
  //     const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
  //     const [barOneIndex, barTwoIndex] = animations[i];
  //     const barOneStyle = arrayBars[barOneIndex].style;
  //     const barTwoStyle = arrayBars[barTwoIndex].style;
  //     setTimeout(() => {
  //       barOneStyle.backgroundColor = color;
  //       barTwoStyle.backgroundColor = color;
  //     }, i * ANIMATION_SPEED);
  //     // const isColorChange = i % 2 === 0;
  //     // if (isColorChange) {
  //     //   const [barOneIndex, barTwoIndex] = animations[i];
  //     //   const barOneStyle = arrayBars[barOneIndex].style;
  //     //   const barTwoStyle = arrayBars[barTwoIndex].style;
  //     //   const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
  //     //   setTimeout(() => {
  //     //     barOneStyle.backgroundColor = color;
  //     //     barTwoStyle.backgroundColor = color;
  //     //   }, i * ANIMATION_SPEED);
  //     // } else {
  //     //   setTimeout(() => {
  //     //     // const [barOneIndex, newHeight] = animations[i];
  //     //     const [barOneIndex, barTwoIndex] = animations[i];
  //     //     const newHeight = arrayBars[barTwoIndex].style.height;
  //     //     const barOneStyle = arrayBars[barOneIndex].style;
  //     //     barOneStyle.height = `${newHeight}px`;
  //     //   }, i * ANIMATION_SPEED);
  //     // }
  //   }
  // }

  heapSort() {
    console.log(this.state.array);
    const animations = getHeapSortAnimations(this.state.array);
    console.log(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      const [barOneIndex, barTwoIndex, swap] = animations[i];

      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      if (swap) {
        console.log('swapping items');

        setTimeout(() => {
          const barOneHeight = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = barOneHeight;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      }
    }
  }

  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = this.mergeSort(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className="main-container">
        <div className="array-container">
          {array.map((value, index) => (
            <div
              className="array-bar"
              key={index}
              style={{
                height: `${value}px`,
                width: `${50 / LENGTH_OF_ARRAY}%`,
              }}
            ></div>
          ))}
        </div>
        <div className="button-container">
          <button onClick={() => this.resetArray()}>
            Generate New Array *W*
          </button>
          <button onClick={() => this.mergeSort()}>Merge Sort *W*</button>
          <button onClick={() => this.quickSort()}>Quick Sort *W*</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort *W* </button>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
