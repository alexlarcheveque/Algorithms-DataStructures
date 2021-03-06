//Run Time --> O(n^2)
//Space --> O(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let arr = s.split("");

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < arr.length; i++) {
    let myMap = {};
    myMap[arr[i]] = 1;
    let counter = 1;

    for (let j = i + 1; j < arr.length; j++) {
      if (myMap[arr[j]]) {
        if (counter > max) {
          max = counter;
        }
        break;
      } else {
        myMap[arr[j]] = 1;
        counter++;
        if (j === arr.length - 1) {
          if (counter > max) {
            max = counter;
          }
        }
      }
    }
  }
  return max;
};

//Run Time --> O(n)
//Space --> O(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let arr = s.split("");

  let i = 0;
  let j = 0;
  let ans = 0;
  let myMap = new Map();

  while (i < arr.length && j < arr.length) {
    if (!myMap.has(arr[j])) {
      myMap.set(arr[j++], 1);
      ans = Math.max(ans, j - i);
    } else {
      myMap.delete(arr[i++]);
    }
  }
  return ans;
};
