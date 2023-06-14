import style from './navigation.module.css'


export function ThemeLogout(){
    return(
        <div className="">
            <div className="theme">
                <img src="" alt="theme" />
            </div>
             
            <a className={style.btnLogout}>
                Log Out
            </a>
        </div>
    )
}