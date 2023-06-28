'use client'

import { signOut } from 'next-auth/react'
import style from './navigation.module.css'
import Link from 'next/link'
import classNames from 'classnames'


export function LogOut() {
    return (
        <Link href='/' className={classNames( style.btnLogout, 'btn')} onClick={() => signOut()}>
            Sign Out
        </Link>
    )
}