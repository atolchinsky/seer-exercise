import { isPalindrome, removeCharAtIndexFromString } from './helper'
import * as readline from 'readline'

async function init(): Promise<void> {
  const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const answer: string = await question('How many palindome tests would you like to try?\n', userInterface)
  if (typeof answer != 'number' || answer <= 0) {
    await askQuestions(Number(answer), userInterface)
  } else {
    console.log('Your answer must be a valid number')
  }
  userInterface.close()
}

async function askQuestions(numberOfQuestions: number, userInterface: readline.Interface): Promise<void> {
  for (let i = 0; i < numberOfQuestions; i++) {
    const S: string = await question('Which string would you like try to make a palindrome?\n', userInterface)

    const charIndexToRemove: number = charIndexToCreatePalindrome(S)
    console.log(`RESULT: ${S} will be a palindome by removing the char at index ${charIndexToRemove}\n`)
  }
}

function question(questionString: string, userInterface: readline.Interface): Promise<string> {
  return new Promise<string>((resolve) => userInterface.question(questionString, (a) => resolve(a)))
}

function charIndexToCreatePalindrome(S: string): number {
  let indexToRemove: number = -1

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
        indexToRemove = i
        break
      }
    }
  } else {
    return indexToRemove
  }

  return indexToRemove
}

init()
