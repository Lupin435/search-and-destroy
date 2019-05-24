'use strict';

// Complete this algo
const binarySearch = (
  array,
  target,
  startIdx = 0,
  endIdx = array.length - 1
) => {
  if (!array.length || typeof target !== 'number') {
    return false;
  }
  const midpoint = Math.floor((endIdx - startIdx) / 2 + startIdx);
  if (array[midpoint] === target) {
    return true;
  }
  if (endIdx - startIdx === 1) {
    return array[endIdx] === target;
  }
  if (array[midpoint] > target) {
    return binarySearch(array, target, 0, midpoint);
  } else {
    return binarySearch(array, target, midpoint, endIdx);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
