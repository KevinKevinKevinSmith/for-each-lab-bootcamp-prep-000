function iterativeLog(array) {
  array.forEach((item, index) => {
    console.log(`${index}: ${item}`);
  })
}

function iterate(callBack) {
  var ar = ['dog', 'cat'];
  ar.forEach(callBack);
  return ar;
}

function doToArray(array, callBack) {
  array.forEach(callBack);
}
