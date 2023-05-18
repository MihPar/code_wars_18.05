function sixToast(num) {
    let count
    for(let i = 1; i <= 6; i++) {
      if(num <= i) {
         count = i - num
      } else if(num > i) {
         count = num - i
      }
    }
    return count
  }