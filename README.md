# SEER Exercise

Coding exercise for SEER

## Description

### Exercise

Utilizing the compilable language of your choice - given a string, S, of lowercase letters, determine the index of the character whose removal will make S a palindrome. If S is already a palindrome or no such character exists, then print -1 . There will always be a valid solution, and any correct answer is acceptable.

### Input Format

The first line contains an integer, T, denoting the number of test cases.
Each line i of the T subsequent lines (where 0 < i < T)  describes a test case in the form of a single string, S.

### Constraints

All characters are lowercase English letters.

1 <= T <= 20 .

1 <= |S| <= 10^5 + 5 .

### Output Format

Print an integer denoting the zero-indexed position of the character that makes S not a palindrome; if S is already a palindrome or no such character exists, print -1.

### As part of this excercise, please complete the following steps:

1. Write code in the compilable language of your choice complete the excercise, adhering to guidelines in the previous section
2. Email an archive of your solution to me.

## How to run

### Prerequisites

- Must have Node installed locally

### Instructions

- `npm i`
- `npm start`

## Additional Info

- Included `prettier` along with a config for personal preference in dev dependencies for DX
- Used `readline` for user input because it ships with Node, but its not the best option
- Looping algorithm can be improved
