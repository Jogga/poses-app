import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        height: 100%;
        background-color: black;
        color: white;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        font-size: 16px;
    }
    #root {
        height: 100%;
    }

    input {
        background-color: transparent;
        padding: 8px 12px;
        border: 1px solid silver;
        border-radius: 6px;
        font-size: 1em;
        color: white;
        &:hover {
            border-color: white;
        }
    }
    fieldset {
        display: block;
        border: none;
        padding: 0;
        margin: 0;
    }
    button {
        font-size: 1em;
        padding: 8px 12px;
        border: none;
        border-radius: 6px;
    }
    button.secondary {
        background: transparent;
        color: white;
        &: hover {
            background: #333;
        }
    }
`
export default GlobalStyles