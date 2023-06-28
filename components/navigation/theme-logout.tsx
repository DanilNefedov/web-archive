import style from './navigation.module.css'
import { LogOut } from './log-out'


export function ThemeLogout(){
    return(
        <div className={style.themeLog}>
            {/* <div className="theme">
                <img src="" alt="theme" />
            </div> */}
             
           <LogOut></LogOut>
        </div>
    )
}