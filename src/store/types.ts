import { ReactNode } from 'react';

export type GlobalContextType = {
    offset: number;
    limit: number;
    setOffset: (value: number) => void;
    setLimit: (value: number) => void;
};

export type GlobalContextProviderProps = {
    children: ReactNode;
};
