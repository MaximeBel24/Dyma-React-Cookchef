import React, {Suspense} from 'react';
import AdminRecipesForm from "./pages/AdminRecipes/pages/AdminRecipesForm/AdminRecipesForm.jsx";
import {Outlet} from "react-router";
import AdminNav from "./components/AdminNav/AdminNav.jsx";

function Admin() {
    return (
        <div className={"d-flex flex-fill p-20"}>
            <AdminNav />
            <div className={"d-flex flex-column flex-fill"}>
                <Suspense>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
}

export default Admin;