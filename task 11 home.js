
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
