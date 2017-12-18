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

function main() {
  var S = readLine();
  var other = 0;
  var s = 'S'.charCodeAt();
  var o = 'O'.charCodeAt();
  for (i = 0; i < S.length; i+= 3){
    
    if( S[i].charCodeAt() != s){
      other++
    } 
    
    if (S[i+1].charCodeAt() != o){
      other++
    } 
    
    if(S[i+2].charCodeAt() != s){
      other++
    }
  }
  console.log(other);
}