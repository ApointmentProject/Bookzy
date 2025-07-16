import { useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { useTheme } from "../context/ThemeContext";
import { LoginForm } from "../components/auth/loginForm";
import { RegisterBusinessForm } from "../components/auth/business/registerBusinessForm";
import { RegisterUserForm } from "../components/auth/registerUserForm";
import { HomeSpeedDial } from "../components/auth/homeSpeedDial";



export default function HomePage() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("login");

  const tabsData = [
    {
      label: "Login",
      value: "login",
      component: <LoginForm />,
    },
    {
      label: "Registro Usuario",
      value: "register-user",
      component: <RegisterUserForm />,
    },
    {
      label: "Registro Negocio",
      value: "register-business",
      component: <RegisterBusinessForm />,
    },
  ];

  return (
    <main className={`flex min-h-screen items-center justify-center p-4 transition-colors duration-300 ${isDarkMode ? "bg-main-dark-bg" : "bg-gray-100"
      }`}>
      <div className={`w-full max-w-4xl rounded-lg p-6 shadow-lg transition-colors duration-300 ${isDarkMode ? "bg-secundary-dark-bg" : "bg-white"
        }`}>
        <Tabs value={activeTab} className="w-full">
          <TabsHeader
            className={`rounded-lg p-1 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            indicatorProps={{
              className: `rounded-md shadow-none ${isDarkMode ? "bg-gray-700" : "bg-white"
                }`,
            }}
          >
            {tabsData.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`py-2 px-4 text-sm font-medium transition-colors ${activeTab === value
                    ? isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                    : isDarkMode
                      ? "text-gray-400 hover:text-gray-200"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>

          <TabsBody
            animate={{
              initial: { y: 10, opacity: 0 },
              mount: { y: 0, opacity: 1 },
              unmount: { y: -10, opacity: 0 },
            }}
            className="mt-4"
          >
            {tabsData.map(({ value, component }) => (
              <TabPanel key={value} value={value} className="p-0">
                {component}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      <HomeSpeedDial />
    </main>
  );
}