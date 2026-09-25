import { render } from "@testing-library/react";
import { ButtonBar } from "./ButtonBar";

describe("ButtonBar", () => {
  it("renders", () => {
    const { asFragment } = render(
      <ButtonBar>
        <a>One</a>
        <a>Two</a>
      </ButtonBar>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders small size", () => {
    const { asFragment } = render(
      <ButtonBar size="small">
        <button>One</button>
        <button>Two</button>
      </ButtonBar>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders large size", () => {
    const { asFragment } = render(
      <ButtonBar size="large">
        <button>One</button>
        <button data-selected>Two</button>
      </ButtonBar>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  describe("caller style", () => {
    // No cast: the exported prop type accepts custom properties directly.
    it("lets a caller override a documented css variable without a cast", () => {
      const { container } = render(
        <ButtonBar style={{ "--button-bar-border-color": "hotpink" }}>
          <button>One</button>
        </ButtonBar>,
      );
      const el = container.querySelector("div") as HTMLElement;

      expect(el.style.getPropertyValue("--button-bar-border-color")).toBe("hotpink");
      // Defaults for the variables the caller did not override live in the stylesheet
      // as var(--x, var(--ox-color-*)), so they are deliberately absent from the inline
      // style. tokens.spec.ts is what keeps those defaults honest.
      expect(el.style.getPropertyValue("--button-bar-selected-bg")).toBe("");
    });

    it("still accepts ordinary css properties", () => {
      const { container } = render(
        <ButtonBar style={{ marginTop: "2rem" }}>
          <button>One</button>
        </ButtonBar>,
      );
      const el = container.querySelector("div") as HTMLElement;

      expect(el.style.marginTop).toBe("2rem");
    });
  });
});
