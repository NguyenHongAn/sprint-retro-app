import React from 'react'
import AppNavBar from '../../components/AppNavBar';
import Dashboard from './Dashboard';

export default function DashboardPage() {
   

    return (
        <div>
            <AppNavBar isTransparent={false}></AppNavBar>
            <Dashboard></Dashboard>
        </div>
    )
}
