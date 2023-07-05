'use client'
import { useAppDispatch, useAppSelector } from '@/app/Redux/hook';
import { useEffect, useState } from 'react';

export function BlockContent (){
  const [user, setUser] = useState(null);
  const userStore = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()



  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = 'dinilnefedov@gmail.com'
        const res = await fetch(`api/user?email=${encodeURIComponent(email)}`, {
          cache: "no-store"
        });

        if (!res.ok) {
          console.log('res user is not OK');
          return;
        }

        const userData = await res.json();
        setUser(userData.user);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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
