export const fetchProjects = async (limit: number = 9, offset: number = 0) => {
    try {
        const response = await fetch(
            `${
                import.meta.env.VITE_BACKEND_URL
            }/projects?limit=${limit}&offset=${offset}`
        );

        if (!response.ok) {
            throw new Error('Error fetching projects');
        }

        const data = await response.json();

        return data;
    } catch (error: any) {
        throw new Error(`There was a problem fetching data: ${error.message}`);
    }
};
