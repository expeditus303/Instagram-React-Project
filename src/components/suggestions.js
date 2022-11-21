export default function Suggestions() {

    const suggestionContent = [
        {
            image: "./assets//sidebar/badvibesmemes 1.png",
            name: "bad.vibes.memes"
        },

        {
            image: "./assets//sidebar/chibirdart 1.png",
            name: "chibirdart"
        },

        {
            image: "./assets//sidebar/razoesparaacreditar 1.png",
            name: "razoesparaacreditar"
        },

        {
            image: "./assets//sidebar/adorableanimals 1.png" ,
            name: "adorable_animals"
        },

        {
            image: "./assets//sidebar/smallcutecats 1.png",
            name: "smallcutecats"
        },

    ]

    return (
        <div>
            <div class="suggestion_for_you">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>

            
                {suggestionContent.map((suggestioncontent) => (
                <div class="suggestion">
                    <div class="suggestion_profile">
                        <img src={suggestioncontent.image} alt="" />
                        <div class="suggestion_profile_name">
                            <p>{suggestioncontent.name}</p>
                            <p>Segue você</p>
                        </div>
                    </div>
                    <p class="follow">Seguir</p>
                </div>
                ))}
                
           
            <div class="others">
                <p>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                    Localizações • Contas mais relevantes • Hashtags • Idioma
                </p>
            </div>
        </div>
    )
}