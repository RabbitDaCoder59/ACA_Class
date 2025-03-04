const arrayNumber = [1,3,5,7,9];

console.log("Array ==>", arrayNumber);


let addNumToArray = (num) => {
    arrayNumber.push(num)
    console.log("Added number:${num} to array",arrayNumber);
    
};

addNumToArray(100);

let removeLastNumToArray = () => {
    arrayNumber.pop();
    console.log('remove last number from array', arrayNumber);
    
};

removeLastNumToArray();

let sumOfNumberInArray = () => {
    let sum = 0;
    for (let num of arrayNumber) {
        sum += num;
    }
    console.log('Sum of number in array is ${sum}');
    
};

sumOfNumberInArray();