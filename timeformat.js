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

function timeConversion(s) {
  var PM = s.match("PM")? true: false;
  s = s.split(":");
  var min = s[1];
  
  if (PM){
    if (parseInt(s[0], 10) > 11 && parseInt(s[0], 10) < 24 ){
      var hour = s[0];
    }
    else if  (0 < parseInt(s[0], 10) && parseInt(s[0], 10) < 12){
      var hour = parseInt(s[0], 10) + 12;
    }
    else if (parseInt(s[0], 10) == 12 ){
      var hour = "00";
    }
    var sec = s[2].replace("PM", "");
  }
  else {
    var sec = s[2].replace("AM", "");
  }
  return( hour + ":"+  min +":" + sec );
   
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
