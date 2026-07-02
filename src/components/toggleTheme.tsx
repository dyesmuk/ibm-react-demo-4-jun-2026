const toggleTheme = () => {

    const html = document.documentElement;

    if (html.dataset.theme === "light") {
        html.dataset.theme = "dark";
    } else {
        html.dataset.theme = "light";
    }
};
export default toggleTheme;