import comics from "../src/comics.js"
import Cards from "./MainContentCard.jsx"
import MainContentLabel from "./MainContentLabel.jsx"
import CtaPrimaryBtn from "./CtaPrimaryBtn.jsx"


const printComics = () => {
    return (
        comics.map((curComic, index) => {
            return <Cards title={curComic.title} img={curComic.thumb} key={index} />
        })
    )
}

const AppMain = () => {

    return (
        <div className="mainContent">
            <MainContentLabel text="CURRENT SERIES" />
            <div className="container">
                <div className="cardRow">

                    {printComics()}

                </div>
                <CtaPrimaryBtn text="LOAD MORE" classWrapper="ctaBtnWrapper" classButton="ctaMainContent" />

            </div>
        </div>
    )
}
export default AppMain