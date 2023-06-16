import style from './header.module.css'


export function AddSection(){
    return(
        <div className={style.addSection}>
            <button className={style.addSectionBtn}>Add New Section</button>
            
        </div>
    )
}