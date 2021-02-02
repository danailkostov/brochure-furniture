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
  },
  {
    path: "/about",
    key: 2,
    icon: <GroupIcon />,
    label: "За нас",
  },
  {
    path: "/services",
    key: 3,
    icon: <SettingsApplicationsIcon />,
    label: "Услуги",
  },
  {
    path: "/contact",
    key: 4,
    icon: <ContactSupportIcon />,
    label: "Контакт",
  },
];

export { services };
