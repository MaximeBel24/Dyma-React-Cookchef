import styles from './HomePage.module.scss';
import Recipe from './components/Recipe/Recipe.jsx';
import {useContext, useEffect, useState} from "react";
import Loading from "../../components/Loading/Loading.jsx";
import {ApiContext} from "../../context/ApiContext.jsx";
import Search from "./components/Search/Search.jsx";
import {useFetchData} from "../../hooks/index.js";

function HomePage() {

    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const BASE_URL_API = useContext(ApiContext);
    const [[recipes, setRecipes], isLoading] = useFetchData(BASE_URL_API, page);

    function updateRecipe(updateRecipe) {
        setRecipes(
            recipes.map((r) => (r._id === updateRecipe._id ? updateRecipe : r))
        )
    }

    return (
        <div className="flex-fill container d-flex flex-column p-20">
            <h1 className="my-30">
                Découvrez nos nouvelles recettes{' '}
                <small className={styles.small} >- {recipes.length}</small>
            </h1>
            <div className={`card p-20 flex-column p-20 ${styles.contentCard}`}>
                <Search setFilter={setFilter} />
                {isLoading && !recipes.length ? (
                    <Loading />
                ) : (
                    <div className={styles.grid}>
                        {recipes
                            .filter((r) => r.title.toLowerCase().startsWith(filter))
                            .map((r) => (
                                <Recipe
                                    key={r._id}
                                    recipe={r}
                                    toggleLikedRecipe={updateRecipe}
                                />
                            ))}
                    </div>
                )}
                <div className={"d-flex flex-row justify-content-center align-items-center p-20"}>
                    <button onClick={() => setPage(page + 1)} className={"btn btn-primary"}>
                        Charger plus de recettes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;