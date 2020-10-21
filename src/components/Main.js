import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewPage from './Main/NewPage';
import TopPage from './Main/TopPage';


export default class Main extends React.Component {
    render(){
        return (
            <Switch>
                <Route path={'/'} exact component={NewPage}/>
                <Route path={'/top'} component={TopPage}/>
            </Switch>
        )
    }
}