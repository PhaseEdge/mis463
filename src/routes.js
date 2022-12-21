import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdLight,
  MdLightbulb,
  MdPeople,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Decision Making",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdLightbulb} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },

  {
    name: "Top Mobile Games",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "About Us",
    layout: "/admin",
    icon: <Icon as={MdPeople} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: DataTables,
  },
];

export default routes;
