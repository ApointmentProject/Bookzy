import Marquee from "react-fast-marquee";
// import the icons from react-icons
import { SiShopify } from "react-icons/si";
import { SiSalesforce } from "react-icons/si";
import { SiPeloton } from "react-icons/si";
import { SiX } from "react-icons/si";
import { SiHp } from "react-icons/si";


export default function LogoCarousel() {
    return (
        <Marquee gradient={false} speed={50}>
            <SiShopify className="mx-8 h-16 w-16" />
            <SiSalesforce className="mx-8 h-16 w-16" />
            <SiPeloton className="mx-8 h-16 w-16" />
            <SiX className="mx-8 h-16 w-16" />
            <SiHp className="mx-8 h-16 w-16" />
        </Marquee>
    )

}
