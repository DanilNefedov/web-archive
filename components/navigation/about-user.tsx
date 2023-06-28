import style from './navigation.module.css';



export function AboutUser() {
    return(
        <div className={style.sectionLogo}>
            <div className={style.logo}>
                <img src='./images/logo.svg' alt="web-archive"/>
            </div>
            <p className={style.logoName}>
               Archi 
            </p>
        </div>
    )
}