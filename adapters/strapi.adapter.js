export const getBlogData = async (apiUrl) => {
    const response = (await fetch(apiUrl)).json();
    return response;
};
