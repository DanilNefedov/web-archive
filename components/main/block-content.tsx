'use client'
import { useEffect, useState } from 'react';

export function BlockContent (){
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('api/user', {
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

  console.log(user);

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
