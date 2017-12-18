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
    arr = readLine().split(' ');
    arr = arr.map(Number);
  var sum1 = 0, maxs = 0, mins = 0;
  var max = arr[0];
  var min = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
    sum1 += arr[i];
  }
  maxs = sum1 - min;
  mins = sum1 - max;
  console.log(mins, maxs);
}
