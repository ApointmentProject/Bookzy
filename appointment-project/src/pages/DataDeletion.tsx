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
import {
  FiChevronRight,
  FiArrowUp,
  FiShield,
  FiClock,
  FiAlertTriangle,
  FiCheckCircle,
  FiTrash2,
  FiMail,
} from "react-icons/fi";
import {
  TABLE_OF_CONTENTS,
  GENERAL_INFO,
  HERO_TEXTS,
  REQUEST_SECTION,
  PROCESS_SECTION,
  CONFIRMATION_SECTION,
  CONTACT_SECTION,
  FOOTER_LINKS,
  FOOTER_TEXT,
  BREADCRUMBS,
} from "../constants/terms/dataDeletion.constants";

// Componente Separator personalizado
const Separator = ({ className = "" }: { className?: string }) => (
  <hr className={`my-4 ${className}`} />
);

export default function DataDeletion() {
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
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-main-dark-bg text-white" : "bg-main-light-bg text-gray-900"
        }`}
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Progress value={scrollProgress} className="h-1 rounded-none" color="indigo" />
      </div>

      {/* Header */}
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
              className={`sticky top-24 ${isDarkMode ? "bg-secundary-dark-bg border-gray-700" : "bg-gray-50"
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
                      className={`flex items-center space-x-2 w-full text-left p-2 rounded-md text-sm transition-colors ${isDarkMode ? "hover:bg-main-dark-bg" : "hover:bg-white"
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
                <FiTrash2 className="w-8 h-8 text-white" />
              </div>
              <Typography variant="h2" className="mb-4">
                {HERO_TEXTS.title}
              </Typography>
              <Typography
                className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}
              >
                {HERO_TEXTS.subtitle}
              </Typography>
              <Chip
                value={`Última actualización: ${GENERAL_INFO.lastUpdate}`}
                className="mt-4"
                variant="outlined"
              />
            </div>

            {/* Section 1: Solicitud de Eliminación */}
            <section id="solicitud" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiMail className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{REQUEST_SECTION.title}</Typography>
              </div>

              <div className="space-y-6">
                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {REQUEST_SECTION.howToRequest.title}
                    </Typography>
                    <Typography className="mb-4">{REQUEST_SECTION.howToRequest.intro}</Typography>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      {REQUEST_SECTION.howToRequest.methods.map((method, index) => (
                        <div
                          key={index}
                          className={`text-center p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-100"
                            }`}
                        >
                          {method.icon ? (
                            <method.icon className="w-8 h-8 mx-auto mb-2 text-primary-indigo" />
                          ) : (
                            <div className="w-8 h-8 mx-auto mb-2 bg-primary-indigo rounded flex items-center justify-center">
                              <span className="text-white text-xs font-bold">{method.customIcon}</span>
                            </div>
                          )}
                          <Typography variant="h6" className="mb-2">
                            {method.title}
                          </Typography>
                          <Typography className="text-sm text-gray-600 mb-2">
                            {method.description}
                          </Typography>
                          {method.link && method.linkType === "email" && (
                            <a
                              href={`mailto:${method.link}`}
                              className="text-primary-indigo hover:underline text-sm"
                            >
                              {method.link}
                            </a>
                          )}
                          {method.link && method.linkType === "web" && (
                            <a
                              href={`https://${method.link}`}
                              className="text-primary-indigo hover:underline text-sm"
                            >
                              {method.link}
                            </a>
                          )}
                          {method.extra && (
                            <Typography className="text-sm text-gray-500">{method.extra}</Typography>
                          )}
                        </div>
                      ))}
                    </div>

                    <div
                      className={`p-4 rounded-lg border-l-4 border-blue-500 ${isDarkMode ? "bg-blue-900/20" : "bg-blue-50"
                        }`}
                    >
                      <Typography variant="h6" className="mb-2">
                        {REQUEST_SECTION.howToRequest.requiredInfo.title}
                      </Typography>
                      <Typography className="text-sm">
                        {REQUEST_SECTION.howToRequest.requiredInfo.text}
                      </Typography>
                    </div>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {REQUEST_SECTION.verification.title}
                    </Typography>
                    <div className="flex items-start space-x-3">
                      <FiShield className="w-5 h-5 text-primary-indigo mt-1" />
                      <Typography>{REQUEST_SECTION.verification.text}</Typography>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </section>

            {/* Section 2: Proceso de Eliminación */}
            <section id="proceso" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiShield className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{PROCESS_SECTION.title}</Typography>
              </div>

              <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : "bg-gray-50"}>
                <CardBody>
                  <div className="flex items-start space-x-3 mb-6">
                    <FiShield className="w-5 h-5 text-primary-indigo mt-1" />
                    <Typography>{PROCESS_SECTION.intro}</Typography>
                  </div>

                  <div className="space-y-6">
                    {PROCESS_SECTION.steps.map((step, index) => (
                      <div key={index}>
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-8 h-8 ${step.isLegal ? "bg-yellow-500" : "bg-primary-indigo"
                              } rounded-full flex items-center justify-center text-white font-bold text-sm`}
                          >
                            {step.number}
                          </div>
                          <div className="flex-1">
                            <Typography variant="h5" className="mb-2">
                              {step.title}
                            </Typography>
                            {step.hasWarning ? (
                              <div className="flex items-start space-x-3">
                                <FiClock className="w-4 h-4 text-orange-500 mt-1" />
                                <Typography className="text-sm text-gray-600">
                                  Tu información será eliminada automáticamente de los respaldos en un plazo de{" "}
                                  <strong>30 días</strong>. Durante ese periodo, tus datos no serán utilizados
                                  ni restaurados a los sistemas activos.
                                </Typography>
                              </div>
                            ) : step.isLegal ? (
                              <div
                                className={`p-3 rounded-lg border-l-4 border-yellow-500 ${isDarkMode ? "bg-yellow-900/20" : "bg-yellow-50"
                                  }`}
                              >
                                <Typography className="text-sm">{step.description}</Typography>
                              </div>
                            ) : (
                              <>
                                <Typography className="text-sm text-gray-600 mb-3">
                                  {step.description}
                                </Typography>
                                {step.items && (
                                  <div className="grid md:grid-cols-2 gap-3">
                                    <ul className="space-y-1 text-sm">
                                      {step.items.slice(0, 3).map((item, idx) => (
                                        <li key={idx}>• {item}</li>
                                      ))}
                                    </ul>
                                    <ul className="space-y-1 text-sm">
                                      {step.items.slice(3).map((item, idx) => (
                                        <li key={idx}>• {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                        {index < PROCESS_SECTION.steps.length - 1 && (
                          <Separator className={isDarkMode ? "border-gray-700" : "border-gray-200"} />
                        )}
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </section>

            {/* Section 3: Confirmación y Consecuencias */}
            <section id="confirmacion" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiCheckCircle className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{CONFIRMATION_SECTION.title}</Typography>
              </div>

              <div className="space-y-6">
                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <div className="flex items-start space-x-3 mb-4">
                      <FiCheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <Typography variant="h6">{CONFIRMATION_SECTION.notification.title}</Typography>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Typography variant="h6" className="mb-2">
                          {CONFIRMATION_SECTION.notification.subtitle}
                        </Typography>
                        <Typography className="text-sm text-gray-600">
                          {CONFIRMATION_SECTION.notification.text}
                        </Typography>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {CONFIRMATION_SECTION.consequences.title}
                    </Typography>
                    <div
                      className={`p-4 rounded-lg border-l-4 border-red-500 ${isDarkMode ? "bg-red-900/20" : "bg-red-50"
                        } mb-4`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <FiAlertTriangle className="w-4 h-4 text-red-500" />
                        <Typography
                          variant="h6"
                          className={isDarkMode ? "text-red-300" : "text-red-700"}
                        >
                          {CONFIRMATION_SECTION.consequences.warning.title}
                        </Typography>
                      </div>
                      <Typography
                        className={`text-sm ${isDarkMode ? "text-red-400" : "text-red-600"}`}
                      >
                        {CONFIRMATION_SECTION.consequences.warning.text}
                      </Typography>
                    </div>

                    <Typography className="mb-4">{CONFIRMATION_SECTION.consequences.intro}</Typography>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Typography variant="h6" className="text-red-600 mb-2">
                          {CONFIRMATION_SECTION.consequences.losses.title}
                        </Typography>
                        <ul className="space-y-1 text-sm">
                          {CONFIRMATION_SECTION.consequences.losses.items.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Typography variant="h6" className="text-green-600 mb-2">
                          {CONFIRMATION_SECTION.consequences.guarantees.title}
                        </Typography>
                        <ul className="space-y-1 text-sm">
                          {CONFIRMATION_SECTION.consequences.guarantees.items.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {CONFIRMATION_SECTION.reflectionPeriod.title}
                    </Typography>
                    <div className="flex items-start space-x-3">
                      <FiClock className="w-5 h-5 text-primary-indigo mt-1" />
                      <div>
                        <Typography className="mb-2">
                          Ofrecemos un período de <strong>48 horas</strong> después de confirmar tu
                          solicitud durante el cual puedes cancelarla respondiendo al correo de confirmación.
                        </Typography>
                        <div className={`p-3 rounded-lg ${isDarkMode ? "bg-blue-900/20" : "bg-blue-50"}`}>
                          <Typography className="text-sm">
                            {CONFIRMATION_SECTION.reflectionPeriod.tip}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </section>

            {/* Section 4: Contacto */}
            <section id="contacto" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiMail className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{CONTACT_SECTION.title}</Typography>
              </div>

              <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                <CardBody>
                  <Typography className="mb-6">{CONTACT_SECTION.intro}</Typography>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {CONTACT_SECTION.contacts.slice(0, 2).map((contact, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          {contact.icon ? (
                            <contact.icon className="w-5 h-5 text-primary-indigo mt-1" />
                          ) : (
                            <div className="w-5 h-5 bg-primary-indigo rounded mt-1 flex items-center justify-center">
                              <span className="text-white text-xs">{contact.customIcon}</span>
                            </div>
                          )}
                          <div>
                            <Typography variant="h6">{contact.title}</Typography>
                            {contact.linkType === "email" ? (
                              <a
                                href={`mailto:${contact.value}`}
                                className="text-primary-indigo hover:underline"
                              >
                                {contact.value}
                              </a>
                            ) : contact.linkType === "web" ? (
                              <a
                                href={`https://${contact.value}`}
                                className="text-primary-indigo hover:underline"
                              >
                                {contact.value}
                              </a>
                            ) : (
                              <Typography className="text-sm text-gray-600">{contact.value}</Typography>
                            )}
                            {contact.note && (
                              <Typography className="text-xs text-gray-500">{contact.note}</Typography>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {CONTACT_SECTION.contacts.slice(2).map((contact, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          {contact.icon ? (
                            <contact.icon className="w-5 h-5 text-primary-indigo mt-1" />
                          ) : (
                            <div className="w-5 h-5 bg-primary-indigo rounded mt-1 flex items-center justify-center">
                              <span className="text-white text-xs">{contact.customIcon}</span>
                            </div>
                          )}
                          <div>
                            <Typography variant="h6">{contact.title}</Typography>
                            {contact.lines ? (
                              contact.lines.map((line, idx) => (
                                <Typography key={idx} className="text-sm text-gray-600">
                                  {line}
                                </Typography>
                              ))
                            ) : (
                              <>
                                <Typography className="text-sm text-gray-600">{contact.value}</Typography>
                                {contact.note && (
                                  <Typography className="text-xs text-gray-500">{contact.note}</Typography>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className={`my-6 ${isDarkMode ? "border-gray-700" : "border-gray-200"}`} />

                  <div className={`p-4 rounded-lg ${isDarkMode ? "bg-main-dark-bg" : "bg-gray-50"}`}>
                    <Typography className="text-sm">
                      <strong>Nota importante:</strong> {CONTACT_SECTION.importantNote}
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            </section>

            {/* Footer */}
            <footer className={`mt-16 pt-8 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-6 text-sm">
                  {FOOTER_LINKS.map((link, index) => (
                    <a key={index} href={link.href} className="text-primary-indigo hover:underline">
                      {link.text}
                    </a>
                  ))}
                </div>
                <Typography className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {FOOTER_TEXT.copyright}
                </Typography>
                <Typography className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                  {FOOTER_TEXT.version}
                </Typography>
              </div>
            </footer>
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

      {/* Footer Component */}
      <Footer />
    </div>
  );
}