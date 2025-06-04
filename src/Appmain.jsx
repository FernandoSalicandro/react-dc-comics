import comics from "./comics.js"
import AppCard from "./AppCard.jsx";

const printComics = () => {
    return (
        comics.map((curComic, index) =>
            <div key={index} className="card">
                <AppCard title={curComic.title} thumb={curComic.thumb} />
            </div>
        )
    );
}

function mainApp() {
    return (
        <>
            <div className="mainRow py1 flex align-center justify-center ">
                <div className="container flex align-center justify-around  wrap">
                    {printComics()}
                </div>
            </div>
            <div className="callToAction flex">
                <div className="container flex align-center">
                    <ul className="flex g1 ctaUl">
                        <li className="flex g1"><a href=""><img src="/buy-comics-digital-comics.png" alt="" /></a> <h3>DIGITAL COMICS</h3></li>

                        <li className="flex g1"><a href=""><img src="buy-comics-merchandise.png" alt="" /></a> <h3>DC MECHANDISE</h3></li>

                        <li className="flex g1"><a href=""><img src="/buy-comics-subscriptions.png" alt="" /></a> <h3>SUBSCRIPTION</h3></li>

                        <li className="flex g1"><a href=""><img src="/buy-comics-shop-locator.png" alt="" /></a> <h3>COMIC SHOP LOCATOR</h3></li>

                        <li className="flex g1"><a href=""><img src="/buy-dc-power-visa.png" alt="" /></a> <h3>DC POWER VISA</h3></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default mainApp
