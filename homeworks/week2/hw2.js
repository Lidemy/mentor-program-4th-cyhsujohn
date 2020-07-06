function capitalize(str) {
  let capitalizedWord = []
  if (str[0]<'z' || str[0]>'a') {
  	capitalizedWord.push(str[0].toUpperCase())
  	for (let i=1; i<str.length; i++) {
  		capitalizedWord.push(str[i])
  		} 
  	return capitalizedWord.join('')
  	} else {
  	return str
  }
}

/* 參考範例後更直覺的答案
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
} */
console.log(capitalize('hello'));
