'use client'
import {useSession} from 'next-auth/react'



export function IsAuthHeader(){
    const session = useSession()
    // console.log(session)

    return(
        <div className="">Auth</div>
    )
}