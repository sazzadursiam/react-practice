const apiRequest = async (url = "", optionObj = null, errorMessage = null) => {
    try {
        const response = await fetch(url, optionObj);
        if (!response.ok) throw Error('Please reload the app');
    } catch (error) {
        //  errorMessage = error.message;
    } finally {
        return errorMessage;
    }
}

export default apiRequest;