const getGlobals = async (path) => {
    const response = (await fetch(path)).json();
    return response;
};

export default getGlobals;
