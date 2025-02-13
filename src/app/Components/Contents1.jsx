import CustomCarousel from "./CustomCarousel";
import CustomCarousel1 from "./CustomCarousel1";
import CustomCarousel2 from "./CustomCarousel2";
import MarqueeReverse from "./MarqueeReverse";
import MarqueeReverse1 from "./MarqueeReverse1";
import './Contents1.css'

function Contents1() {
    return (
        <div className="div12">
            <div>
                <h1>We <span>Work With</span></h1>
                <p>As a leading software development company, Innovatech 360 uses advanced <br /> technologies and top-notch platforms to build resilient digital products.</p>
            </div>
            <div>
                <CustomCarousel1 />
                <MarqueeReverse1 />
                <CustomCarousel2 />
            </div>

        </div>
    )
}

export default Contents1;