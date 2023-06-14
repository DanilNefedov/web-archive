import style from './navigation.module.css';



export function AboutUser() {
    return(
        <div className={style.sectionUser}>
            <div className={style.userPhoto}>
                <img src='./images/user.svg' alt="user" />
            </div>
            <p className="user-name">
               Hi There, <span className={style.nameUser}>Name Name</span> 
            </p>
        </div>
    )
}