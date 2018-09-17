import React from "react"
import {Router,BrowserRouter , Route ,Switch ,Link ,NavLink  } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import NotFoundPage from "../components/NotFoundPage"

import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import HelpExpensePage from "../components/HelpExpensePage"
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import LoginPage from "../components/LoginPage"
import PrivateRoute from "./PrivateRoute";

export const history=createHistory(); 
// we use this module instead of BrowserHistory component
// to can export browserhistory
const AppRouter=()=>(
     <Router history={history}>
        <div>

        <Switch> {/* show every Route if match or not if no go down to remain Route */ }
           <Route path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage}/>
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <PrivateRoute path="/help" component={HelpExpensePage} />
            <Route path="/" component={NotFoundPage} />

            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </Router>
)
export default AppRouter
