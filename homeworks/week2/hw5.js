function join(arr, concatStr) {
	
	if (arr.length === 0) {
		return ''
	} // 看完範例後修改此行加入特殊情形

	let joinedLetters = arr[0]
	for (let i=1; i<arr.length; i++) {
		joinedLetters += concatStr + arr[i]
	}
	return joinedLetters
}

function repeat(str, times) {
	let repeatedWords = str
	for (let i=1; i<times; i++) {
		repeatedWords += str
	}
	return repeatedWords
  
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
//console.log(join(['a','b','c','d'], '??'))
//console.log(typeof join(['aaa','bb','c','dddd'], ',,'))
//console.log(join([1,2,3],''));