import {
  headPhonesTypes,
  headPhones,
  wireLessHeadPhones,
} from 'assets/data/headPhonesData';
import Main from 'components/Layouts/Main/Main';
import ProductGroup from 'modules/ProductGroup/ProductGroup';

function MainPage() {
  return (
    <Main>
      <ProductGroup title={headPhonesTypes.HeadPhones} data={headPhones} />
      <ProductGroup
        title={headPhonesTypes.wireLessHeadPhones}
        data={wireLessHeadPhones}
      />
    </Main>
  );
}

export default MainPage;
