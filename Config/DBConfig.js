import mongoose from "mongoose";

const DBconfig = async () => {
    try {
     await mongoose.connect('mongodb+srv://baskar_l:baskar@cluster0.e5zjhnp.mongodb.net/')
        console.log("DB connected");
    } catch (error) {
        console.log("couldn't connect DB", error);
    }
}

export default DBconfig;
