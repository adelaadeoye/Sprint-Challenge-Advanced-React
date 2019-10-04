import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, getByText } from "@testing-library/react";
import ContentTable from "./component/ContentTable";
import { ExpansionPanelActions } from "@material-ui/core";

test("It renders successfully", () => {
  const testArr = [{ name: "Adela", country: "Nig", search: "10" }];
  const { getByText } = render(<ContentTable players={testArr} />);
  const text = getByText("Adela", "Nig", "10");
  expect(text.textContent).toBe("Adela");
});

// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   render(<App />);
//   // ReactDOM.unmountComponentAtNode(div);
// });
