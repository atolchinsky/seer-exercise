import { isPalindrome, removeCharAtIndexFromString } from './helper'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function init() {
  const answer: string = await question('How many palindome tests would you like to try?\n')
  if (Number(answer) != NaN) {
    await askQuestions(Number(answer))
  } else {
    console.log('Your answer must be a valid number')
  }
  rl.close()
}

async function askQuestions(numberOfQuestions: number) {
  for (let i = 0; i < numberOfQuestions; i++) {
    const S: string = await question('Which string would you like try to make a palindrome?\n')

    const n: number = charIndexToCreatePalindrome(S)
    console.log(`${S} will be a palindome by removing the char at index ${n}`)
  }
}

function question(questionString: string) {
  return new Promise<string>((resolve) => rl.question(questionString, (a) => resolve(a)))
}

function charIndexToCreatePalindrome(S: string): number {
  let indextoRemove: number = -1

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
