import {
  headPhones,
  wireLessHeadPhones,
  headPhonesTypes,
} from './assets/data/headPhonesData';
import Header from './components/Header/Header';
import MainWrapper from './components/Layouts/MainLayout/MainWrapper';
import Footer from './components/Footer/Footer';
import ProductGroup from './modules/ProductGroup/ProductGroup';
import Main from './components/Layouts/Main/Main';

function App() {
  return (
    <MainWrapper>
      <Header />
      <Main>
        <ProductGroup title={headPhonesTypes.HeadPhones} data={headPhones} />
        <ProductGroup
          title={headPhonesTypes.wireLessHeadPhones}
          data={wireLessHeadPhones}
        />
      </Main>
      <Footer />
    </MainWrapper>
  );
}

export default App;
