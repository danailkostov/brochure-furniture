import galleryImg from "../images/gallery.jpg";
import BuildIcon from "@material-ui/icons/Build";
import FitnessCenterSharpIcon from "@material-ui/icons/FitnessCenterSharp";
import DepartureBoardSharpIcon from "@material-ui/icons/DepartureBoardSharp";

const services = [
  {
    icon: <BuildIcon fontSize="large" color="secondary" />,
    name: "Сглобяване",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Porro itaque quisquam optio beatae ea quasi nisi excepturinostrum quod labore.",
  },
  {
    icon: <FitnessCenterSharpIcon fontSize="large" color="secondary" />,
    name: "Разнос",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Porro itaque quisquam optio beatae ea quasi nisi excepturinostrum quod labore.",
  },
  {
    icon: <DepartureBoardSharpIcon fontSize="large" color="secondary" />,
    name: "Транспорт",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Porro itaque quisquam optio beatae ea quasi nisi excepturinostrum quod labore.",
  },
];

const gallery = [
  {
    id: 1,
    img: { galleryImg },
  },
  {
    id: 2,
    img: { galleryImg },
  },
  {
    id: 3,
    img: { galleryImg },
  },
  {
    id: 4,
    img: { galleryImg },
  },
];

const inputs = [
  {
    id: "name",
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone",
    placeholder: "Enter your phone number",
  },
];

export { services, gallery, inputs };
