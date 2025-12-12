import {
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
} from "@mui/icons-material";

export const authInputs = {
  "sign-in": [
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
      icon: <EmailIcon sx={{color:'#637381'}} />,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
      icon: <LockIcon sx={{color:'#637381'}}  />,
    },
  ],

  "sign-up": [
    {
      id: "firstName",
      label: "First name",
      type: "text",
      placeholder: "Enter your first name",
      required: true,
      icon: <PersonIcon  sx={{color:'#637381'}}  />,
    },
    {
      id: "lastName",
      label: "Last name",
      type: "text",
      placeholder: "Enter your last name",
      required: true,
      icon: <PersonIcon  sx={{color:'#637381'}}  />,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
      icon: <EmailIcon  sx={{color:'#637381'}}  />,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Create a password",
      required: true,
      icon: <LockIcon  sx={{color:'#637381'}}  />,
    },
  ],
};
