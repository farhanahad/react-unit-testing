import { render, screen } from "@testing-library/react";
import UserTable from "./UsersTable";
//import { users } from "../../App";
const users = [
  { id: 1, name: "John", age: 32 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 43 },
];
describe("UserTable()", () => {
  it("Should render the welcome message after 5ms", async () => {
    render(<UserTable users={users} />);

    const welcomeMessageEl = await screen.findByTestId(
      "welcome",
      {},
      { timeout: 2000 }
    );
    expect(welcomeMessageEl).toBeInTheDocument();

    //screen.logTestingPlaygroundURL();
  });
});

//using this in testing playground
//<tr style="border:10px solid blue; display:block;">

// import { render, screen, within, logRoles } from "@testing-library/react";
// import UserTable from "./UsersTable";
// import { users } from "../../App";

// describe("UserTable()", () => {
//   it("Should render the table correctly", async () => {
//     const { container } = render(<UserTable users={users} />);

//     //screen.logTestingPlaygroundURL();
//     logRoles(container);
//     const rows = within(screen.getByTestId("users")).getAllByRole("row");

//     expect(rows).toHaveLength(3);
//     expect(rows).toHaveLength(3);
//   });
// });
