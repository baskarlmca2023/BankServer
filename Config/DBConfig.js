import mongoose from "mongoose";

const DBconfig = async () => {
    try {
        // await mongoose.connect('mongodb://localhost/bank')
        await mongoose.connect('mongodb://127.0.0.1:27017/')
        console.log("DB connected");
    } catch (error) {
        console.log("couldn't connect DB", error);
    }
}

export default DBconfig;
