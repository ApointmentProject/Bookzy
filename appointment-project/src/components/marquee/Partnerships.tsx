import Marquee from "react-fast-marquee"
import { useTheme } from "../../context/ThemeContext"


export default function Partnerships() {
    const { isDarkMode } = useTheme();

    const partners = [
        { name: "Shopify", logo: "shopify.jpeg" },
        { name: "Salesforce", logo: "salesforce.png" },
        { name: "X", logo: "X.png" },
    ];

    return (
        <section
            className={`w-full py-12 transition-colors duration-300 ${isDarkMode ? "bg-main-dark-bg text-white" : "bg-main-light-bg text-gray-800"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center mb-10">
                    <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? "text-secundary-light-bg" : "text-indigo-600"}`}>Nuestros Colaboradores</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Agradecemos profundamente a todas las empresas que confían en nosotros y hacen posible nuestro trabajo. Su
                        apoyo es fundamental para seguir creciendo e innovando.
                    </p>
                </div>

                <Marquee gradient gradientColor={isDarkMode ? "17, 24, 39" : "249, 250, 251"} gradientWidth={50} speed={40} pauseOnHover>
                    {partners.map((partner, index) => (
                        <div key={index} className="mx-8 grayscale hover:grayscale-0 transition-all duration-300">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                width={160}
                                height={80}
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
