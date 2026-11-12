import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TextResizer } from "./TextResizer";
import { TextResizerValue, textResizerValueMap, textResizerValues } from "./constants";

const Controlled = (props: Partial<React.ComponentProps<typeof TextResizer>>) => {
  const [value, setValue] = React.useState<TextResizerValue>(0);
  return <TextResizer {...props} value={value} onChange={setValue} />;
};

const decrease = () => screen.getByRole("button", { name: "Decrease text size" });
const increase = () => screen.getByRole("button", { name: "Increase text size" });

describe("text resizer constants", () => {
  it("has a scale for every value, with 0 as 100%", () => {
    expect(textResizerValues.map((value) => textResizerValueMap.get(value))).toEqual([0.75, 0.9, 1, 1.25, 1.5, 2]);
    expect(textResizerValueMap.get(0)).toBe(1);
  });
});

describe("TextResizer", () => {
  it("gives the slider a name and a value in percent", () => {
    render(<TextResizer value={3} onChange={jest.fn()} />);

    expect(screen.getByRole("slider", { name: "Text size" }).getAttribute("aria-valuetext")).toBe("200%");
  });

  it.each([
    [-2 as TextResizerValue, "75%"],
    [-1 as TextResizerValue, "90%"],
    [0 as TextResizerValue, "100%"],
    [1 as TextResizerValue, "125%"],
    [2 as TextResizerValue, "150%"],
  ])("reports the value text for size %i", (value, text) => {
    render(<TextResizer value={value} onChange={jest.fn()} />);

    expect(screen.getByRole("slider").getAttribute("aria-valuetext")).toBe(text);
  });

  it("marks Decrease unavailable at the smallest size, and only that button", () => {
    render(<TextResizer value={-2} onChange={jest.fn()} />);

    expect(decrease().getAttribute("aria-disabled")).toBe("true");
    expect(increase().hasAttribute("aria-disabled")).toBe(false);
  });

  it("marks Increase unavailable at the largest size, and only that button", () => {
    render(<TextResizer value={3} onChange={jest.fn()} />);

    expect(increase().getAttribute("aria-disabled")).toBe("true");
    expect(decrease().hasAttribute("aria-disabled")).toBe(false);
  });

  it("does not change the size from an unavailable button", () => {
    const onChange = jest.fn();
    render(<TextResizer value={-2} onChange={onChange} />);

    fireEvent.click(decrease());

    expect(onChange).not.toHaveBeenCalled();
  });

  it("keeps the buttons from submitting a form", () => {
    render(<TextResizer value={0} onChange={jest.fn()} />);

    expect(increase().getAttribute("type")).toBe("button");
    expect(decrease().getAttribute("type")).toBe("button");
  });

  it("changes the size from the buttons and the slider", () => {
    const onChange = jest.fn();
    render(<TextResizer value={0} onChange={onChange} />);

    fireEvent.click(increase());
    fireEvent.click(decrease());
    fireEvent.change(screen.getByRole("slider"), { target: { value: "2" } });

    expect(onChange.mock.calls).toEqual([[1], [-1], [2]]);
  });

  it("announces nothing until a button is pressed, then the new size", () => {
    render(<Controlled />);
    const status = screen.getByRole("status");

    expect(status.textContent).toBe("");

    fireEvent.click(increase());

    expect(screen.getByRole("status")).toBe(status);
    expect(status.textContent).toBe("Text size 125%");
  });

  it("announces a repeated button press after the slider moved the size away", () => {
    render(<Controlled />);
    const status = screen.getByRole("status");

    fireEvent.click(increase());
    expect(status.textContent).toBe("Text size 125%");

    fireEvent.change(screen.getByRole("slider"), { target: { value: "0" } });
    expect(status.textContent).toBe("");

    fireEvent.click(increase());
    expect(status.textContent).toBe("Text size 125%");
  });

  it("clears the announcement when the size changes from outside", () => {
    const { rerender } = render(<TextResizer value={0} onChange={jest.fn()} />);

    fireEvent.click(increase());
    rerender(<TextResizer value={1} onChange={jest.fn()} />);
    expect(screen.getByRole("status").textContent).toBe("Text size 125%");

    rerender(<TextResizer value={-1} onChange={jest.fn()} />);
    expect(screen.getByRole("status").textContent).toBe("");
  });

  it("takes its text from props", () => {
    render(
      <Controlled
        sliderLabel="Tamaño del texto"
        decreaseLabel="Reducir"
        increaseLabel="Aumentar"
        announcement={(size) => `Tamaño ${size}`}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Aumentar" }));

    expect(screen.getByRole("slider", { name: "Tamaño del texto" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Reducir" })).toBeTruthy();
    expect(screen.getByRole("status").textContent).toBe("Tamaño 125%");
  });

  it("is a group only when it is given a name for one", () => {
    const { rerender } = render(<TextResizer value={0} onChange={jest.fn()} />);
    expect(screen.queryByRole("group")).toBeNull();

    rerender(
      <>
        <span id="heading">Text size</span>
        <TextResizer value={0} onChange={jest.fn()} aria-labelledby="heading" />
      </>
    );
    expect(screen.getByRole("group", { name: "Text size" })).toBeTruthy();
  });

  it("sets the fill and progress variables, and takes a class", () => {
    const { container } = render(
      <TextResizer value={3} onChange={jest.fn()} fillColor="rebeccapurple" className="mine" />
    );
    const root = container.firstElementChild as HTMLElement;

    expect(root.classList.contains("mine")).toBe(true);
    expect(root.style.getPropertyValue("--text-resizer-fill")).toBe("rebeccapurple");
    expect(root.style.getPropertyValue("--text-resizer-progress")).toBe("100%");
  });
});
