// import { render, screen } from "@testing-library/react";
// import user from "@testing-library/user-event";
// import FormComponent from "./Form";

// describe("FromComponent()", () => {
//   it("submit the form correctly with user input", async () => {
//     user.setup();
//     render(
//       <FormComponent
//         onSubmit={(data) => {
//           console.log(data);
//         }}
//       />
//     );

//     const text = "hello world";

//     const inputEl = screen.getByRole("textbox");
//     await user.type(inputEl, text);

//     const headingEl = screen.getByRole("heading", {
//       level: 2,
//     });

//     expect(headingEl).toHaveTextContent(text);
//   });
// });

import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import FormComponent from "./Form";
import { vi } from "vitest";

describe("FromComponent()", () => {
  it("submit the form correctly with user input", async () => {
    user.setup();

    const submitFn = vi.fn();
    render(<FormComponent onSubmit={submitFn} />);

    const text = "hello world";

    const inputEl = screen.getByRole("textbox");
    await user.type(inputEl, text);

    const headingEl = screen.getByRole("heading", {
      level: 2,
    });

    const submitButton = screen.getByRole("button", {
      // name: /submit/i,
      name: "Submit",
    });
    await user.click(submitButton);
    expect(headingEl).toHaveTextContent(text);
    //test if the submit function is called
    //expect(submitFn).toHaveBeenCalled();
    //expect(submitFn).toHaveBeenCalledWith("text");
    expect(submitFn).toHaveBeenCalledWith(text);
  });
});
