import react, {useState} from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMIddleware from "redux-saga";

import Ecommerce from "./container/Ecommerce";
import Reducer from "./Reducer";
import Saga from ".Saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer),
 applyMiddleware(sagaMiddleware));

sagaMiddleware.run(Saga);

Const App = () => {
    return(
        <Provider store={store}>
            <Ecommerce />
        </Provider>
    );
};

export default app;