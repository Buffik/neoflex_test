export type storeValue = {
  id: number;
  image: string;
  name: string;
  price: number;
  count: number;
};

export type storeType = {
  data: storeValue[];
  setData: React.Dispatch<React.SetStateAction<storeValue[] | []>>;
};
