import style from './navigation.module.css'
import { LogOut } from './log-out'


export function ThemeLogout(){
    return(
        <div className="">
            <div className="theme">
                <img src="" alt="theme" />
            </div>
             
           <LogOut></LogOut>
        </div>
    )
}