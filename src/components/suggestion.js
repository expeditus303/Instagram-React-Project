export default function Suggestion(props) {
    return (
        <div className="suggestion" key={props.name}>
            <div className="suggestion_profile">
                <img src={props.image} alt="" />
                <div className="suggestion_profile_name">
                    <p>{props.name}</p>
                    <p>Segue você</p>
                </div>
            </div>
            <p className="follow">Seguir</p>
        </div>
    )
}