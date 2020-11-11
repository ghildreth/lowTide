const assertEqual = require("./assertEqual")

function tail(array){

    let copiedArray = array;

    if (copiedArray == null) {
        console.log("does it get here?")
        return [];
    } else {
        console.log(copiedArray.slice(1))
        return copiedArray.slice(1)
    }
    
}


let testArray = ["should be missing", "second item", "third item", "fourth item"];
const result = tail(testArray);
assertEqual.assertEqual(testArray.length, 4);
assertEqual.assertEqual(result[0], "second item");
assertEqual.assertEqual(result[result.length - 1], "fourth item")
