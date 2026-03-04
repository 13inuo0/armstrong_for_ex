for (let i = 1; i < 10; i++) {
  // console.log(i)
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
    //   console.log(i, j, k);
      let sum = i * i * i + j * j * j + k * k * k;
      let currentNumber = i * 100 + j * 10 + k * 1;
    //   console.log(currentNumber)

    if(sum === currentNumber){
        console.log(currentNumber)
    }
    }
  }
}
