function solve(arr) {
// 	let unique = Array.from(new Set(arr));
//   let result = [];
  
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (unique.includes(arr[i])) {
//       result.unshift(arr[i]);
//       unique = unique.filter(num => num !== arr[i]);
//     }
//   }
  
//   return result;

	let newArr = [...new Set(arr.reverse())].reverse()
	return newArr
	
}
console.log(solve([3,4,4,3,6,3]))