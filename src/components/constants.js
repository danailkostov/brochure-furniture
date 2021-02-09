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
    placeholder: "Въведете вашето име",
    type: "text",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "Въведе вашия имейл",
    type: "email",
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone",
    placeholder: "Въведете вашият номер",
    type: "tel",
  },
];

const comments = [
  {
    name: "Danail Kostov",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quidem inventore eveniet? Eius aliquid quam dolore animi estincidunt praesentium, nihil tempore cumque non corporis magnamsimilique nulla illo quia earum natus id explicabo consequuntursit quisquam dolor  Perspiciatis!",
    profession: "customer",
  },
  {
    name: "Danail Kostovv2",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quidem inventore eveniet? Eius aliquid quam dolore animi estincidunt praesentium, nihil tempore cumque non corporis magnamsimilique nulla illo quia earum natus id explicabo consequuntursit quisquam dolor  Perspiciatis!",
    profession: "customer",
  },
  {
    name: "Danail Kostovv3",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quidem inventore eveniet? Eius aliquid quam dolore animi estincidunt praesentium, nihil tempore cumque non corporis magnamsimilique nulla illo quia earum natus id explicabo consequuntursit quisquam dolor  Perspiciatis!",
    profession: "customer",
  },
];

export { services, gallery, inputs, comments };
