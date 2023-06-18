import React from 'react';
import ReactDOM from 'react-dom/client';
import './_index.scss';
import reportWebVitals from './reportWebVitals';
import Card from "./components/component/card/Card";
import Routing from "./components/pages/Routing";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Card>
            <Routing/>
        </Card>
    </React.StrictMode>
);

reportWebVitals();