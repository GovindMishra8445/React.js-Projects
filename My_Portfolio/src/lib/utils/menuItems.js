import { 
  Home, 
  Folder, 
  Code, 
  Server, 
  Smartphone, 
  Database, 
  Layers, 
  Wrench, // Replaced Tool with Wrench (Tool is not a valid lucide icon)
  Briefcase, 
  BarChart2, 
  Mail 
} from "lucide-react";

export const menuItems = [
  {
    name: "Dashboard",
    to: "/admin/dashboard",
    icon: Home,
  },
  {
    name: "Projects",
    to: "/admin/projects",
    icon: Folder,
    subItems: [
      { name: "All Projects", to: "/admin/allprojects", icon: Folder },
      { name: "Frontend", to: "/admin/projects/frontend", icon: Code },
      { name: "Backend", to: "/admin/projects/backend", icon: Server },
      { name: "FullStack", to: "/admin/projects/fullstack", icon: Layers },
      { name: "App Frontend", to: "/admin/projects/app-frontend", icon: Smartphone },
      { name: "App Backend", to: "/admin/projects/app-backend", icon: Database },
      { name: "App FullStack", to: "/admin/projects/app-fullstack", icon: Layers },
    ],
  },
  {
    name: "Skills",
    to: "/admin/skills",
    icon: Wrench, // Replaced Tool with Wrench
  },
  {
    name: "Experience",
    to: "/admin/experience",
    icon: Briefcase,
  },
  {
    name: "Analytics",
    to: "/admin/analytics",
    icon: BarChart2,
    badge: "New",
  },
  {
    name: "Messages",
    to: "/admin/messages",
    icon: Mail,
    badge: "5",
  },
];