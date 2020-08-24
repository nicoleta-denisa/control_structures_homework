//1. display in the console the numbers from 1 to 20
console.log("Numbers from 1 to 20:");
var input = 1;
while (input <= 20){
    console.log(input++);
}

//2. display in the console the odd numbers from 1 to 20
console.log("Odd numbers from 1 to 20:");
for (var i = 1; i <=20; i += 2) {
    console.log(i);
}

//3. compute the sum of the elements of an array and display it in the console
console.log("Sum of the elements of an array:");

var array = [1, 25, 5, 26, 58];
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
}
console.log(sum);

// 4. compute the maximum of the elements of an array and display it in the console 
console.log("Maximum of the elements of an array:");

var array = [1, 25, 5, 155, 58];
var max = array[0];
for (var i = 0; i < array.length; i++) {
    value = array[i];
    max = (value > max) ? value : max;
}
console.log(max);


function maxOfArr(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

let myArr = [1, 25, 5, 155, 58];
console.log(maxOfArr(myArr));

// 5. compute how many times a certain element appears in an array

console.log("compute how many times a certain element appears in an array:");

var arr1 = [2,1,5,7,3,2,5,2,2];
var counts = {};

for (var i = 0; i < arr1.length; i++) {
    var num = arr1[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log("2 appears " + counts[2] + " times");
  

// 6. using nested for generate the following pattern
//            0 1 0 1

//            1 0 1 0

//            0 1 0 1

//            1 0 1 0

console.log("nested patern with for:");

function generateGrid() {
    let i, j, grid = "";

    for ( i = 0; i < 4; i++ ) {
        for ( j = 1; j < 5; j++ ) {
        if ( ( i + j ) % 2 ) {
            grid += "0";
        } else {
            grid += "1";
        }
        }        
        grid += "\n";
    }      
    return grid;
}
var grid = generateGrid();

console.log(grid);