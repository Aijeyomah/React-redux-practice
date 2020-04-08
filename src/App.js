import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Home2 from './pages/Home/Home2'
import About from './pages/About/About'


import Services from './pages/Services/Services'



export const UserContext = React.createContext();
export const IncomeContext = React.createContext();
export const ServicesContext = React.createContext();
export const ProductContext = React.createContext();

function App() {
  return (
    <div className="App">
      

      <UserContext.Provider value={"Ade"}>
        <Header />
      </UserContext.Provider>
       


      <Switch>
        <Route exact path='/' component={Home2} />
        <Route exact path='/about' component={About} />
        <ServicesContext.Provider value={"omah"}>
          <ProductContext.Provider value={'codeGeek'}>
            <Route exact path='/services' component={Services} />
          </ProductContext.Provider>
        </ServicesContext.Provider>

      </Switch>
    </div>
  );
}

export default App;
