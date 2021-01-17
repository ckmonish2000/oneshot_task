import React from 'react'
import Main from "./components/Main"
import GetCollege from "./components/getCollege/getcollege"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateCollege from "./components/createCollege/createCollege"
export default function App() {
  return (
   <main>
     <Switch>
     <Route path='/' component={Main} exact/>
    <Route path="/createcollege" component={CreateCollege} exact/>
    <Route path="/searchCollege" component={GetCollege}/>
     </Switch>
   </main>
  )
}
