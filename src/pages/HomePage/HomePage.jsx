import styles from './HomePage.module.scss';
import Recipe from './components/Recipe/Recipe.jsx';
import {useState} from "react";
import Loading from "../../components/Loading/Loading.jsx";

function HomePage() {

    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState('');

    function handleInput(e) {
        const filter = e.target.value;
        setFilter(filter.trim().toLowerCase());
    }

    return (
        <div className="flex-fill container p-20">
            <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
            <div className={`card p-20 flex-column p-20 ${styles.contentCard}`}>
                <div className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}>
                    <i className="fa-solid fa-magnifying-glass mr-15"></i>
                    <input onInput={handleInput} className="flex-fill" type="text" placeholder={"Rechercher"}/>
                </div>
                {isLoading && !recipes.length ? (
                    <Loading />
                ) : (
                    <div className={styles.grid}>
                        {recipes
                            .filter((r) => r.title.toLowerCase().startsWith(filter))
                            .map((r) => (
                                <Recipe key={r._id} title={r.title} image={r.image}/>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;