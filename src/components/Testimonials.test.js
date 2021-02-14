import { render } from "@testing-library/react";
import Testimonials from "../components/Testimonials";
import theme from "../utility/theme";
import { ThemeProvider } from "@material-ui/styles";

it("checkServicesRender", () => {
  const { queryByTitle } = render(
    <ThemeProvider theme={theme}>
      <Testimonials />
    </ThemeProvider>
  );
  const testimonials = queryByTitle("testimonials");
  expect(testimonials).toBeTruthy();
});
