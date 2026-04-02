import { render,screen } from "@testing-library/react"
import sum from "../sum"
import Aboutus  from "../Aboutus"
import "babel-jest"
import "jest-environment-jsdom"
import "@testing-library/react"
import "jest"

it("Testing Sum function ",()=>{
 const num = sum(12,12)

 expect(num).toBe(24)
})

it("should load AboutUs component", () => {
  render(<Aboutus />);
  const heading = screen.getByRole("heading");
  
  expect(heading).toBeInTheDocument(); 
});

it("should load the ")
