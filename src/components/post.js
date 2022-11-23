import React, { useState } from "react";
export default function Post(props) {

    
    const [saved, setSaved] = useState(false)
    const [heart, setHeart] = React.useState(props.isLiked)
    const [counter, setCounter] = useState(props.likeCounter)
    const [animation, setAnimation] = useState(false)

    function clickLike() {

        if (heart === false) {
            setCounter(counter + 1)
        } else {
            setCounter(counter - 1)
        }

        setHeart(!heart)
    }


    function likeOnImage() {
        setAnimation(true)
        if (heart === false) {
            setCounter(counter + 1)
            setHeart(true)
        }
        setTimeout(() => {
           setAnimation(false) 
        }, 500);
    }



    const [heartOnPhoto, setHeartOnPhoto] = React.useState("")

    function OnPhoto() {
        setHeartOnPhoto(<ion-icon name="heart" class="heartOnPhoto"></ion-icon>)
    }

    return (
        <div className="post" data-test="post" key={props.profileName}>
            <div className="post_header">
                <div className="post_header_perfil">
                    <a href={"https://www.instagram.com/"}>
                        <img
                            src={props.profileImage}
                            alt="profile_image"
                            className="profile_image_post"
                        />
                        <p className="profile_name">{props.profileName}</p>
                    </a>
                </div>
                <div className="post_header_3pontos">
                    <a href="https://www.instagram.com/">
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </a>
                </div>
            </div>

            <div>
                <div className="photo" 
                onDoubleClick={likeOnImage}
                >
                    <ion-icon name="heart" class={`heartOnPhoto ${animation ? "scale-up-center " : "hidden"}`}></ion-icon>
                    <img
                        src={props.postImage}
                        alt="post_photo"
                        data-test="post-image"
                    />
                </div>

                <div className="photo_under">
                    <div className="photo_icons">
                        <ion-icon
                            name={heart ? "heart": "heart-outline"}
                            data-test="like-post"
                            class={heart ? "redHeart" : "whiteHeart"}
                            onClick={clickLike}>
                        </ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div className="photo_bookmark">
                        <ion-icon
                            onClick={() => setSaved(!saved)}
                            name={saved ? 'bookmark' : 'bookmark-outline'} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="likes">
                    <img
                        src={props.likedByImage}
                        alt=""
                        className="likes_photo"
                    />
                    <p>
                        Curtido por <b id="bold">{props.likedBy}</b> e
                        <b id="bold" data-test="likes-number"> outras {counter} pessoas</b>
                    </p>
                </div>
            </div>


            <div className="comment_section">
                <p className="comment_counter">Ver todos os {props.commentCounter} comentários</p>
                <div className="comment_and_like">
                    <div className="comment">
                        <p className="comment_name">{props.commentName}</p>
                        <p className="comment_text">{props.commentText}</p>
                    </div>
                    <div className="comment_like">
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                </div>
                <p className="date">{props.postDate}</p>
                <div className="comment_write">
                    <input
                        type="text"
                        name="comentario"
                        id="comment_write"
                        placeholder="Adicione um comentário"
                    />
                    <input type="button" value="Postar" id="comment_post" />
                </div>
            </div>
            <div className="space2"></div>
        </div>




    )
}