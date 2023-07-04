import connectDB from "@/lib/mongoose"
import User from "@/models/user"
import { NextResponse } from "next/server"


export async function POST(req: Request){
  const {name, email} = await req.json()
  await connectDB()

  await User.create({name, email}) 

  
  return NextResponse.json({message:'Create user'}, {status:201}) 
}



export async function GET(){
  await connectDB()
  const user = await User.find()
  return NextResponse.json({user}) 
}

