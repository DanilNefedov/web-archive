import { AddSection } from './addSection'
import style from './header.module.css'
import classNames from 'classnames'
import { IsAuthHeader } from './isAuthHeader'
import Link from 'next/link'



export function Header(){

    return(
        <header  className={style.header}>
            <ul className={style.listNav}>
                <li className={classNames(style.item, 'elem active-nav')}>
                    <Link href="#">All</Link> 
                </li>

                <li className={classNames(style.item, 'elem')}>
                    <Link href="#">Sites</Link> 
                </li>

                <li className={classNames(style.item, 'elem')}> 
                    <Link href="#">Photo</Link> 
                </li>
            </ul>

            {/* <IsAuthHeader></IsAuthHeader> */}
            <AddSection></AddSection>
        </header>
    )
}