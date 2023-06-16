import { AddSection } from './addSection'
import style from './header.module.css'
import classNames from 'classnames'
import { IsAuthHeader } from './isAuthHeader'



export function Header(){

    return(
        <header  className={style.nav}>
            <ul className={style.listNav}>
                <li className={classNames(style.elem, 'active')}>
                    <a href="#">All</a> 
                </li>

                <li className={style.elem}>
                    <a href="#">Sites</a> 
                </li>

                <li className={style.elem}> 
                    <a href="#">Photo</a> 
                </li>
            </ul>

            <IsAuthHeader></IsAuthHeader>
            <AddSection></AddSection>
        </header>
    )
}