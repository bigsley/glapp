var arraysEq = function (arr1, arr2) {
  return _.difference(arr1, arr2).length == 0;
}

export { arraysEq };
