import classNames from 'classnames'
import style from './navigation.module.css'
import Link from 'next/link'


export function NavList(){
    return(
        <ul className={style.navList}>
            <li className={classNames(style.item, 'elem active-nav')}>
                <Link href="/home">Home</Link>
            </li>

            <li className={classNames(style.item, 'elem ')}>
                <Link href="/work">Work</Link>
            </li>

            <li className={classNames(style.item, 'elem ')}>
                <Link href="/books">Books</Link>
            </li>
           
        </ul>
    )
}