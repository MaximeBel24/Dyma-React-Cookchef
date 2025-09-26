import React, {useState} from 'react';
import styles from './App.module.scss';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import {seedRecipes} from "./data/seed.js";
import Admin from "./pages/Admin/Admin.jsx";

seedRecipes();

function App() {
    const [page, setPage] = useState('homepage');

    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header setPage={setPage} />
            {page === 'homepage' && <HomePage />}
            {page === 'admin' && <Admin />}
            <Footer />
        </div>
    )
}

export default App;
