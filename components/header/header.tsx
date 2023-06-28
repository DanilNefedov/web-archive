import { AddSection } from './addSection'
import style from './header.module.css'
import classNames from 'classnames'
import { IsAuthHeader } from './isAuthHeader'



export function Header(){

    return(
        <header  className={style.header}>
            <ul className={style.listNav}>
                <li className={classNames(style.item, 'elem active-nav')}>
                    <a href="#">All</a> 
                </li>

                <li className={classNames(style.item, 'elem')}>
                    <a href="#">Sites</a> 
                </li>

                <li className={classNames(style.item, 'elem')}> 
                    <a href="#">Photo</a> 
                </li>
            </ul>

            {/* <IsAuthHeader></IsAuthHeader> */}
            <AddSection></AddSection>
        </header>
    )
}