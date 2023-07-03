
import connectDB from "@/lib/mongoose"
import User from "@/models/user"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"



export async function GET(){
  await connectDB()
  const user = await User.find()
  console.log(user)
  return NextResponse.json({user}) 
}

