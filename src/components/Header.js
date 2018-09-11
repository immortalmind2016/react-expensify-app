import React from "react"
import {NavLink} from "react-router-dom"

const  Header=()=>(
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink exact={true} to="/" activeClassName="is-active"> dashboard </NavLink>
            <NavLink to="/create" activeClassName="is-active"> Create </NavLink>
            <NavLink to="/edit/55" activeClassName="is-active"> edit </NavLink>
            <NavLink to="/help" activeClassName="is-active"> help </NavLink>
        </div>
    </header>
)


export default Header