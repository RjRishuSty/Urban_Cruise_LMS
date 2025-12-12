import DashboardIcon from "@mui/icons-material/Dashboard";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import WebIcon from "@mui/icons-material/Web";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export const navItems = [
  {
    subheader: "OVERVIEW",
    items: [
      { title: "Dashboard", icon: DashboardIcon, path: "/" },
      { title: "All Leads", icon: LeaderboardIcon, path: "/leads" },
    ],
  },

  {
    subheader: "LEAD SOURCES",
    items: [
      { title: "Website Leads", icon: WebIcon, path: "/leads/website" },
      { title: "Meta Leads", icon: FacebookIcon, path: "/leads/meta" },
      { title: "Google Leads", icon: GoogleIcon, path: "/leads/google" },
    ],
  },

  {
    subheader: "INTEGRATIONS",
    items: [
      { title: "API Keys", icon: SyncAltIcon, path: "/integrations/api" },
      { title: "Meta Webhook", icon: FacebookIcon, path: "/integrations/meta" },
      { title: "Google Webhook", icon: GoogleIcon, path: "/integrations/google" },
    ],
  },

  {
    subheader: "REPORTS",
    items: [
      { title: "Analytics", icon: AssessmentIcon, path: "/analytics" },
      { title: "Daily Summary", icon: AssessmentIcon, path: "/reports/daily" },
    ],
  },

  {
    subheader: "ACCOUNT",
    items: [
      { title: "Profile", icon: PersonOutlineIcon, path: "/profile" },
      { title: "Settings", icon: SettingsIcon, path: "/settings" },
    ],
  },
];
