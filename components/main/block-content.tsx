'use client'
import { useAppDispatch, useAppSelector } from '@/app/Redux/hook';
import { getCall } from '@/config/callsApi/getCall';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export function BlockContent (){
  const userStore = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const session = useSession()

  useEffect(() => {
    async function fetchData() {
      const url = 'api/user?email=dinilnefedov@gmail.com'; // Замените на свою ссылку
      try {
        const response = await getCall(url) ;
        console.log('Successful Response:', response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []); 


  console.log(userStore, session);

  return (
    <div className="content">
      <div className="container">
        <div className="h3">Name Content</div>

        <div className="info-content">Info Info Info info info info info</div>

        <button>Send</button>
      </div>
    </div>
  );
};
