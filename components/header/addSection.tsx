import classNames from 'classnames'
import style from './header.module.css'


export function AddSection(){
    return(
        <div className={style.addSection}>
            <button className={classNames( style.addSectionBtn, 'btn')}>Add New Section</button>
            
        </div>
    )
}