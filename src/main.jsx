import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss';
import {ROUTER} from "./router.jsx";
import {RouterProvider} from "react-router";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <RouterProvider router={ROUTER} />
    </StrictMode>
);