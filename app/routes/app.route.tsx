import { AuthNavigator } from '@app/modules/auth/auth.route'
import { DashBoardNavigator } from '@app/modules/dashboard/dashboard.routes'
import { useAppSelector } from '@app/store'
import React, { } from 'react'

const AppRoute = () =>{
    const loginStatus = useAppSelector(state=>state.loginStatus)
    return loginStatus ? <DashBoardNavigator/>:<AuthNavigator/>
}
export{
    AppRoute
}