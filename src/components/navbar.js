export default function NavBar() {
    return (
        <div class="border">
            <header class="header">
                <div class="logo">
                    <ion-icon name="logo-instagram" id="logo"></ion-icon>
                    <div class="vertical_divisor"></div>
                    <a href="https://www.instagram.com/">
                        <img src="./assets/" alt="" id="instagram"></img>
                    </a>
                </div>
                <div class="search_bar">
                    <input type="text" id="search" placeholder="Pesquisar" />
                </div>
                <div class="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </header>

            <header class="header_mobile">
                <div class="logo">
                    <ion-icon name="logo-instagram" id="logo"></ion-icon>
                </div>
                <div class="search_bar">
                    <a href="https://www.instagram.com/">
                        <img src="./assets/" alt="" id="instagram"></img>
                    </a>
                </div>
                <div class="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </header>
        </div>
    );
}