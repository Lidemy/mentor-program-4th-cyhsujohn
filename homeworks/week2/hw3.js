function reverse(str) {
  let reversedStr = []
  for (let i=str.length-1; i>=0; i--) {
  	reversedStr.push(str[i])
  }
  console.log(reversedStr.join(''))
}


/* 看完範例後更直覺的解法
function reverse(str) {
	let reversedStr = ''
	for (let i=str.length-1; i>=0; i--) {
	reversedStr + str[i]
	}
	console.log(reversedStr)
} */

reverse('hello');