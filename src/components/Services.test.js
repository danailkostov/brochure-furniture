import { render } from "@testing-library/react";
import Services from "../components/Services";
import theme from "../utility/theme";
import { ThemeProvider } from "@material-ui/styles";

it("checkServicesRender", () => {
  const { queryByTitle } = render(
    <ThemeProvider theme={theme}>
      <Services />
    </ThemeProvider>
  );
  const services = queryByTitle("services");
  expect(services).toBeTruthy();
});
