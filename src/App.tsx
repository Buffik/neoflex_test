import Header from './components/Header/Header';
import MainWrapper from './components/Layouts/MainLayout/MainWrapper';
import Footer from './components/Footer/Footer';
import MainPage from './pages/Main/MainPage';
import CartPage from './pages/Cart/CartPage';

function App() {
  return (
    <MainWrapper>
      <Header />
      <CartPage />
      <Footer />
    </MainWrapper>
  );
}

export default App;
