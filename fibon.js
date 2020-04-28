function printSequence(number) {
  let a = 0;
  let b = 1;
  let newSequence = [];

  for (i = 0; i < number; i++) {
    if (i === 0) {
      newSequence.push(0);
      continue;
    }
    if (i === 1) {
      newSequence.push(1);
      continue;
    }

    let c = a + b;
    a = b;
    b = c;
    newSequence.push(c);
  }
  return newSequence;
}
printSequence(8);
