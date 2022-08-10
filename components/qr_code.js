class QR_code extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    static get styles() {
        return `
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

            * {
                --White: hsl(0, 0%, 100%);
                --Grayish-blue: hsl(220, 15%, 55%);
                --Dark-blue: hsl(218, 44%, 22%);
                --md: 15px;
                --sm: 13px;
                font-family: 'Outfit', sans-serif;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .card {
                width: 235px;
                background: var(--White);
                display: flex; 
                flex-flow: column wrap;
                justify-content: space-evenly;
                align-content: center;
                padding: 10px;
                padding-bottom: 30px;
                border-radius: 18px;
                gap: 20px;
                text-align: center;
            }

            .card figure img {
                width: 100%;
                border-radius: 10px;
            }

            .card .title {
                color: var(--Dark-blue);
                font-weight: 700;
                font-size: var(--md);
            }

            .card .sub-title {
                color: var(--Grayish-blue);
                font-size: var(--sm);
            }

            @media (min-width: 600px) {
                div {
                    background: blue;
                }
            }
            
            @media (min-width: 800px) {
                div {
                    background: red;
                }
            }
        `
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =
        `
        <style>${QR_code.styles}</style>
        <div class="card">
            <figure>
                <img src="images/image-qr-code.png" alt="QR code image">
            </figure>

            <p class="title">Improve your front-end skills by building projects</p>

            <p class="sub-title">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
        `;
    }
}

customElements.define("app-qr-code", QR_code);
