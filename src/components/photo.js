import React from "react";

export default function Photo(props) {
    const whiteheart = <ion-icon name="heart-outline" data-test="like-post" className="whiteHeart" onClick={redHeart}></ion-icon>

    const [heart, setHeart] = React.useState(whiteheart)

    const whitebookmark = <ion-icon name="bookmark-outline" className="whitebookmark" data-test="save-post" onClick={yellowBookmark}></ion-icon>

    const [bookmark, setBookmark] = React.useState(whitebookmark)

    function redHeart() {
        let corazon = <ion-icon name="heart" className="redHeart" onClick={whiteHeart}></ion-icon>
        likePlusNumber()
        setHeart(corazon)
    }

    function whiteHeart() {
        let corazon = whiteheart
        likeMinusNumber()
        setHeart(corazon)
    }

    function yellowBookmark() {
        let saved = <ion-icon name="bookmark" className="yellowBookmark" onClick={whiteBookmark}></ion-icon>
        setBookmark(saved)
    }

    function whiteBookmark() {
        let saved = whitebookmark
        setBookmark(saved)
    }

    const [likes, setLikes] = React.useState(props.PropsLikeCounter)

    let newLike = likes
    function likePlusNumber() {
        newLike++
        setLikes(newLike)
    }

    function likeMinusNumber() {
        newLike--
        setLikes(newLike)
    }

    const [heartOnPhoto, setHeartOnPhoto] = React.useState("")

    function OnPhoto(){
        setHeartOnPhoto(<ion-icon name="heart" className="heartOnPhoto"></ion-icon>)
    }

    return (
        <div>
            <div className="photo" onDoubleClick={() => {redHeart(); OnPhoto()}}>
                {heartOnPhoto}
                <img
                    src={props.PropsPostImage}
                    alt="post_photo"
                    data-test="post-image"
                />
            </div>

            <div className="photo_under">
                <div className="photo_icons">
                    {heart}
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div className="photo_bookmark">
                    {bookmark}
                </div>
            </div>

            <div className="likes">
                <img
                    src={props.PropsLikedByImage}
                    alt=""
                    className="likes_photo"
                />
                <p>
                    Curtido por <b id="bold">{props.PropsLikedBy}</b> e
                    <b id="bold" data-test="likes-number"> outras {likes} pessoas</b>
                </p>
            </div>
        </div>
    )
}
