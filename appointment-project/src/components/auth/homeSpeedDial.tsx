// src/components/common/HomeSpeedDial.tsx
import {
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  IconButton,
} from "@material-tailwind/react";
import { FaPlus, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export function HomeSpeedDial() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <SpeedDial placement="left">
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full">
            <FaPlus className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          <Link to="/">
            <SpeedDialAction>
              <FaHome className="h-5 w-5" />
            </SpeedDialAction>
          </Link>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
