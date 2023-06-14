import style from './header.module.css'


export function Section(){
    return(
        <div className={style.addSection}>
            <button>Add New Section</button>
        </div>
    )
}