import {NavLink} from "react-router";
import styles from './AdminRecipesNav.module.scss'

function AdminRecipesNav() {
    return (
        <ul className={`${styles.list} d-flex flex-column`}>
            <NavLink
                className={({ isActive }) =>(isActive ? styles.active : '')}
                to={'list'}
            >
                List des recettes
            </NavLink>
            <NavLink
                className={({ isActive }) =>(isActive ? styles.active : '')}
                to={'new'}
            >
                Ajouter une recette
            </NavLink>
        </ul>
    );
}

export default AdminRecipesNav;