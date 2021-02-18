import * as readline from 'readline'

export function isPalindrome(S: string): boolean {
  return S === reverse(S)
}

function reverse(str: string): string {
  return str.split('').reverse().join('')
}

export function removeCharAtIndexFromString(S: string, indexToRemove: number): string {
  const part1: string = S.substring(0, indexToRemove)
  const part2: string = S.substring(indexToRemove + 1, S.length)
  return part1 + part2
}

export const askQuestions = function (questions) {
  return new Promise(async (resolve) => {
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    let results = []
    for (let i = 0; i < questions.length; i++) {
      const result = await askQuestion(rl, questions[i])
      results.push(result)
    }
    rl.close()
    resolve(results)
  })
}

const askQuestion = (rl, question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer)
    })
  })
}
