import connectDB from "@/lib/mongoose"
import Nav_Theme from "@/models/nav-theme"
import { NextResponse } from "next/server"





export async function POST(req: Request) {
    const { connection_id, theme:[{theme_name, navigation:[{nav_name, title, description}]}] } = await req.json()
    await connectDB()
    await Nav_Theme.create({ connection_id, theme:[{theme_name, navigation:[{nav_name, title, description}]}] })
    return NextResponse.json({ message: 'Create nav-theme' }, { status: 201 })
}



export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const connection_id = searchParams.get('connection_id')
    if(connection_id){
        await connectDB()
        const navTheme = await Nav_Theme.find({ connection_id })
        return NextResponse.json({ navTheme })
    }else if(connection_id === null ){
        await connectDB()
        const navTheme = await Nav_Theme.find()
        return NextResponse.json({ navTheme })
    }
   
}

