import { sidebarNavigation } from "../../data/sidebarNavigation";
import { useState } from "react";
const Sidebar = () => {
  const [activeNav, setActiveNav] = useState("all-snippets");
  return (
    <aside className="w-64 border-r bg-white p-4">
      <section>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-400">
          Library
        </p>
        <div className="flex flex-col gap-1">
          {sidebarNavigation.map((navItem) => {
            const Icon = navItem.icon;
            const isActive = activeNav === navItem.id;
            return (
              <button
                key={navItem.id}
                type="button"
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveNav(navItem.id)}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {navItem.label}
              </button>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
