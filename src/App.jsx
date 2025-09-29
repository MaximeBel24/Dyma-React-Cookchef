import React, { Suspense } from 'react';
import styles from './App.module.scss';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {seedRecipes} from "./data/seed.js";
import {Outlet} from "react-router";

seedRecipes();

function App() {

    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header />
            <div className={"flex-fill d-flex flex-column"}>
                <Suspense>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </div>
    )
}

export default App;
