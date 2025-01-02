import { useState, useEffect } from 'react';

const useFetch = (
    fetchFn,
    defaultData = null,
    options = { args: { limit: 0, offset: 0 }, dependencies: [] }
) => {
    const { args, dependencies } = options;
    const { limit, offset } = args;
    const [data, setData] = useState(defaultData);
    const [error, setError] = useState({ title: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await fetchFn(limit, offset);
                setData((prevData) => {
                    const isInitialFetch = args.offset === 0;
                    const newProjects = isInitialFetch
                        ? result.projects
                        : [...prevData?.projects, ...result.projects];

                    return {
                        ...result,
                        projects: newProjects ?? [],
                    };
                });

                if (
                    result.projects.length === 0 ||
                    result.projects.length < limit
                ) {
                    setHasMore(false);
                }
            } catch (error) {
                setError({
                    title: 'Something went wrong',
                    message: error.message || 'Error fetching data',
                });
            }
            setIsLoading(false);
        };
        fetchData();
    }, dependencies);

    return {
        data,
        error,
        isLoading,
        hasMore,
    };
};

export default useFetch;
