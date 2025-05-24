function strStr(haystack: string, needle: string): number {
  let occurences: number[] = [];

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      occurences.push(i);

      for (let j = 1; j < needle.length; j++) {
        if (needle[j] !== haystack[j + i]) {
          occurences.pop();
          break;
        }
      }
    }
  }
  if (occurences.length) {
    return occurences[0];
  } else return -1;
}

let haystack = "leetcode";
let needle = "leeto";

console.log(strStr(haystack, needle));
