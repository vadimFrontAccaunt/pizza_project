import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import MainPage from './components/mainPage/MainPage';
import Header from './components/header/Header';
import MenuPage from './components/menuPage/MenuPage';
import Footer from './components/footer/Footer';
import Contacts from './components/contacts/Contacts';
import Basket from './components/header/basket/Basket';

function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <Header/>
          <Routes>
            <Route path = '/'
            element={<MainPage/>}
            />
            <Route path = '/menu'
            element = {<MenuPage/>}
            />
            <Route path = '/contacts'
            element = {<Contacts/>}/>
            <Route path = '/basket'
            element= {<Basket/>}/>
          </Routes>
          <Footer/>
        </Provider>
      </BrowserRouter>
  );
}

export default App;

