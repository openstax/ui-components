import { render } from "@testing-library/react";
import { ButtonBar } from "./ButtonBar";
import { palette } from "../theme/palette";

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
      // the variables the caller did not override are still bound
      expect(el.style.getPropertyValue("--button-bar-selected-bg")).toBe(palette.neutralLight);
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
