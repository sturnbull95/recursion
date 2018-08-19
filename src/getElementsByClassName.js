// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var everything = $("*");
	var result = [];
	var pattern = new RegExp(className);
		for(var i = 0; i < everything.length; i++){
			if(pattern.test(everything[i].className)){
        result.push(everything[i]);
      }
    }
		return result;
};
