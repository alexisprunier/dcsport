
export function getURL() {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "")
        return "http://127.0.0.1:5005/";
    else
        return window.location.hostname;
}