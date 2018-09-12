import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter , Route ,Switch ,Link ,NavLink  } from "react-router-dom"
import "./styles/style.scss"
import "normalize.css/normalize.css"
import 'react-dates/lib/css/_datepicker.css'

import {Provider} from "react-redux"
import configureStore from "./store/configureStore"
import AppRouter from "./routers/AppRouter"
import {addExpense,removeExpense,editExpense} from "./actions/expenses"
import {setTextFilter,setStartDate,setEndDate} from "./actions/filters"
import getVisibleExprenses from "./selectors/expenses"
import 'react-dates/initialize';
import "./firebase/firebase";


const store=configureStore();

store.dispatch(addExpense({description:"water bill",note:"anything",amount:100,createdAt:10}))
store.dispatch(addExpense({description:"gas bill",note:"anything",amount:500,createdAt:500}))



const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx,document.getElementById("app"))
