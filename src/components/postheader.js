export default function PostHeader(props) {

    return (
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
    )
}