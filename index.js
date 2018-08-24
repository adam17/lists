'use strict';

module.exports = {
  arrayToList: function (arr) {
    let list = {value: null, rest: null};
    if (!Array.isArray(arr)) {
      return list; // empty list
    }
    for (let i = arr.length - 1; i>=0; i--) {
      if (i == arr.length - 1)
        list = {value: arr[i], rest: null};
      else
        list = {value: arr[i], rest: list};
    }
    return list;
  },
  listToArray: function (list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
      arr.push(node.value);
    }
    return arr;
  },
  prepend: function (elem, list) {
    return {value: elem, rest: list};
  },
  nth: function (list, number) {
    let counter = 0;
    for (let node = list; node; node = node.rest) {
      if (counter == number)
        return node.value;
      else
        counter++;
    }
    return undefined;
  }
};
