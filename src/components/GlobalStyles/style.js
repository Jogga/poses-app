import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        height: 100%;
        background-color: #000;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        font-size: 16px;
    }
    #root {
        height: 100%;
    }
`
export default GlobalStyles