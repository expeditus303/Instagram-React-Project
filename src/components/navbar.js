export default function NavBar() {
    return (
        <div className="border">
            <header className="header">
                <div className="logo">
                    <ion-icon name="logo-instagram" id="logo"></ion-icon>
                    <div className="vertical_divisor"></div>
                    <a href="https://www.instagram.com/">
                        <img src="./assets/" alt="" id="instagram"></img>
                    </a>
                </div>
                <div className="search_bar">
                    <input type="text" id="search" placeholder="Pesquisar" />
                </div>
                <div className="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </header>

            <header className="header_mobile">
                <div className="logo">
                    <ion-icon name="logo-instagram" id="logo"></ion-icon>
                </div>
                <div className="search_bar">
                    <a href="https://www.instagram.com/">
                        <img src="./assets/" alt="" id="instagram"></img>
                    </a>
                </div>
                <div className="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </header>
        </div>
    );
}