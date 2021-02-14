import { render, fireEvent, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import theme from "../utility/theme";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";

it("checkServicesRender", () => {
  const { queryByTitle } = render(
    <ThemeProvider theme={theme}>
      <Contact />
    </ThemeProvider>
  );
  const contact = queryByTitle("contact");
  expect(contact).toBeTruthy();
});

describe("ContactForm", () => {
  it("should render the basic fields", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contact />
      </ThemeProvider>
    );
    expect(screen.queryByTitle("name")).toBeInTheDocument();
    expect(screen.queryByTitle("email")).toBeInTheDocument();
    expect(screen.queryByTitle("phone")).toBeInTheDocument();
  });
  it("should validate form fields", async () => {
    const mockSave = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Contact saveData={mockSave} />
      </ThemeProvider>
    );
    fireEvent.input(screen.getByTestId("name-input"), {
      target: {
        value: "D",
      },
    });

    fireEvent.input(screen.getByTestId("email-input"), {
      target: { value: "hello" },
    });

    fireEvent.input(screen.getByTestId("phone-input"), {
      target: { value: "hello" },
    });

    fireEvent.submit(screen.getByRole("submit"));
    expect(await screen.findAllByRole("alert")).toHaveLength(3);
    expect(mockSave).not.toBeCalled();
  });
});
