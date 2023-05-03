export function hideWindow() {
    let modalWindow = document.querySelector('.window-overlay--fixed');
    modalWindow.style.zIndex = '-1';
}
