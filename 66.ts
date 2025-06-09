function plusOne(digits: number[]): number[] {
  let divident = 0n;
  for (let i = 0; i < digits.length; i++) {
    let divisor = 10n ** BigInt(digits.length - 1 - i);

    if (digits[i] !== 0) divident += divisor * BigInt(digits[i]);
  }

  divident += 1n;

  let returnDigits: number[] = [];

  while (divident > 0) {
    returnDigits.unshift(Number(divident % 10n));
    divident /= 10n;
  }

  return returnDigits;
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
