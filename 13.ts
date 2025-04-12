enum symbolToValue {
  I = 1,
  IV = 4,
  V = 5,
  IX = 9,
  X = 10,
  XL = 40,
  L = 50,
  XC = 90,
  C = 100,
  CD = 400,
  D = 500,
  CM = 900,
  M = 1000,
}

function romanToInt(s: string): number {
  let returnInt: number = 0;

  if (s.length === 0) return 0;

  let splitLetters: string[] = s.split("");

  for (let i = 0; i < splitLetters.length; i++) {
    let letter = splitLetters[i];
    let nextLetter = splitLetters[i + 1];

    if (letter === "I") {
      if (nextLetter === "V") {
        returnInt += symbolToValue.IV;
        i++;
        continue;
      } else if (nextLetter === "X") {
        returnInt += symbolToValue.IX;
        i++;
        continue;
      } else returnInt += symbolToValue.I;
    } else if (letter === "V") {
      returnInt += symbolToValue.V;
    } else if (letter === "X") {
      if (nextLetter === "L") {
        returnInt += symbolToValue.XL;
        i++;
        continue;
      } else if (nextLetter === "C") {
        returnInt += symbolToValue.XC;
        i++;
        continue;
      } else returnInt += symbolToValue.X;
    } else if (letter === "L") {
      returnInt += symbolToValue.L;
    } else if (letter === "C") {
      if (nextLetter === "D") {
        returnInt += symbolToValue.CD;
        i++;
        continue;
      } else if (nextLetter === "M") {
        returnInt += symbolToValue.CM;
        i++;
        continue;
      } else returnInt += symbolToValue.C;
    } else if (letter === "D") {
      returnInt += symbolToValue.D;
    } else if (letter === "M") {
      returnInt += symbolToValue.M;
    }
  }

  return returnInt;
}

console.log(romanToInt("DCXXI"));
