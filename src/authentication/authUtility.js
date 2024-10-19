// to set token to local storage
export const saveTokenToLocalStorage = (data,next) => {
    localStorage.setItem("data", JSON.stringify(data));
    next();
}

// to remove token
export const removeToken = (next) => {
    localStorage.removeItem("data");
    next();
}

// to check is user is loged in or not
export const isUserLoggedIn = () => {
    let data = localStorage.getItem("data");
    if (data == null) {
        return false;
    } else {
        return true;
    }
}

// to get current user
export const getCurrentUser = () => {
    if (isUserLoggedIn()) {
        return  JSON.parse(localStorage.getItem("data"));
    }else{
        return "undefined";
    }
}