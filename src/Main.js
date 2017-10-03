import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Biography from './Biography';
import CV from './CV';
import Contact from './Contact'
import Publications from './Publications';

const Main = () => (
  <div>
    <Switch>
      <Route exact path ='/' component={Biography}/>
      <Route exact path ='/Publications' component={Publications}/>
      <Route exact path ='/CV' component={CV}/>
      <Route exact path ='/Contact' component={Contact}/>
    </Switch>
  </div>
)

export default Main;
