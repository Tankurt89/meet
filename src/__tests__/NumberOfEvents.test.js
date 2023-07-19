import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponents
    beforeEach(() => {
      NumberOfEventsComponents = render(<NumberOfEvents setCurrentNOE={() => { }}/>)
    })
  test("renders textbox for number of events", () => {
    const numberTextBox = NumberOfEventsComponents.queryByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("number-of-events");
  });

  test("by default, number of events is listed as 32", async () => {
    const numberTextBox = NumberOfEventsComponents.queryByRole('textbox')
    expect(numberTextBox).toHaveValue("32")
  });
  
  test("user can change number of events they wish to see listed", async () => {
      const user = userEvent.setup();
      const numberTextBox = NumberOfEventsComponents.queryByRole('textbox');
      await user.type(numberTextBox, "10")
  
      expect(numberTextBox).toHaveValue("3210");
  });
});