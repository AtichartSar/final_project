import React from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import ConfigRoutes from '../../config/routes'
import { useSelector, useDispatch } from 'react-redux';
import {
setUser,getUser
} from '../../features/user/userSlice'


function PrivateRoutes() {
    const user = useSelector(getUser)
    console.log("checkuser",user);
    const role = user || 'guest'
    const allowedRoutes = ConfigRoutes[role].allowedRoutes
    const redirectRoute = ConfigRoutes[role].redirectRoutes
    console.log(ConfigRoutes);
    console.log(allowedRoutes);
    console.log(redirectRoute);
    console.log(role);
    return (
        <Switch>
             {allowedRoutes.map(route =>
                <Route
                    exact
                    key={route.url}
                    path={route.url}
                >
                    <route.component />
                </Route>
            )}
            <Redirect to={redirectRoute}/>
        </Switch>
    )
}

export default PrivateRoutes
