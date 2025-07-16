import { MdAccessTime, MdPerson, MdLocationOn, MdPhone } from "react-icons/md"

type Appointment = {
  time: string
  name: string
  service: string
  phone: string
}

const appointments: Appointment[] = [
  {
    time: "09:00",
    name: "María García",
    service: "Consulta General",
    phone: "+34 666 123 456",
  },
  {
    time: "11:00",
    name: "Carlos López",
    service: "Revisión Anual",
    phone: "+34 666 789 012",
  },
  {
    time: "14:00",
    name: "Ana Martínez",
    service: "Tratamiento",
    phone: "+34 666 345 678",
  },
]

export default function UpcomingAppointmentsShortcut() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Nuevas citas</h2>
        <div className="text-sm bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
          {appointments.length}
        </div>
      </div>

      {/* Scrollable list */}
      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
        {appointments.map((appt, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MdAccessTime className="w-4 h-4" />
                <span className="font-semibold">{appt.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-800 text-sm font-medium">
              <MdPerson className="w-4 h-4 text-gray-500" />
              {appt.name}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MdLocationOn className="w-4 h-4 text-gray-500" />
              {appt.service}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MdPhone className="w-4 h-4 text-gray-500" />
              {appt.phone}
            </div>

            <div className="flex gap-2 mt-2">
              <button className="flex-1 bg-zinc-900 text-white border border-zinc-900 hover:bg-white hover:text-zinc-900 text-sm font-medium py-1 rounded transition-colors duration-200">
                Aceptar
              </button>
              <button className="flex-1 bg-white text-zinc-900 border border-zinc-900 hover:bg-zinc-900 hover:text-white text-sm font-medium py-1 rounded transition-colors duration-200">
                Rechazar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}