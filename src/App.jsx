import React from 'react';
import styles from './App.module.scss';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import {seedRecipes} from "./data/seed.js";

seedRecipes();

function App() {
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header />
            <HomePage />
            <Footer />
        </div>
    )
}

export default App;
