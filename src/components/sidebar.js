import User from "./user"
import Suggestions from "./suggestions"

export default function Sidebar() {
    return (
        <div className="side_bar">
            <User />

            <Suggestions />

            <div className="others">
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
}