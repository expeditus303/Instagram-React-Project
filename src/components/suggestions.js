import Suggestion from "./suggestion"

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
            <div className="suggestion_for_you">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div> 

            
                {suggestionContent.map(suggestioncontent => 
                
                <Suggestion name = {suggestioncontent.name} image = {suggestioncontent.image} key = {suggestioncontent.name }/>)}
                
           
            <div className="others">
                <p>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                    Localizações • Contas mais relevantes • Hashtags • Idioma
                </p>
            </div>
        </div>
    )
}