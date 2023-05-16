import Header from './components/Header/Header';
import MainWrapper from './components/Layouts/MainLayout/MainWrapper';
import Footer from './components/Footer/Footer';
import MainPage from './pages/Main/MainPage';
import CartPage from './pages/Cart/CartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import handleSessionStorageStore from './utils/handleSessionStorageStore';
import { useState } from 'react';
import DataContext from './context/dataContext';

function App() {
  const [data, setData] = useState(handleSessionStorageStore());

  return (
    <BrowserRouter>
      <MainWrapper>
        <DataContext.Provider value={{ data, setData }}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </DataContext.Provider>
        <Footer />
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
