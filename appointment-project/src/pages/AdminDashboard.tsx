import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";

import { MdAdd, MdHome, MdSettings, MdDashboardCustomize } from "react-icons/md";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";

import { MockCalendar } from "../mock/components/MockCalendar";
import UpcomingAppointmentsShortcut from "../components/admin/UpcomingAppointmentsShortcut";

import { useEffect, useState } from "react"


export default function AdminDashboard() {

  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000) // actualiza cada segundo

    return () => clearInterval(interval) // limpia el intervalo al desmontar
  }, [])

  const formattedDate = now.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  const formattedTime = now.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit"
  })

  return (
    <div className="min-h-screen w-screen bg-white flex flex-col items-center justify-center overflow-y-auto mb-10">
      <div className="w-10/12 px-4 sm:px-6 lg:px-8">
        {/* Información del día */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between py-4">
          {/* Parte izquierda */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <CiCalendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Panorama del día</h1>
              <p className="text-sm text-gray-500 capitalize">{formattedDate}</p>
            </div>
          </div>

          {/* Parte derecha */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2 sm:gap-0">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <CiClock2 className="w-6 h-6" />
              <span>{formattedTime}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <LuUsers className="w-5 h-5" />
              <span>5 citas hoy</span>
            </div>
          </div>
        </div>


        {/* Tabla mock de calendario */}
        <div className="flex flex-col lg:flex-row gap-5 mt-5">
          <MockCalendar />
          <UpcomingAppointmentsShortcut />
        </div>
      </div>

      

      {/* SpeedDial */}
      <div className="fixed bottom-6 right-6">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <MdAdd className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction>
              <MdHome className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <MdSettings className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <MdDashboardCustomize className="h-5 w-5" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}