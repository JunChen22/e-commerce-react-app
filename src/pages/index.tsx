import React from 'react';
import ProductList from '../components/ProductList'
import LoginForm from '../components/LoginForm'

const Home: React.FC = () => {
  return (
    <div>
      <h1>My Next.js E-commerce App</h1>
      <ProductList />
      <LoginForm />
    </div>
  );
};

export default Home;