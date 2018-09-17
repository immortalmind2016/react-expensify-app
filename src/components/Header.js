import React from "react"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {startLogout} from "../actions/auth"
export const  Header=({startLogout})=>(
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink exact={true} to="/dashboard" activeClassName="is-active"> dashboard </NavLink>
            <NavLink to="/create" activeClassName="is-active"> Create </NavLink>
            <NavLink to="/edit/55" activeClassName="is-active"> edit </NavLink>
            <NavLink to="/help" activeClassName="is-active"> help </NavLink>
            <button onClick={startLogout}>Logout</button>
        </div>
    </header>
)

const mapDispatchToProps=(dispatch)=>({
    startLogout:()=>dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header)