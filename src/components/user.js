let name

// while (!name || name.length > 20) {
//     name = prompt('Qual é o seu nome')
// } 

// alert(`Olá ${name}`)

const imageDefault = "./assets//sidebar/catanacomics 1.png"
// const imageNew = prompt('Insira o link de uma imagem')

export default function User() {
    return (
        <div class="upper_suggestion">
            <UserName imageProfile = {imageDefault} userName = "Robert" editName = {name} />
            {/* <UserName imageProfile = {{!imageNew ? imageDefault : imageNew}} /> */}
        </div>
    );
}

function UserName(props) {
    return (
        <div class="upper_suggestion_profile" data-test="user">
                <img
                    class = "imageProfile"
                    // src= {!imageNew ? imageDefault : imageNew}
                    alt=""
                    data-test="profile-image"
                />
                <div class="upper_suggestion_profile_name">
                    <p id="user_upper">{props.userName}</p>
                    <div class="container-pencil">
                        <p data-test="name">{props.name}</p>
                        <ion-icon name="pencil" data-test="edit-name"></ion-icon>
                    </div>
                </div>
            </div>
    )
}