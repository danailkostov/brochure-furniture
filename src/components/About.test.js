import { render } from "@testing-library/react";
import About from "../components/About";

it("checkAboutRender", () => {
  const { queryByTitle } = render(<About />);
  const about = queryByTitle("about");
  expect(about).toBeTruthy();
});
