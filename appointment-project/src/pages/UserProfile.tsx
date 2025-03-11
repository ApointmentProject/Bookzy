import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { HiAdjustments, HiLockClosed, HiOutlineUser } from "react-icons/hi";

// Importa tus componentes reales
import ProfileComponent from "../components/userProfile/ProfileComponent";
import SecurityComponent from "../components/userProfile/SecurityComponent";
import PreferencesComponent from "../components/userProfile/PreferencesComponent";

export default function UserProfile() {
  const { isDarkMode } = useTheme();

  const data = [
    {
      label: "Profile",
      value: "profile",
      icon: HiOutlineUser,
      component: <ProfileComponent />,
    },
    {
      label: "Security",
      value: "security",
      icon: HiLockClosed,
      component: <SecurityComponent />,
    },
    {
      label: "Preferences",
      value: "preferences",
      icon: HiAdjustments,
      component: <PreferencesComponent />,
    },
  ];

  return (
    <div
      className={`flex justify-center items-center min-h-screen transition-all duration-500 ease-out ${
        isDarkMode ? "bg-main-dark-bg text-white" : "bg-white text-black"
      }`}
    >
      <Tabs
        value="profile"
        className={`w-full max-w-md rounded-lg transition-all duration-500 ease-out ${
          isDarkMode ? "bg-main-dark-bg text-white" : ""
        }`}
      >
        <TabsHeader
          className={`transition-all duration-500 ${
            isDarkMode ? "bg-secundary-dark-bg" : "bg-gray-100"
          } rounded-lg p-1`}
          indicatorProps={{
            className: `rounded-md transition-transform duration-500 ease-in-out ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`,
          }}
        >
          {data.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
              activeClassName={`
                !shadow-sm 
                ${isDarkMode ? "!text-white" : "!text-black"}
              `}
            >
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody className="mt-4">
          {data.map(({ value, component }) => (
            <TabPanel key={value} value={value}>
              {component}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
