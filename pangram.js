process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
  var i = 0, char;
  var str = "abcdefghijklmnopqrstuvwxyz";
  input = input.toLowerCase().replace(/\s+/g, '');
  for (i = 0; i < str.length; i++){
    char = str[i];
    if (input.indexOf(char) == -1){
      console.log("not pangram");
      break;
      
    }
    else  if (i == 25){
      console.log("pangram")
    }
    
  }
});
process.stdin.on("end", function () {
  
});
