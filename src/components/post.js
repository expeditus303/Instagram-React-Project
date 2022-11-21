export default function Post() {

    const postContent = [
        {
            profileImage: "./assets//stories/meowed 1.png", profileName: "meowed", postImage: "./assets//gato-telefone 1.png", likedByImage: "./assets//stories/respondeai 1.png", likedBy: "respondeai", likeCounter: "101.523", commentCounter: "453", commentName: "Jupira", commentText: "Gato metido kkk :D", postDate: "26 SETEMBRO"
        },

        {
            profileImage: "./assets//stories/barked 1.png", profileName: "barked", postImage: "./assets//surf.png", likedByImage: "./assets//stories/adorableanimals 2.png", likedBy: "adorable_animals", likeCounter: "99.159", commentCounter: "753", commentName: "GabrielMedina", commentText: "Animal!!!", postDate: "25 SETEMBRO"
        }
    ]

    return (
        <div>
            {postContent.map((p) => (
                <div class="post" data-test="post">
                    <PostHeader profileImage={p.profileImage} profileName={p.profileName} />

                    <Photo PropsPostImage={p.postImage} />

                    <div class="photo_under">
                        <div class="photo_icons">
                            <ion-icon name="heart-outline" data-test="like-post"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="photo_bookmark">
                            <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
                        </div>
                    </div>

                    <Likes PropsLikedByImage = {p.likedByImage} PropsLikedBy = {p.likedBy} PropsLikeCounter = {p.likeCounter} />

                    <div class="comment_section">
                        <p class="comment_counter">Ver todos os {p.commentCounter} comentários</p>
                        <div class="comment_and_like">
                            <div class="comment">
                                <p class="comment_name">{p.commentName}</p>
                                <p class="comment_text">{p.commentText}</p>
                            </div>
                            <div class="comment_like">
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                        </div>
                        <p class="date">{p.postDate}</p>
                        <div class="comment_write">
                            <input
                                type="text"
                                name="comentario"
                                id="comment_write"
                                placeholder="Adicione um comentário"
                            />
                            <input type="button" value="Postar" id="comment_post" />
                        </div>
                    </div>
                    <div class="space2"></div>
                </div>


            ))}
        </div>
    );
}

function PostHeader(props) {

    return (
        <div class="post_header">
            <div class="post_header_perfil">
                <a href={"https://www.instagram.com/"}>
                    <img
                        src={props.profileImage}
                        alt="profile_image"
                        class="profile_image_post"
                    />
                    <p class="profile_name">{props.profileName}</p>
                </a>
            </div>
            <div class="post_header_3pontos">
                <a href="https://www.instagram.com/">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </a>
            </div>
        </div>
    )
}

function Photo(props) {
    return (
        <div class="photo">
            <img
                src={props.PropsPostImage}
                alt="post_photo"
                data-test="post-image"
            />
        </div>
    )
}

function Likes(props) {
    return (
        <div class="likes">
            <img
                src={props.PropsLikedByImage}
                alt=""
                class="likes_photo"
            />
            <p data-test="likes-number">
                Curtido por <b id="bold">{props.PropsLikedBy}</b> e
                <b id="bold">outras {props.PropsLikeCounter} pessoas</b>
            </p>
        </div>
    )
}