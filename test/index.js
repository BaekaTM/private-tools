lib = require('@baeka/private-tools')

function test() {

    console.log("Test started:")

    var  test_values = [["a", "b", "c", "d"], "the t should be in upper case", [400, 600], , "desrever eb tn'dluohs ti"]
    var i = 0;

    for (fcn in lib) {

        console.log(lib[fcn](test_values[i]))
        i++

    }

    console.log("Test finished.")

}

test()