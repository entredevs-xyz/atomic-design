import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ButtonAtom from "../ButtonAtom";
import ButtonMolecule from "../ButtonMolecule";
import ButtonOrganism from "../ButtonOrganism";

describe("ButtonAtom component", () => {
  it("renders correctly", () => {
    render(<ButtonAtom>Click me</ButtonAtom>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("displays the correct text", () => {
    render(<ButtonAtom>Click me</ButtonAtom>);
    const button = screen.getByText("Click me");
    expect(button).toHaveTextContent("Click me");
  });

  it("handles click events", () => {
    const onClick = jest.fn();
    render(<ButtonAtom onClick={onClick}>Click me</ButtonAtom>);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});


describe("ButtonMolecule", () => {
  it("renders children and passes props to ButtonAtom", () => {
    const text = "Click Me";
    const backgroundColor = "red";
    const textColor = "white";
    render(
      <ButtonMolecule backgroundColor={backgroundColor} textColor={textColor}>
        {text}
      </ButtonMolecule>
    );
    const button = screen.getByText(text);
    expect(button).toHaveTextContent(text);
    expect(button).toHaveStyle(`background-color: ${backgroundColor}`);
    expect(button).toHaveStyle(`color: ${textColor}`);
  });

  it("handles click events", () => {
    const onClick = jest.fn();
    render(<ButtonMolecule onClick={onClick}>Click me</ButtonMolecule>);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});


describe("ButtonOrganism", () => {
  it("renders the children properly", () => {
    render(<ButtonOrganism>Click me</ButtonOrganism>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("disables the button when disabled prop is true", () => {
    render(<ButtonOrganism disabled>Click me</ButtonOrganism>);
    const button = screen.getByText("Click me");
    expect(button).toBeDisabled();
  });

  it("displays loading text when loading prop is true", () => {
    render(<ButtonOrganism loading>Click me</ButtonOrganism>);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("calls the onClick function when the button is clicked", () => {
    const onClick = jest.fn();
    render(<ButtonOrganism onClick={onClick}>Click me</ButtonOrganism>);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});


