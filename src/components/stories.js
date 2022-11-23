import Story from "./story";

export default function Stories() {

    const storiesContent = [
        { image: "./assets//stories/9gag 1.png", name: "9gag" },

        { image: "./assets//stories/meowed 1.png", name: "meowed" },

        { image: "./assets//stories/barked 1.png", name: "barked" },

        { image: "./assets//stories/nathanwpylestrangeplanet 1.png", name: "nathanwpyle..." },

        { image: "./assets//stories/wawawiwacomicsa 1.png", name: "wawawiwac..." },

        { image: "./assets//stories/respondeai 1.png", name: "espondeai" },

        { image: "./assets//stories/filomoderna 1.png", name: "filomoderna" },

        { image: "./assets//stories/memeriagourmet 1.png", name: "memeriago..." },
    ]


    return (
        <div className="stories">
            {storiesContent.map((s) => <Story image = {s.image} name = {s.name} key = {s.name} />  )}
        
            <div className="button">
                <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
            </div>
            <div id="last"></div>
        </div>
    );
}