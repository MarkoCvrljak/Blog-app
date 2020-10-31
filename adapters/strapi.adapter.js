export const getData = async (apiUrl) => {
    const response = (await fetch(apiUrl)).json();
    return response;
};
