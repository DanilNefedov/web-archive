'use client'

import { FrameComponent } from '@/components/frame/frame';
import { MainContent } from '@/components/main/main-content'
import clientPromise from '@/mongoDB';
import { getUsers } from '@/mongoDB/users';
import { useEffect } from 'react';


// async function fetchUsers(){
//   const {users} = await getUsers()

//   if(!users) console.log('error')

//   return users
// }


export default async function Home() {
  // const user = await fetchUsers()

  console.log( 'ww')

  return (
    <>
      <MainContent></MainContent>
      
    {/* <iframe 
    src='https://www.olx.ua/l'
    // src="https://rozetka.com.ua/ua/" 
     ></iframe> */}
      {/* <FrameComponent></FrameComponent> */}
      
    </>
   
  )
}
