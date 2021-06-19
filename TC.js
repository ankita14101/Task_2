//2nd Given a time in 12-hr AM/PM format, convert it to military time(24hr). 

function processData(input) {
    var amPm = input.substring(input.length-2);
    if(amPm == 'PM'){
        var replace=parseInt(input.substring(0,2))
        input = input.replace(input.substring(0,2),(replace < 12 ) ? replace+12:replace);
        input = input.substring(0, input.length-2);
    }else{
       if(parseInt(input.substring(0, 2)) == 12){
           input = input.replace(input.substring(0,2), '00');
           input = input.substring(0, input.length-2);
       }else{
           input = input.substring(0, input.length-2);
       }     

    }
    console.log(input)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input1 = '00:45:45';
_input = " ";
process.stdin.on("data", function (input) {
    _input1 = _input1+ input;
});

process.stdin.on("end", function () {
   processData(_input);
});