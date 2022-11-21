import User from "./user"
import Suggestions from "./suggestions"

export default function Sidebar() {
    return (
        <div class="side_bar">
            <User />

            <Suggestions />

            <div class="others">
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
}