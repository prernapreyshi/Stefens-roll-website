import { useState } from "react";
import {
  UtensilsCrossed,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ cartCount = 0 }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Stefens Rolls
                </h1>
                <p className="text-xs text-muted-foreground">
                  Fresh Rolls • Delivered in 20 Minutes
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-semibold"
                    : "text-foreground hover:text-accent transition"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-semibold"
                    : "text-foreground hover:text-accent transition"
                }
              >
                Menu
              </NavLink>

              <NavLink
                to="/franchise"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-semibold"
                    : "text-foreground hover:text-accent transition"
                }
              >
                Own a Franchise
              </NavLink>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Cart */}
              <button
                onClick={() => navigate("/cart")}
                className="relative p-2 rounded-lg hover:bg-muted transition"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground w-5 h-5 text-xs rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-muted"
                onClick={() => setOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ===== OVERLAY ===== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ===== MOBILE SIDEBAR ===== */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-card z-50 shadow-xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6 flex flex-col gap-8">

          {/* Sidebar Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-lg font-bold">Stefens Rolls</span>
            </div>

            <button onClick={() => setOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-semibold"
                  : "text-foreground"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/menu"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-semibold"
                  : "text-foreground"
              }
            >
              Menu
            </NavLink>

            <NavLink
              to="/franchise"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-semibold"
                  : "text-foreground"
              }
            >
              Own a Franchise
            </NavLink>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Header;
