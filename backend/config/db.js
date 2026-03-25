import mongoose from "mongoose";
 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://fooddel:11223344@fooddel.ejimluv.mongodb.net/food-del').then(()=>console.log("Db connected "))
}