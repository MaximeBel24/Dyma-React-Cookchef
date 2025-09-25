import React from 'react';
import styles from './App.module.scss';
import Header from "./components/Header/Header.jsx";
import Content from "./pages/HomePage/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default App;
