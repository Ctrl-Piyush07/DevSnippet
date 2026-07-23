import { Moon, Plus, CircleUserRound, Search } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [activeNav, setActiveNav] = useState("browser");
  return (
    <header className="h-16 border-b bg-white sticky top-0 z-10">
      <nav className="h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">DevSnippet</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setActiveNav("Browse");
              }}
              className={
                activeNav === "Browse"
                  ? "rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-black transition-colors"
                  : "rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-black"
              }
            >
              Browse
            </button>

            <button
              onClick={() => {
                setActiveNav("Favorites");
              }}
              className={
                activeNav === "Favorites"
                  ? "rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-black transition-colors"
                  : "rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-black"
              }
            >
              Favorites
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search snippets..."
              className="w-80 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 pl-10 text-sm placeholder:text-gray-400 outline-none transition-colors focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-200"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              className="rounded-md border border-gray-200 bg-white p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-black"
            >
              <Moon className="h-4 w-4" />
            </button>

            <button
              type="button"
              aria-label="Add snippet"
              className="rounded-md bg-black p-2 text-white transition-colors hover:bg-gray-800"
            >
              <Plus className="h-4 w-4" />
            </button>

            <div className="mx-1 h-6 w-px bg-gray-200" />
            <button
              type="button"
              aria-label="Open profile menu"
              className="rounded-full p-1 text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
            >
              <CircleUserRound className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
