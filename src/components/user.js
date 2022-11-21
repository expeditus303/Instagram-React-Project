import React from 'react'


const imageDefault = "./assets//sidebar/catanacomics 1.png"


export default function User() {
    return (
        <div class="upper_suggestion">
            <UserName imageProfile = {imageDefault} userName = "Robert" />
        </div>
    );
}

function UserName(props) {
    
    const [name, setName] = React.useState("robertinho123")
    const [image, setImage] = React.useState("./assets//sidebar/catanacomics 1.png")

    function askName() {
        let answer = prompt('Digite o seu nome:')
        if ( !answer || answer.length > 20 ) {
            answer = name
        }
        
        setName(answer)
    }


    function askImage() {
        let answer = prompt('Insira o link de uma imagem')
        if (!answer) {
            answer = image
        }
        setImage(answer)
    }
    
    return (
        <div class="upper_suggestion_profile" data-test="user">
                <img
                    class = "imageProfile"
                    src= {image}
                    alt=""
                    data-test="profile-image"
                    onClick = {askImage}
                />
                <div class="upper_suggestion_profile_name">
                    <p id="user_upper">{props.userName}</p>
                    <div class="container-pencil" >
                        <p data-test="name">{name}</p>
                        <ion-icon name="pencil" data-test="edit-name" class = "clickName" onClick={askName} ></ion-icon>
                    </div>
                </div>
            </div>
    )
}