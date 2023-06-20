'use client'

import { signOut } from 'next-auth/react'
import style from './navigation.module.css'
import Link from 'next/link'


export function LogOut() {
    return (
        <Link href='/' className={style.btnLogout} onClick={() => signOut()}>
            SignOut
        </Link>
    )
}