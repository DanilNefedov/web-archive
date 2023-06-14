import { AboutUser } from './about-user';
import { NavList } from './nav-list';
import style from './navigation.module.css';
import { ThemeLogout } from './theme-logout';


export function Navigation () {
    return(
        <nav className={style.navigation}>
            <div className={`${style.containerNav}`}>
                <AboutUser></AboutUser>

                <NavList></NavList>

                <ThemeLogout></ThemeLogout>
            </div>
        </nav>
    )
}