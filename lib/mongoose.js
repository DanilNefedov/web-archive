import mongoose from "mongoose"

const connectDB = async () =>{
  try{
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log(`Connected`)
  }catch(err){
    console.log(err)
  }
}

export default connectDB