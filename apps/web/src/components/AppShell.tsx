import { Bell, Compass, UserCircle } from "lucide-react";
import type { ReactNode } from "react";
import { traveloopRoutes } from "../routes/routeInventory";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const navRoutes = traveloopRoutes.filter((route) => !route.deferred).slice(0, 6);

  return (
    <div className="app-shell">
      <header className="app-header">
        <a className="wordmark" href="/dashboard" aria-label="Traveloop dashboard">
          <Compass aria-hidden="true" size={22} />
          <span>Traveloop</span>
        </a>
        <nav className="top-nav" aria-label="Traveloop routes">
          {navRoutes.map((route) => (
            <a key={route.id} href={route.path}>
              {route.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="Notifications">
            <Bell aria-hidden="true" size={20} />
          </button>
          <button className="icon-button" type="button" aria-label="Profile">
            <UserCircle aria-hidden="true" size={20} />
          </button>
        </div>
      </header>
      {children}
    </div>
  );
}
