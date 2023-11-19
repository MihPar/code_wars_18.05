function isDigit(s) {
	s = s.trim();
  var pattern = /^[-+]?(\d+(\.\d*)?|\.\d+)$/;
	return pattern.test(s);
	
  }