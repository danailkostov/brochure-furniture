import { render } from "@testing-library/react";
import SocialProofs from "../components/SocialProofs";
import theme from "../utility/theme";
import { ThemeProvider } from "@material-ui/styles";

it("checkServicesRender", () => {
  const { queryByTitle } = render(
    <ThemeProvider theme={theme}>
      <SocialProofs />
    </ThemeProvider>
  );
  const socialProofs = queryByTitle("socialProofs");
  expect(socialProofs).toBeTruthy();
});
