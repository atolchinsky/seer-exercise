export function isPalindrome(S: string): boolean {
  return S === reverseString(S)
}

export function removeCharAtIndexFromString(S: string, indexToRemove: number): string {
  const part1: string = S.substring(0, indexToRemove)
  const part2: string = S.substring(indexToRemove + 1, S.length)
  return part1 + part2
}

function reverseString(str: string): string {
  return str.split('').reverse().join('')
}
