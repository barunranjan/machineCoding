// function lengthOfLongestSubstring(str) {
//     let charIndexMap = {};
//     let start = 0;
//     let maxLength = 0;
//     let longestSub = "";

//     for (let end = 0; end < str.length; end++) {
//         const currentChar = str[end];

//         if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
//             start = charIndexMap[currentChar] + 1;
//         }

//         charIndexMap[currentChar] = end;

//         if (end - start + 1 > maxLength) {
//             maxLength = end - start + 1;
//             longestSub = str.substring(start, end + 1);
//         }
//     }

//     console.log(longestSub);
// }

// // console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
// // lengthOfLongestSubstring("pwwkew");   // Output: 3 ("wke")
// lengthOfLongestSubstring("ababcd"); // Output: 3 ("abc")

// const wordWithoutVowel = (str) => {
//     return str.replace(/[aeiou]/gi, '')
// }
// console.log(wordWithoutVowel('Hello World'))

// const reverseAString = (str) => {
//     return str.trim().split(/\s+/).reverse().join(' ')
//     rev
// }
// console.log(reverseAString(' This is  a  test string '))

// const palindrom = (str) => {
//     let rev = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         rev = rev + str[i]
//     }
//     if (str.toLowerCase() === rev.toLowerCase()) {
//         return true
//     } else {
//         return false
//     }

// }
// console.log(palindrom('deifid'))

// function fullNames(names) {
//     return names.map((item) => `${item.firstname} ${item.lastname}`)
// }

// names = [{ firstname: 'Bruce', lastname: 'Wayne' }, { firstname: 'Clark', lastname: 'Kent' }]
// console.log(fullNames(names))

// const flatenArray = (arr) => {
//     const result = []
//     function flatten(input) {
//         for (let i = 0; i < input.length; i++) {
//             if (Array.isArray(input[i])) {
//                 flatten(input[i])
//             } else {
//                 result.push(input[i])
//             }
//         }
//     }
//     flatten(arr)
//     return result
// }
// console.log(flatenArray([1, [2], [3, [[4]]]]))

// const printFibonacci = (num) => {
//     let a = 0
//     let b = 1
//     let series = []
//     for (let i = 0; i < num; i++) {
//         let next = a + b
//         series.push(a)
//         a = b
//         b = next

//     }
//     return series
// }
// console.log(printFibonacci(7))
