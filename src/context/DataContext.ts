import { createContext } from 'react';
import { storeType } from '../types/contextTypes';

export const DataContext = createContext<storeType | null>(null);

export const DataContextProvider = DataContext.Provider;
