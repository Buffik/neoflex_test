import React from 'react';
import { headPhones, headPhonesTypes } from './assets/data/headPhonesData';
import ProductItem from './components/ProductItem/ProductMainPage/ProductItem';
import Header from './components/Header/Header';
import MainLayout from './components/Layouts/MainLayout';
import TextItem from './UI/TextItem/TextItem';

function App() {
  return (
    <MainLayout>
      <Header />
      <TextItem className="headPhonesTitle">
        {headPhonesTypes.HeadPhones}
      </TextItem>
      {headPhones.map((item) => {
        return (
          <ProductItem
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            prevPrice={item.prevPrice}
            rating={item.rating}
          />
        );
      })}
    </MainLayout>
  );
}

export default App;
