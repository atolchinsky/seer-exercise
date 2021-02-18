import { isPalindrome, removeCharAtIndexFromString } from './helper'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function init(): Promise<void> {
  const answer: string = await question('How many palindome tests would you like to try?\n')
  if (Number(answer) != NaN) {
    await askQuestions(Number(answer))
  } else {
    console.log('Your answer must be a valid number')
  }
  rl.close()
}

async function askQuestions(numberOfQuestions: number): Promise<void> {
  for (let i = 0; i < numberOfQuestions; i++) {
    const S: string = await question('Which string would you like try to make a palindrome?\n')

    const n: number = charIndexToCreatePalindrome(S)
    console.log(`RESULT: ${S} will be a palindome by removing the char at index ${n}\n`)
  }
}

function question(questionString: string): Promise<string> {
  return new Promise<string>((resolve) => rl.question(questionString, (a) => resolve(a)))
}

function charIndexToCreatePalindrome(S: string): number {
  let indextoRemove: number = -1

  // TODO: This algorithm can be improved based on a few scenarios:
  // 1. If the goal is to find the first character removal to create an palindrome, we can leave the for loop as is.
  // 2. If the goal is to find a single character and assumes only a single problematic character exists,
  //    we can loop through only half of the char array, and check the tail end for the problematic character.
  // 3. If the goal is to find all of the characters, we can loop through only half of the char array, and return an array
  //    of numbers with each potential index that can be removed.

  if (S && S.length > 0 && !isPalindrome(S)) {
    for (let i = 0; i < S.length; i++) {
      const testS: string = removeCharAtIndexFromString(S, i)
      if (isPalindrome(testS)) {
        indextoRemove = i
        break
      }
    }
  } else {
    return indextoRemove
  }

  return indextoRemove
}

init()
