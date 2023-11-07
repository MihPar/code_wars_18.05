function timedReading(maxLength, text) {
	let arr = text.split(' ')
	let newArr = []
	let str
	for(let i = 0; i < arr.length; i++) {
	 str = arr[i].match(/[A-Za-z]/gm)
	 if(!str) {
	  return 0
	 }
	  if(str.length <= maxLength) {
	   newArr.push(str.join(''))
	  } 
	}
	return newArr.length
   }
   // console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'"))
   // console.log(timedReading(1,"..."))
   // console.log(timedReading(1,"Oh!"))
   console.log(timedReading(5,"Although zebra species may have overlapping ranges, they do not interbreed."))
   
   
									 