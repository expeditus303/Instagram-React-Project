import Stories from "./stories"
import Post from "./post"
import Sidebar from "./sidebar"

export default function Body() {
    return (
        <div class="content">
            <div class="space"></div>
            <div class="feed">
                <Stories />
                <div class="space1"></div>
                <Post />
            </div>
            <Sidebar />
        </div>
    );
}