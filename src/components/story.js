export default function Story(props) {
    return (
        <div className="stories_individual">
            <div className="stories_image">
                <img src={"./assets//stories_background 1.png"} alt=""></img>
                <div className="circle_over">
                    <img src={props.image} alt=""></img>
                </div>
            </div>
            <p>{props.name}</p>
        </div>
    )
}