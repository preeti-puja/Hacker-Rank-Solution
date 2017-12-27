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
  var q = parseInt(readLine());
  for(var a0 = 0; a0 < q; a0++){
    var s = readLine();
    var str = "hackerrank";
        if (s.length < str.length) {
            return "NO";
        }
        var j = 0;
        for (var i = 0; i < s.length; i++) {
            if (j < str.length && s.charAt(i) == str.charAt(j)) {
                    j++;
            }
        }
        console.log (j == str.length ? "YES" : "NO");
 
  }
}