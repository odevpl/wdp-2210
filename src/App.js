import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/common/Login/Login';
import Register from './components/common/Register/Register';
import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import Blog from './components/views/Blog/Blog';

const App = () => (
  <Provider store={store}>
    <MainLayout>
      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/shop/:categoryId'} element={<ProductList />} />
        <Route path={'/product/:productId'} element={<ProductPage />} />
        <Route path={'/blog'} element={<Blog />} />
        <Route path={'/login'} element={<Login />} />
        <Route exact path={'/register'} component={Register} />
      </Routes>
    </MainLayout>
  </Provider>
);

export default App;
