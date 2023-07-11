'use client'
import { fetchNavTheme } from '@/app/Redux/Slices/nav-theme';
import { useAppDispatch, useAppSelector } from '@/app/Redux/hook';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export function BlockContent (){
  const userStore = useAppSelector(state => state.navTheme)
  const dispatch = useAppDispatch()
  const session = useSession()
  const id = session?.data?.user?.id

  useEffect(() => {
    async function fetchData() {
      
      if(session.data){
        dispatch(fetchNavTheme('1212'))

      }
    }

    fetchData();
  }, [session]); 

  console.log(userStore);

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
