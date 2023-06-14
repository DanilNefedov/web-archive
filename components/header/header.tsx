import style from './header.module.css'
import { Section } from './section'
import classNames from 'classnames'



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

            <Section></Section>
        </header>
    )
}