```Given an array of bird where every element represent a bird type id,determine the id’s of the
most frequently and least frequently sighted type. If more than 1 type has been spotted that 
maximum amount,return the smallest of their ids and If more than 1 type has been spotted that
minimum amount, return the smallest of their ids. ```

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
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var max = 0;
    var min = 0;
    b = new Array(6);
    b.fill(0);
    for(i=0;i<n;++i){
        b[a[i]]++;
       
    }
    var ind1 = 0;
    var ind2 = 0;
    for(i=1;i<=5;++i){
        if(b[i]>max){
            max = b[i];
            ind1 = i;
        }
        else if(b[i]<min){
            min = b[i];
            ind2 = i;
        }
    }
    // your code goes here
    console.log(ind1);
    console.log(ind2);
}
