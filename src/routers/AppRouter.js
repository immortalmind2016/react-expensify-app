import React from "react"
import {BrowserRouter , Route ,Switch ,Link ,NavLink  } from "react-router-dom"

import NotFoundPage from "../components/NotFoundPage"
import Header from "../components/Header"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import HelpExpensePage from "../components/HelpExpensePage"
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"


const AppRouter=()=>(
     <BrowserRouter>
        <div>
          <Header />
        <Switch> {/* show every Route if match or not if no go down to remain Route */ }
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpExpensePage} />
            <Route path="/" component={NotFoundPage} />

            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
)
export default AppRouter
