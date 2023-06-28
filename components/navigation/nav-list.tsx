import classNames from 'classnames'
import style from './navigation.module.css'


export function NavList(){
    return(
        <ul className={style.navList}>
            <li className={classNames(style.item, 'elem active-nav')}>
                <a href="#">Work</a>
            </li>

            <li className={classNames(style.item, 'elem ')}>
                <a href="#">Home</a>
            </li>

            <li className={classNames(style.item, 'elem ')}>
                <a href="#">Books</a>
            </li>
           
        </ul>
    )
}