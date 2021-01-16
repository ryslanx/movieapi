import React, {useEffect} from 'react';
import './services'
import {movieService} from "./services";
import './App.css'
import {BaseLayout} from "./layouts/";
import {Home} from "./pages";

const App = (props) => {
    return (
        <BaseLayout>
            <Home />
        </BaseLayout>
    );
}

export default App;