import style from './navigation.module.css'


export function NavList(){
    return(
        <ul className={style.navList}>
            <li className={style.item}>
                <a href="#">Work</a>
            </li>

            <li className={style.item}>
                <a href="#">Home</a>
            </li>

            <li className={style.item}>
                <a href="#">Books</a>
            </li>
        </ul>
    )
}