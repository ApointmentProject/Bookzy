import { useToast } from "../../context/ToastContext"
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaTimes,
} from "react-icons/fa"

export default function ToastContainer() {
  const { toasts, removeToast } = useToast()

  return (
    <div className="fixed bottom-4 right-4 z-[9999] space-y-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  )
}

function ToastItem({
  toast,
  onRemove,
}: {
  toast: { id: string; type: string; title: string; message?: string }
  onRemove: (id: string) => void
}) {
  const typeStyles = {
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800",
  }

  const icons = {
    success: <FaCheckCircle className="h-5 w-5 text-green-500" />,
    warning: <FaExclamationTriangle className="h-5 w-5 text-yellow-500" />,
    error: <FaTimesCircle className="h-5 w-5 text-red-500" />,
  }

  return (
    <div
      className={`max-w-sm w-full border rounded-lg p-4 shadow-lg flex gap-3 animate-in slide-in-from-right-full ${typeStyles[toast.type as keyof typeof typeStyles]}`}
    >
      <div>{icons[toast.type as keyof typeof icons]}</div>
      <div className="flex-1">
        <p className="font-semibold text-sm">{toast.title}</p>
        {toast.message && <p className="text-sm mt-1">{toast.message}</p>}
      </div>
      <button onClick={() => onRemove(toast.id)} className="hover:opacity-70">
        <FaTimes className="h-4 w-4" />
      </button>
    </div>
  )
}
