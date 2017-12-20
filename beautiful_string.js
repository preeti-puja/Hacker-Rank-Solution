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

function minSteps(n, B){
  var switches = 0;
  for (i = 0; i < n-2;){
    if(B[i] == '0' && B[i+1] == '1' && B[i+2] == '0'){
      switches++
      i += 3
    }
    else {
      i++
    }
  }
  return switches;
}

function main() {
    var n = parseInt(readLine());
    var B = readLine();
    var result = minSteps(n, B);
    process.stdout.write(""+result+"\n");

}