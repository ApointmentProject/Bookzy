import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  Card,
  CardBody,
  Button,
  Progress,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Chip,
  Typography,
} from "@material-tailwind/react";
import {
  FiChevronRight,
  FiArrowUp,
  FiCheck,
  FiCalendar,
  FiMail,
  FiCreditCard,
  FiShield,
  FiFileText,
  FiUser,
  FiLock,
} from "react-icons/fi";
import {
  TABLE_OF_CONTENTS,
  GENERAL_INFO,
  HERO_TEXTS,
  INTRODUCTION_SECTION,
  DEFINITIONS,
  SERVICE_USE_SECTION,
  APPOINTMENT_SECTION,
  BUSINESS_SECTION,
  PRIVACY_SECTION,
  INTELLECTUAL_PROPERTY_SECTION,
  PAYMENT_SECTION,
  LIABILITY_SECTION,
  MODIFICATIONS_SECTION,
  TERMINATION_SECTION,
  CONTACT_SECTION,
  FOOTER_LINKS,
  FOOTER_TEXT,
} from "../constants/terms/termsOfService.constants"

export default function TermsOfService() {
  const { isDarkMode } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAcceptButton, setShowAcceptButton] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

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

  const handleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
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

      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-6xl mt-20">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Inicio</span>
          <FiChevronRight className="w-4 h-4" />
          <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Legal</span>
          <FiChevronRight className="w-4 h-4" />
          <span className="text-primary-indigo">Términos de Servicio</span>
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

            {/* Section 1: Introduction */}
            <section id="introduccion" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiShield className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{INTRODUCTION_SECTION.title}</Typography>
              </div>

              <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : "bg-gray-50"}>
                <CardBody className="space-y-4">
                  <Typography>{INTRODUCTION_SECTION.content.welcome}</Typography>

                  <div
                    className={`p-4 rounded-lg border-l-4 border-primary-indigo ${
                      isDarkMode ? "bg-main-dark-bg" : "bg-blue-50"
                    }`}
                  >
                    <Typography variant="h6" className="mb-2">
                      {INTRODUCTION_SECTION.content.acceptanceTitle}
                    </Typography>
                    <Typography>{INTRODUCTION_SECTION.content.acceptanceText}</Typography>
                  </div>

                  <Typography>
                    <strong>Edad mínima:</strong> {INTRODUCTION_SECTION.content.minimumAge}
                  </Typography>

                  <Typography>{INTRODUCTION_SECTION.content.legalAgreement}</Typography>
                </CardBody>
              </Card>
            </section>

            {/* Section 2: Definitions */}
            <section id="definiciones" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiFileText className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">2. Definiciones</Typography>
              </div>

              <div className="space-y-4">
                {DEFINITIONS.map((def, index) => (
                  <Accordion
                    key={index}
                    open={activeAccordion === index}
                    className={`border rounded-lg ${
                      isDarkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <AccordionHeader
                      onClick={() => handleAccordion(index)}
                      className={`px-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    >
                      <Typography variant="h6">{def.term}</Typography>
                    </AccordionHeader>
                    <AccordionBody className="px-6 pb-4">
                      <Typography>{def.definition}</Typography>
                    </AccordionBody>
                  </Accordion>
                ))}
              </div>
            </section>

            {/* Section 3: Service Use */}
            <section id="uso-servicio" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiUser className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{SERVICE_USE_SECTION.title}</Typography>
              </div>

              <div className="space-y-6">
                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {SERVICE_USE_SECTION.registration.title}
                    </Typography>
                    <ul className="space-y-2 list-disc list-inside">
                      {SERVICE_USE_SECTION.registration.items.map((item, index) => (
                        <li key={index}>
                          <Typography as="span">{item}</Typography>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {SERVICE_USE_SECTION.responsibilities.title}
                    </Typography>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Typography variant="h6" className="text-green-600 mb-2">
                          {SERVICE_USE_SECTION.responsibilities.allowed.title}
                        </Typography>
                        <ul className="space-y-1 text-sm">
                          {SERVICE_USE_SECTION.responsibilities.allowed.items.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Typography variant="h6" className="text-red-600 mb-2">
                          {SERVICE_USE_SECTION.responsibilities.prohibited.title}
                        </Typography>
                        <ul className="space-y-1 text-sm">
                          {SERVICE_USE_SECTION.responsibilities.prohibited.items.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <div
                  className={`p-4 rounded-lg border-l-4 border-yellow-500 ${
                    isDarkMode ? "bg-yellow-900/20" : "bg-yellow-50"
                  }`}
                >
                  <Typography variant="h6" className="mb-2">
                    {SERVICE_USE_SECTION.veracity.title}
                  </Typography>
                  <Typography className="text-sm">{SERVICE_USE_SECTION.veracity.text}</Typography>
                </div>
              </div>
            </section>

            {/* Section 4: Appointments */}
            <section id="agendamiento" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiCalendar className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{APPOINTMENT_SECTION.title}</Typography>
              </div>

              <div className="space-y-6">
                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {APPOINTMENT_SECTION.bookingProcess.title}
                    </Typography>
                    <div className="grid md:grid-cols-3 gap-4">
                      {APPOINTMENT_SECTION.bookingProcess.steps.map((step, index) => (
                        <div key={index} className="text-center">
                          <div className="w-12 h-12 bg-primary-indigo rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold">{step.number}</span>
                          </div>
                          <Typography variant="h6" className="mb-2">
                            {step.title}
                          </Typography>
                          <Typography className="text-sm text-gray-600">{step.description}</Typography>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {APPOINTMENT_SECTION.cancellationPolicy.title}
                    </Typography>
                    <div className="space-y-4">
                      {APPOINTMENT_SECTION.cancellationPolicy.policies.map((policy, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div
                            className={`w-2 h-2 bg-${
                              policy.color === "red" ? "red-500" : "primary-indigo"
                            } rounded-full mt-2`}
                          ></div>
                          <div>
                            <Typography variant="h6">{policy.title}</Typography>
                            <Typography className="text-sm text-gray-600">{policy.description}</Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>

                <div
                  className={`p-4 rounded-lg border-l-4 border-blue-500 ${
                    isDarkMode ? "bg-blue-900/20" : "bg-blue-50"
                  }`}
                >
                  <Typography variant="h6" className="mb-2">
                    {APPOINTMENT_SECTION.serviceResponsibility.title}
                  </Typography>
                  <Typography className="text-sm">{APPOINTMENT_SECTION.serviceResponsibility.text}</Typography>
                </div>
              </div>
            </section>

            {/* Section 5: Business Accounts */}
            <section id="cuentas-negocio" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiCreditCard className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{BUSINESS_SECTION.title}</Typography>
              </div>

              <div className="space-y-6">
                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {BUSINESS_SECTION.requirements.title}
                    </Typography>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Typography variant="h6" className="mb-3">
                          {BUSINESS_SECTION.requirements.documentation.title}
                        </Typography>
                        <ul className="space-y-2 text-sm">
                          {BUSINESS_SECTION.requirements.documentation.items.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Typography variant="h6" className="mb-3">
                          {BUSINESS_SECTION.requirements.information.title}
                        </Typography>
                        <ul className="space-y-2 text-sm">
                          {BUSINESS_SECTION.requirements.information.items.map((item, index) => (
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
                      {BUSINESS_SECTION.fees.title}
                    </Typography>
                    <div className="space-y-4">
                      {BUSINESS_SECTION.fees.items.map((fee, index) => (
                        <div
                          key={index}
                          className={`flex justify-between items-center p-3 rounded-lg ${
                            isDarkMode ? "bg-gray-800" : "bg-gray-100"
                          }`}
                        >
                          <span>{fee.description}</span>
                          <Chip value={fee.value} variant="outlined" />
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {BUSINESS_SECTION.obligations.title}
                    </Typography>
                    <div className="space-y-3">
                      {BUSINESS_SECTION.obligations.items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <FiCheck className="w-5 h-5 text-green-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </section>

            {/* Section 6: Privacy */}
            <section id="privacidad" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiLock className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{PRIVACY_SECTION.title}</Typography>
              </div>

              <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                <CardBody className="space-y-4">
                  <Typography>
                    {PRIVACY_SECTION.intro}{" "}
                    <a href="/privacy" className="text-primary-indigo hover:underline">
                      {PRIVACY_SECTION.linkText}
                    </a>
                    .
                  </Typography>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Typography variant="h6" className="mb-3">
                        {PRIVACY_SECTION.dataUse.title}
                      </Typography>
                      <ul className="space-y-2 text-sm">
                        {PRIVACY_SECTION.dataUse.items.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Typography variant="h6" className="mb-3">
                        {PRIVACY_SECTION.dataSharing.title}
                      </Typography>
                      <ul className="space-y-2 text-sm">
                        {PRIVACY_SECTION.dataSharing.items.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-lg border-l-4 border-green-500 ${
                      isDarkMode ? "bg-green-900/20" : "bg-green-50"
                    }`}
                  >
                    <Typography variant="h6" className="mb-2">
                      {PRIVACY_SECTION.rights.title}
                    </Typography>
                    <Typography className="text-sm">{PRIVACY_SECTION.rights.text}</Typography>
                  </div>
                </CardBody>
              </Card>
            </section>

            {/* Section 7: Intellectual Property */}
            <section id="propiedad" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiFileText className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{INTELLECTUAL_PROPERTY_SECTION.title}</Typography>
              </div>

              <div className="space-y-6">
                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {INTELLECTUAL_PROPERTY_SECTION.rights.title}
                    </Typography>
                    <Typography className="mb-4">{INTELLECTUAL_PROPERTY_SECTION.rights.intro}</Typography>
                    <div className="grid md:grid-cols-2 gap-4">
                      {INTELLECTUAL_PROPERTY_SECTION.rights.items.map((item, index) => (
                        <Typography key={index} className="text-sm">
                          • {item}
                        </Typography>
                      ))}
                    </div>
                    <Typography className="mt-4 text-sm text-gray-600">
                      {INTELLECTUAL_PROPERTY_SECTION.rights.conclusion}
                    </Typography>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {INTELLECTUAL_PROPERTY_SECTION.licenses.title}
                    </Typography>
                    <div className="space-y-4">
                      <div>
                        <Typography variant="h6" className="text-green-600 mb-2">
                          {INTELLECTUAL_PROPERTY_SECTION.licenses.granted.title}
                        </Typography>
                        <Typography className="text-sm mb-2">
                          {INTELLECTUAL_PROPERTY_SECTION.licenses.granted.intro}
                        </Typography>
                        <ul className="space-y-1 text-sm list-disc list-inside ml-4">
                          {INTELLECTUAL_PROPERTY_SECTION.licenses.granted.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <hr className={isDarkMode ? "border-gray-700" : "border-gray-200"} />
                      <div>
                        <Typography variant="h6" className="text-red-600 mb-2">
                          {INTELLECTUAL_PROPERTY_SECTION.licenses.restrictions.title}
                        </Typography>
                        <ul className="space-y-1 text-sm list-disc list-inside ml-4">
                          {INTELLECTUAL_PROPERTY_SECTION.licenses.restrictions.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {INTELLECTUAL_PROPERTY_SECTION.userContent.title}
                    </Typography>
                    <Typography className="mb-4">{INTELLECTUAL_PROPERTY_SECTION.userContent.intro}</Typography>
                    <ul className="space-y-2 text-sm">
                      {INTELLECTUAL_PROPERTY_SECTION.userContent.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </div>
            </section>

            {/* Section 8: Payments */}
            <section id="pagos" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiCreditCard className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{PAYMENT_SECTION.title}</Typography>
              </div>

              <div className="space-y-6">
                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {PAYMENT_SECTION.methods.title}
                    </Typography>
                    <div className="grid md:grid-cols-3 gap-4">
                      {PAYMENT_SECTION.methods.items.map((method, index) => (
                        <div
                          key={index}
                          className={`text-center p-4 rounded-lg ${
                            isDarkMode ? "bg-gray-800" : "bg-gray-100"
                          }`}
                        >
                          {method.icon ? (
                            <method.icon className="w-8 h-8 mx-auto mb-2 text-primary-indigo" />
                          ) : (
                            <div className="w-8 h-8 mx-auto mb-2 bg-primary-indigo rounded flex items-center justify-center">
                              <span className="text-white text-xs font-bold">{method.customIcon}</span>
                            </div>
                          )}
                          <Typography variant="h6">{method.title}</Typography>
                          <Typography className="text-sm text-gray-600">{method.description}</Typography>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {PAYMENT_SECTION.refundPolicy.title}
                    </Typography>
                    <div className="space-y-4">
                      {PAYMENT_SECTION.refundPolicy.policies.map((policy, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 bg-${policy.color}-500 rounded-full mt-2`}></div>
                          <div>
                            <Typography variant="h6">{policy.title}</Typography>
                            <Typography className="text-sm text-gray-600">{policy.description}</Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {PAYMENT_SECTION.disputes.title}
                    </Typography>
                    <Typography className="mb-4">{PAYMENT_SECTION.disputes.intro}</Typography>
                    <div className="space-y-3">
                      {PAYMENT_SECTION.disputes.steps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-primary-indigo rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {index + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </section>

            {/* Section 9: Liability */}
            <section id="limitacion" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiShield className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{LIABILITY_SECTION.title}</Typography>
              </div>

              <div className="space-y-6">
                <div
                  className={`p-6 rounded-lg border-l-4 border-yellow-500 ${
                    isDarkMode ? "bg-yellow-900/20" : "bg-yellow-50"
                  }`}
                >
                  <Typography variant="h6" className="mb-3">
                    {LIABILITY_SECTION.intermediaryRole.title}
                  </Typography>
                  <Typography className="text-sm">{LIABILITY_SECTION.intermediaryRole.text}</Typography>
                </div>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {LIABILITY_SECTION.exclusions.title}
                    </Typography>
                    <div className="space-y-4">
                      <div>
                        <Typography variant="h6" className="mb-2">
                          {LIABILITY_SECTION.exclusions.thirdPartyServices.title}
                        </Typography>
                        <ul className="space-y-1 text-sm list-disc list-inside ml-4">
                          {LIABILITY_SECTION.exclusions.thirdPartyServices.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Typography variant="h6" className="mb-2">
                          {LIABILITY_SECTION.exclusions.serviceAvailability.title}
                        </Typography>
                        <ul className="space-y-1 text-sm list-disc list-inside ml-4">
                          {LIABILITY_SECTION.exclusions.serviceAvailability.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {LIABILITY_SECTION.damageLimitations.title}
                    </Typography>
                    <Typography className="mb-4">{LIABILITY_SECTION.damageLimitations.intro}</Typography>
                    <div className="grid md:grid-cols-2 gap-4">
                      {LIABILITY_SECTION.damageLimitations.items.map((item, index) => (
                        <Typography key={index} className="text-sm">
                          • {item}
                        </Typography>
                      ))}
                    </div>
                  </CardBody>
                </Card>

                <div
                  className={`p-4 rounded-lg border-l-4 border-blue-500 ${
                    isDarkMode ? "bg-blue-900/20" : "bg-blue-50"
                  }`}
                >
                  <Typography variant="h6" className="mb-2">
                    {LIABILITY_SECTION.maxLiability.title}
                  </Typography>
                  <Typography className="text-sm">{LIABILITY_SECTION.maxLiability.text}</Typography>
                </div>
              </div>
            </section>

            {/* Section 10: Modifications */}
            <section id="modificaciones" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiFileText className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{MODIFICATIONS_SECTION.title}</Typography>
              </div>

              <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                <CardBody className="space-y-4">
                  <div>
                    <Typography variant="h5" className="mb-3">
                      {MODIFICATIONS_SECTION.rightToModify.title}
                    </Typography>
                    <Typography className="mb-4">{MODIFICATIONS_SECTION.rightToModify.intro}</Typography>
                    <ul className="space-y-2 text-sm list-disc list-inside ml-4">
                      {MODIFICATIONS_SECTION.rightToModify.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <hr className={isDarkMode ? "border-gray-700" : "border-gray-200"} />

                  <div>
                    <Typography variant="h5" className="mb-3">
                      {MODIFICATIONS_SECTION.notification.title}
                    </Typography>
                    <div className="space-y-3">
                      {MODIFICATIONS_SECTION.notification.methods.map((method, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          {method.icon ? (
                            <method.icon className="w-5 h-5 text-primary-indigo mt-0.5" />
                          ) : (
                            <div className="w-5 h-5 bg-primary-indigo rounded mt-0.5 flex items-center justify-center">
                              <span className="text-white text-xs">{method.customIcon}</span>
                            </div>
                          )}
                          <div>
                            <Typography variant="h6">{method.title}</Typography>
                            <Typography className="text-sm text-gray-600">{method.description}</Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-lg border-l-4 border-orange-500 ${
                      isDarkMode ? "bg-orange-900/20" : "bg-orange-50"
                    }`}
                  >
                    <Typography variant="h6" className="mb-2">
                      {MODIFICATIONS_SECTION.acceptance.title}
                    </Typography>
                    <Typography className="text-sm">{MODIFICATIONS_SECTION.acceptance.text}</Typography>
                  </div>
                </CardBody>
              </Card>
            </section>

            {/* Section 11: Termination */}
            <section id="terminacion" className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <FiUser className="w-6 h-6 text-primary-indigo" />
                <Typography variant="h4">{TERMINATION_SECTION.title}</Typography>
              </div>

              <div className="space-y-6">
                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {TERMINATION_SECTION.byUser.title}
                    </Typography>
                    <Typography className="mb-4">{TERMINATION_SECTION.byUser.intro}</Typography>
                    <ul className="space-y-2 text-sm">
                      {TERMINATION_SECTION.byUser.effects.map((effect, index) => (
                        <li key={index}>• {effect}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>

                <Card className={isDarkMode ? "bg-secundary-dark-bg border-gray-700" : ""}>
                  <CardBody>
                    <Typography variant="h5" className="mb-4">
                      {TERMINATION_SECTION.byBookzy.title}
                    </Typography>
                    <Typography className="mb-4">{TERMINATION_SECTION.byBookzy.intro}</Typography>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Typography variant="h6" className="text-red-600 mb-2">
                          {TERMINATION_SECTION.byBookzy.seriousViolations.title}
                        </Typography>
                        <ul className="space-y-1 text-sm">
                          {TERMINATION_SECTION.byBookzy.seriousViolations.items.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Typography variant="h6" className="text-orange-600 mb-2">
                          {TERMINATION_SECTION.byBookzy.breaches.title}
                        </Typography>
                        <ul className="space-y-1 text-sm">
                          {TERMINATION_SECTION.byBookzy.breaches.items.map((item, index) => (
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
                      {TERMINATION_SECTION.effects.title}
                    </Typography>
                    <div className="space-y-4">
                      <div>
                        <Typography variant="h6" className="mb-2">
                          {TERMINATION_SECTION.effects.immediate.title}
                        </Typography>
                        <ul className="space-y-1 text-sm list-disc list-inside ml-4">
                          {TERMINATION_SECTION.effects.immediate.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Typography variant="h6" className="mb-2">
                          {TERMINATION_SECTION.effects.permanent.title}
                        </Typography>
                        <ul className="space-y-1 text-sm list-disc list-inside ml-4">
                          {TERMINATION_SECTION.effects.permanent.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </section>

            {/* Section 12: Contact */}
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
                      <div className="flex items-start space-x-3">
                        <CONTACT_SECTION.contacts.legal.icon className="w-5 h-5 text-primary-indigo mt-1" />
                        <div>
                          <Typography variant="h6">{CONTACT_SECTION.contacts.legal.title}</Typography>
                          <Typography className="text-sm text-gray-600">
                            {CONTACT_SECTION.contacts.legal.value}
                          </Typography>
                          <Typography className="text-xs text-gray-500">
                            {CONTACT_SECTION.contacts.legal.note}
                          </Typography>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CONTACT_SECTION.contacts.address.icon className="w-5 h-5 text-primary-indigo mt-1" />
                        <div>
                          <Typography variant="h6">{CONTACT_SECTION.contacts.address.title}</Typography>
                          {CONTACT_SECTION.contacts.address.lines.map((line, index) => (
                            <Typography key={index} className="text-sm text-gray-600">
                              {line}
                            </Typography>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-primary-indigo rounded mt-1 flex items-center justify-center">
                          <span className="text-white text-xs">{CONTACT_SECTION.contacts.support.customIcon}</span>
                        </div>
                        <div>
                          <Typography variant="h6">{CONTACT_SECTION.contacts.support.title}</Typography>
                          <Typography className="text-sm text-gray-600">
                            {CONTACT_SECTION.contacts.support.value}
                          </Typography>
                          <Typography className="text-xs text-gray-500">
                            {CONTACT_SECTION.contacts.support.note}
                          </Typography>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-primary-indigo rounded mt-1 flex items-center justify-center">
                          <span className="text-white text-xs">{CONTACT_SECTION.contacts.hours.customIcon}</span>
                        </div>
                        <div>
                          <Typography variant="h6">{CONTACT_SECTION.contacts.hours.title}</Typography>
                          {CONTACT_SECTION.contacts.hours.lines.map((line, index) => (
                            <Typography key={index} className="text-sm text-gray-600">
                              {line}
                            </Typography>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className={`my-6 ${isDarkMode ? "border-gray-700" : "border-gray-200"}`} />

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

      {/* Floating Accept Button */}
      {showAcceptButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            className="bg-primary-indigo hover:bg-indigo-700 text-white shadow-lg flex items-center gap-2"
            onClick={() => setShowAcceptButton(false)}
          >
            <FiCheck className="w-4 h-4" />
            Acepto los Términos
          </Button>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          className="fixed bottom-6 left-6 z-50 rounded-full w-12 h-12 p-0 bg-transparent"
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