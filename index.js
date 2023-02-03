function findMatching(array, name) {
    return array.filter(function (inp) {
        return (inp === name || inp === name.toUpperCase() || inp === name.toLowerCase());
    })
}

function fuzzyMatch(array, firstTwo) {
    return array.filter(function (inp) {
        return firstTwo === (inp[0] + inp[1]);
    })
}

function matchName(array, driverName) {
    return array.filter(function (inp) {
      return inp.name === driverName;
    })
  }