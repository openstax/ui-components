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
});
