const assertEqual = require("./assertEqual")


const args = process.argv.slice(2);

function head(arr){
    let index = arr[0];
    console.log(`this is the head: ${index}`);
    return index;
}



head(args);
assertEqual.assertEqual(head([5,6,7]), 5);
assertEqual.assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual.assertEqual(head([1]), 1);
assertEqual.assertEqual(head([]), undefined);
