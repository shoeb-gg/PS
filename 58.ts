function lengthOfLastWord(s: string): number {
  const words: string[] = s.trim().split(" ");

  const lastWord: string = words[words.length - 1];

  return lastWord.length;
}

console.log(lengthOfLastWord("luffy is still joyboy"));
