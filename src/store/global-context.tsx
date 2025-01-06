import { createContext, useState } from 'react';
import { GlobalContextType, GlobalContextProviderProps } from './types';

const defaultValue: GlobalContextType = {
    offset: 0,
    limit: 9,
    setOffset: () => {},
    setLimit: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(defaultValue);

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const [offset, setOffset] = useState<number>(defaultValue.offset);
    const [limit, setLimit] = useState<number>(defaultValue.limit);

    const ctxValue: GlobalContextType = {
        offset,
        limit,
        setOffset,
        setLimit,
    };

    return (
        <GlobalContext.Provider value={ctxValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
