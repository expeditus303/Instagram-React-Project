import React from "react";
import Post from "./post";

export default function Posts() {


    const postContent = [
        {
            profileImage: "./assets//stories/meowed 1.png",
            profileName: "meowed",
            postImage: "./assets//gato-telefone 1.png",
            likedByImage: "./assets//stories/respondeai 1.png",
            likedBy: "respondeai",
            likeCounter: 101523,
            commentCounter: "453",
            commentName: "Jupira",
            commentText: "Gato metido kkk :D",
            postDate: "26 SETEMBRO",
            isLiked: true
        },

        {
            profileImage: "./assets//stories/barked 1.png",
            profileName: "barked",
            postImage: "./assets//surf.png",
            likedByImage: "./assets//stories/adorableanimals 2.png",
            likedBy: "adorable_animals",
            likeCounter: 99159,
            commentCounter: "753",
            commentName: "GabrielMedina",
            commentText: "Animal!!!",
            postDate: "25 SETEMBRO",
            isLiked: false
        }
    ]

    return (
        <div>
            {postContent.map((p) => (
                <Post
                    key = {p.profileName}
                    profileImage={p.profileImage}
                    profileName={p.profileName}
                    postImage={p.postImage}
                    likedByImage={p.likedByImage}
                    likedBy={p.likedBy}
                    likeCounter={p.likeCounter}
                    commentCounter={p.commentCounter}
                    commentName={p.commentName}
                    commentText={p.commentText}
                    postDate={p.postDate}
                    isLiked={p.isLiked}
                />
            ))}
        </div>
    );
}
