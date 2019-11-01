import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, getByText } from "@testing-library/react";
import ContentTable from "./component/ContentTable";


// test('It Display Nav content', () => {
//   const {text}= render(<App/>)
// const displayWoment= text("display")
// expect(displayWoment.textContent).toBe('Women')
// });


test("It Display Data successfully ", () => {
  const testArr = [{ name: "Adela", country: "Nig", search: "10" }];
  const { getByText } = render(<ContentTable players={testArr} />);
  const text = getByText("Adela", "Nig", "10");
  expect(text.textContent).toBe("Adela");
});


