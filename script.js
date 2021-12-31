function divideAry(ary) {
  let container = [];
  for (value of ary) {
    container.push([value]);
  }
  return container;
}

let test = divideAry([38, 27, 43, 3, 9, 82, 10]);

function mergeAry(ary) {
  let nextAry = [];
  if (ary.length < 2) {
    return ary;
  }
  for (let i = 0; i < ary.length; i += 2) {
    if (ary.length % 2 > 0 && i >= ary.length - 1) {
      nextAry.push([...ary[i]]);
      continue;
    }
    nextAry.push(intermediateSort(ary[i], ary[i + 1]));
  }
  return mergeAry(nextAry);
}

// console.log(mergeAry(test));

function intermediateSort([...ary0], [...ary1]) {
  let tmpAry = [];
  while (ary0.length > 0 && ary1.length > 0) {
    if (ary0[0] > ary1[0]) {
      tmpAry.push(ary1[0]);
      ary1.shift();
      continue;
    }
    tmpAry.push(ary0[0]);
    ary0.shift();
  }
  tmpAry.push(...ary0, ...ary1);
  return tmpAry;
}

// console.log(intermediateSort([1], [1, 2]));

function mergeSort(ary) {
  return mergeAry(divideAry(ary))[0];
}

console.log(
  mergeSort([
    50, 31, 21, 28, 72, 41, 73, 93, 68, 43, 45, 78, 45, 17, 97, 71, 69, 61, 88,
    75, 99, 44, 55, 9,
  ])
);
