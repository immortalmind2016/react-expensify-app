import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter , Route ,Switch ,Link ,NavLink  } from "react-router-dom"
import "./styles/style.scss"
import "normalize.css/normalize.css"
import 'react-dates/lib/css/_datepicker.css'

import {Provider} from "react-redux"
import configureStore from "./store/configureStore"
import AppRouter,{history} from "./routers/AppRouter"
import {addExpense,removeExpense,editExpense,startSetExpenses} from "./actions/expenses"
import {setTextFilter,setStartDate,setEndDate} from "./actions/filters"
import {login,logout} from "./actions/auth"
import getVisibleExprenses from "./selectors/expenses"
import 'react-dates/initialize';
import {firebase} from "./firebase/firebase";

const store=configureStore();

store.dispatch(addExpense({description:"water bill",note:"anything",amount:100,createdAt:10}))
let hasRendered=false
const renderApp=()=>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById("app"))
        hasRendered=true;

    }
}
ReactDOM.render(<p>Loading...</p>,document.getElementById("app"))

const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

firebase.auth().onAuthStateChanged((user)=>{
    console.log("USER ",user)
    if(user){
        store.dispatch(login(user.uid))
        console.log("uid",user.uid)
       store.dispatch(startSetExpenses()).then(()=>{
           renderApp()
           if(history.location.pathname==="/"){
               history.push("/dashboard")
           }
       })
 
    }else{
            store.dispatch(logout())

        renderApp();
        history.push("/")
    }
})

