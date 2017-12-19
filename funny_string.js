process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function funnyString(s){
  for (i = 0; i < s.length-1; i++){
    if(Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i)) !==
       Math.abs(s.charCodeAt(s.length - i - 2) - s.charCodeAt(s.length - i - 1))) {
      return "not funny";
    }
  }
  return "funny";
}

function main() {
  var q = parseInt(readLine());
  for(var a0 = 0; a0 < q; a0++){
    var s = readLine();
    var result = funnyString(s);
    process.stdout.write("" + result + "\n");
  }
  
}