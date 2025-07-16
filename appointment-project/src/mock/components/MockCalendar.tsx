import { MdAccessTime, MdPerson } from "react-icons/md"

export function MockCalendar() {
  const currentHour = new Date().getHours()

  const hours = Array.from({ length: 13 }, (_, i) => i + 8)

  const appointments = {
    9: { client: "María García", service: "Consulta", duration: "30 min" },
    11: { client: "Carlos López", service: "Revisión", duration: "45 min" },
    14: { client: "Ana Martínez", service: "Tratamiento", duration: "60 min" },
    16: { client: "Pedro Sánchez", service: "Consulta", duration: "30 min" },
    18: { client: "Laura Rodríguez", service: "Seguimiento", duration: "30 min" },
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <MdAccessTime className="w-5 h-5 text-blue-600" />
          <span>Horario de Hoy</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {hours.map((hour) => {
          const appointment = appointments[hour as keyof typeof appointments]
          return (
            <HourBlock
              key={hour}
              hour={hour}
              appointment={appointment}
              isCurrent={hour === currentHour}
              isPast={hour < currentHour}
            />
          )
        })}
      </CardContent>
    </Card>
  )
}

// Componente Card base
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-xl shadow border ${className}`}>
      {children}
    </div>
  )
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="border-b px-6 py-4">{children}</div>
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">{children}</div>
}

function CardContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 py-4 space-y-2 max-h-[500px] overflow-y-auto">
      {children}
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded">
      {children}
    </span>
  )
}

function HourBlock({
  hour,
  appointment,
  isCurrent,
  isPast,
}: {
  hour: number
  appointment?: { client: string; service: string; duration: string }
  isCurrent: boolean
  isPast: boolean
}) {
  return (
    <div
      className={`flex items-center p-4 rounded-lg border transition-all ${
        isCurrent
          ? "border-blue-200 bg-blue-50"
          : isPast
            ? "border-gray-100 bg-gray-50/50"
            : "border-gray-100 hover:border-gray-200 hover:bg-gray-50/50"
      }`}
    >
      <div className="flex-shrink-0 w-16">
        <span
          className={`text-sm font-medium ${
            isCurrent ? "text-blue-600" : isPast ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {hour.toString().padStart(2, "0")}:00
        </span>
      </div>

      <div className="flex-1 ml-4">
        {appointment ? (
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MdPerson className="w-4 h-4 text-gray-500" />
                <span className="font-medium text-gray-900">{appointment.client}</span>
              </div>
              <Badge>{appointment.duration}</Badge>
            </div>
            <p className="text-sm text-gray-600">{appointment.service}</p>
          </div>
        ) : (
          <span className="text-sm text-gray-400">Disponible</span>
        )}
      </div>

      {isCurrent && (
        <div className="flex-shrink-0 ml-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  )
}