import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

import { navbarLinks } from "@/constants";

import logoDark from "@/assets/logo-dark.svg";

import { cn } from "@/utils/cn";

import PropTypes from "prop-types";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
    return (
        <aside
            ref={ref}
            className={cn(
                "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-[#0000FF] [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-[#0000FF] rounded-r-3xl",
                collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
                collapsed ? "max-md:-left-full" : "max-md:left-0",
            )}
        >
           <div className="flex gap-x-3 p-3 items-center">
              <img
                src={logoDark}
                alt="4Colourss"
                className="w-8 h-8 object-contain dark:hidden"
              />
              <img
                src={logoDark}
                alt="4Colourss"
                className="w-8 h-8 object-contain hidden dark:block"
              />
              {!collapsed && <p className="text-lg font-medium text-white">4Colourss</p>}
            </div>

            <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
                {navbarLinks.map((navbarLink) => (
                    <nav
                        key={navbarLink.title}
                        className={cn("sidebar-group", collapsed && "md:items-center")}
                    >
                        <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>{navbarLink.title}</p>
                        {navbarLink.links.map((link) => (
                          <NavLink
                              key={link.label}
                              to={link.path}
                              className={({ isActive }) =>
                                cn(
                                  "sidebar-item",
                                  isActive && "bg-blue-100 text-blue-700 font-medium"
                                )
                              }
                            >
                              <link.icon size={22} className="flex-shrink-0" />
                              {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
                            </NavLink>
                        ))}
                    </nav>
                ))}
            </div>
        </aside>
    );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
    collapsed: PropTypes.bool,
};
