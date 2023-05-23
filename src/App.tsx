import Header from './components/Header/Header';
import Container from './components/Layouts/Container/Container';
import Footer from './components/Footer/Footer';
import MainPage from './pages/Main/MainPage';
import CartPage from './pages/Cart/CartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useEffect, useState } from 'react';
import { DataContextProvider } from './context/DataContext';
import handleSessionStorageData from './utils/handleSessionStorageData';
import { storeValueList } from './types/contextTypes';

function App() {
  const [cartItems, setCartItems] = useState<storeValueList>([]);

  useEffect(() => {
    const sessionData = handleSessionStorageData.init();
    setCartItems(sessionData);
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <DataContextProvider value={{ cartItems, setCartItems }}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </DataContextProvider>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
