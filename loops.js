function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    //checks to see if i = 1
    if(i === 1) {
      //if true, we add the following string to the array
      array.push(`"I am 1 strange loop."`);
    }
    else {
      //otherwise, we add the following string to the array
        array.push(`"I am ${i} strange loops."`);
    }
  }
  return array
}

function whileLoop(number) {
  //counts down from passed number, logging progress to the console
  while (number > 0) {
    console.log(--number)
  }
  return `done`
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    //removes the last element in the array
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array
}
