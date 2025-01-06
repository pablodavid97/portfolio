import { ReactNode, Dispatch, SetStateAction } from 'react';

export type GlobalContextType = {
    offset: number;
    limit: number;
    setOffset: Dispatch<SetStateAction<number>>;
    setLimit: Dispatch<SetStateAction<number>>;
};

export type GlobalContextProviderProps = {
    children: ReactNode;
};
