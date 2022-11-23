import Stories from "./stories"
import Posts from "./posts"
import Sidebar from "./sidebar"

export default function Body() {
    return (
        <div className="content">
            <div className="space"></div>
            <div className="feed">
                <Stories />
                <div className="space1"></div>
                <Posts />
            </div>
            <Sidebar />
        </div>
    );
}