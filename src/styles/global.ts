 import { createGlobalStyle  } from "styled-components";

 export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --green: #33CC95;
        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --shape: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: box-border;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;  //16px*0,9375 = 15 ou seja vai equivale a 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //16*0,875 = 14
        }
    }
    body {
        background : var(--background);
        --webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400; // tamanho padrao do Poppins e 400 e do html geralmente é 500 por isso voltar pro 400
    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    // estilizando o modal com as classes novas 
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative; //para o x do modal fica de forma absoluta
        border-radius:0.25rem;
    }

 `