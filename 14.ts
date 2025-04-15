function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let commonLength: number = 0;
  let sameSame: boolean = true;
  let letterTarget: string = "";

  let i = 1;
  while (i <= 200) {
    if (!sameSame) break;
    letterTarget = strs[0][i - 1];
    if (letterTarget) {
      for (let j = 0; j < strs.length; j++) {
        let letterReading = strs[j][i - 1];

        if (letterReading) {
          if (letterReading === letterTarget) {
            sameSame = true;
          } else {
            sameSame = false;
            commonLength = i - 1;
            break;
          }
        } else {
          sameSame = false;
          commonLength = i - 1;
          break;
        }
      }
      ++i;
    } else {
      sameSame = false;
      commonLength = i - 1;
      break;
    }
  }
  if (commonLength > 0) {
    return strs[0].slice(0, commonLength);
  } else {
    return "";
  }
}

const arr = ["interstellar", "internet", "interval"];

console.log(longestCommonPrefix(arr));
