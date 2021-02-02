import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const services = [
  {
    path: "/",
    key: 1,
    icon: <HomeIcon />,
    label: "Начало",
    color: "#e2dff0",
  },
  {
    path: "/about",
    key: 2,
    icon: <GroupIcon />,
    label: "За нас",
    color: "#e2dff0",
  },
  {
    path: "/services",
    key: 3,
    icon: <SettingsApplicationsIcon />,
    label: "Услуги",
    color: "#802634",
  },
  {
    path: "/contact",
    key: 4,
    icon: <ContactSupportIcon />,
    label: "Контакт",
    color: '#802634'
  },
];

export { services };
