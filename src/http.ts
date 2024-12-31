export const fetchProjects = async () => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/projects`
        );

        if (!response.ok) {
            throw new Error('Error fetching projects');
        }

        const data = await response.json();

        return data.projects;
    } catch (error) {
        throw new Error(`There was a poblem fetching data: ${error.message}`);
    }
};
