import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WorkIcon from "@mui/icons-material/Work";
import FlagIcon from "@mui/icons-material/Flag";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

export const leadFields = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter Full Name",
    icon: <PersonIcon />,
    showOn: ["create", "update"],
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter Email",
    icon: <EmailIcon />,
    showOn: ["create", "update"],
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter Phone Number",
    icon: <PhoneIcon />,
    showOn: ["create", "update"],
  },
  {
    id: "status",
    label: "Lead Status",
    type: "select",
    placeholder: "Please Select Lead Status",
    icon: <FlagIcon />,
    options: [
      { label: "New", value: "new" },
      { label: "Contacted", value: "contacted" },
      { label: "Lost", value: "lost" },
    ],
    showOn: ["update"],
  },
  
  {
    id: "source",
    label: "Lead Source",
    type: "select",
    placeholder: "Please Select Lead Source",
    icon: <FlagIcon />,
    options: [
      { label: "Website", value: "website" },
      { label: "Meta", value: "meta" },
      { label: "Google", value: "google" },
    ],
    showOn: ["update"],
  },
  {
    id: "ownerId",
    label: "Admin Name",
    type: "text",
    placeholder: "Enter Admin Name",
    icon: <AssignmentIndIcon />,
    disabled: true,
    showOn: ["create", "update"],
  },
  {
    id: "service",
    label: "Service Requirement",
    type: "textarea",
    placeholder: "Describe your service requirement here...",
    icon: <WorkIcon />,
    showOn: ["create", "update"],
  },
];
