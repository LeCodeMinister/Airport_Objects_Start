class Bag {
            //1a. Should handle an exception in case user adds no weight and throw an error.
    constructor(weight) {
        if (!weight) {
            throw new Error("bag needs weight")
        }
        this.weight = weight;
    }

}

try {
    // const bag1 = new Bag();
    // console.log(bag1);
} catch (error) {
    console.log(error);
}

//Export the module
module.exports = Bag;