import { createContext } from 'react';
import { storeType } from '../types/contextTypes';

const DataContext = createContext<storeType | null>(null);

export default DataContext;
