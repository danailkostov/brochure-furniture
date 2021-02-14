import { render } from "@testing-library/react";
import Hero from "../components/Hero";
import theme from "../utility/theme";
import { ThemeProvider } from "@material-ui/styles";

it("checkHeroRender", () => {
  const { queryByTitle } = render(
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>
  );
  const hero = queryByTitle("hero");
  expect(hero).toBeTruthy();
});
