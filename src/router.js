import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import MainLayout from './routes/layout/MainLayout'
import {
    HomePage,
    Page1,
    Page2,
} from './routes/pages'

function RouterConfig({ history }) {
    // console.log('history', history)
    return (
        <Router history={history}>
            <MainLayout>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/page1" exact component={Page1} />
                    <Route path="/page2" exact component={Page2} />
                </Switch>
            </MainLayout>
        </Router>
    )
}

export default RouterConfig
