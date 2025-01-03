import { useState, useEffect, useMemo } from 'react';
import type {
    FetchResult,
    FetchFunction,
    DefaultFetchData,
    FetchOptions,
    Error,
} from '../types';

const useFetch = (
    fetchFn: FetchFunction,
    defaultData: DefaultFetchData,
    options: FetchOptions
) => {
    const { limit, offset } = options;
    const [data, setData] = useState<FetchResult>(defaultData);
    const [error, setError] = useState<Error>({ title: '', message: '' });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const memoizedFetchFn = useMemo(() => fetchFn, [fetchFn]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setError({ title: '', message: '' });
        }, 3000);

        return () => clearTimeout(timer);
    }, [error]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await memoizedFetchFn(limit, offset);
                setData((prevData) => {
                    const isInitialFetch = offset === 0;
                    const newProjects = isInitialFetch
                        ? result?.projects
                        : [
                              ...(prevData?.projects || []),
                              ...(result?.projects || []),
                          ];

                    return {
                        ...result,
                        projects: newProjects ?? [],
                    };
                });
            } catch (error: any) {
                setError({
                    title: 'Something went wrong',
                    message: error.message || 'Error fetching data',
                });
            }
            setIsLoading(false);
        };
        fetchData();
    }, [memoizedFetchFn, limit, offset]);

    return {
        data,
        error,
        isLoading,
    };
};

export default useFetch;
