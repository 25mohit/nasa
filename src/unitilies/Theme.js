export const Theme = () => {
    const currentTheme  = localStorage.getItem('theme')
    if((currentTheme !== 'dark' && currentTheme !== 'light') || currentTheme == undefined || currentTheme == null || currentTheme == '' || currentTheme == Boolean || currentTheme == Number){
        return 'dark'
    } else {
        return currentTheme
    }
}