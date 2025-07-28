import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  Card,
  CardBody,
  Button,
  Progress,
  Chip,
  Typography,
} from "@material-tailwind/react";
import { FiChevronRight, FiArrowUp, FiShield } from "react-icons/fi";
import { TABLE_OF_CONTENTS, HERO, LAST_UPDATED, BREADCRUMBS } from "../constants/terms/privacyContent";
import { PRIVACY_SECTIONS } from "../constants/terms/privacyContent";


export default function PrivacyPolicy() {
  const { isDarkMode } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-main-dark-bg text-white" : "bg-main-light-bg text-gray-900"
      }`}
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Progress value={scrollProgress} className="h-1 rounded-none" color="indigo" />
      </div>

      <Header />

      <div className="container mx-auto px-4 py-8 max-w-6xl mt-20">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          {BREADCRUMBS.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <FiChevronRight className="w-4 h-4 mx-2" />}
              <span
                className={
                  crumb.isActive
                    ? "text-primary-indigo"
                    : isDarkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }
              >
                {crumb.text}
              </span>
            </div>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sticky */}
          <div className="lg:col-span-1">
            <Card
              className={`sticky top-24 ${
                isDarkMode ? "bg-secundary-dark-bg border-gray-700" : "bg-gray-50"
              }`}
            >
              <CardBody>
                <Typography variant="h6" className="mb-4">
                  Contenido
                </Typography>
                <nav className="space-y-2">
                  {TABLE_OF_CONTENTS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-2 w-full text-left p-2 rounded-md text-sm transition-colors ${
                        isDarkMode ? "hover:bg-main-dark-bg" : "hover:bg-white"
                      }`}
                    >
                      <item.icon className="w-4 h-4 text-primary-indigo" />
                      <span>{item.title}</span>
                    </button>
                  ))}
                </nav>
              </CardBody>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-primary-indigo rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiShield className="w-8 h-8 text-white" />
              </div>
              <Typography variant="h2" className="mb-4">
                {HERO.title}
              </Typography>
              <Typography
                className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}
              >
                {HERO.description}
              </Typography>
              <Chip
                value={`Última actualización: ${LAST_UPDATED}`}
                className="mt-4"
                variant="outlined"
              />
            </div>

            {/* Dynamic Sections */}
            {PRIVACY_SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <section.icon className="w-6 h-6 text-primary-indigo" />
                  <Typography variant="h4">{section.title}</Typography>
                </div>
                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : "bg-gray-50"}>
                  <CardBody>
                    {section.content.map((paragraph, idx) => (
                      <Typography key={idx} className="mb-4 text-sm">
                        {paragraph}
                      </Typography>
                    ))}
                  </CardBody>
                </Card>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 p-0"
          variant="outlined"
          onClick={scrollToTop}
        >
          <FiArrowUp className="w-4 h-4" />
        </Button>
      )}

      <Footer />
    </div>
  );
}