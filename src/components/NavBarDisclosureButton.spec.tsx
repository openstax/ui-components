import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavBarDisclosureButton, NavBarDisclosureItem } from "./NavBarDisclosureButton";

const renderDisclosure = (
  props: Partial<React.ComponentProps<typeof NavBarDisclosureButton>> = {},
  onAction = jest.fn(),
) => {
  const user = userEvent.setup();
  const result = render(
    <>
      <NavBarDisclosureButton label="Help" {...props}>
        <NavBarDisclosureItem href="/guide" target="_blank">Guide</NavBarDisclosureItem>
        <NavBarDisclosureItem href="/faq">FAQ</NavBarDisclosureItem>
        <NavBarDisclosureItem onAction={onAction}>Cookie settings</NavBarDisclosureItem>
      </NavBarDisclosureButton>
      <p>Page content</p>
      <button>After</button>
    </>,
  );

  return { user, onAction, trigger: screen.getByRole("button", { name: "Help" }), ...result };
};

describe("NavBarDisclosureButton", () => {
  describe("the trigger", () => {
    it("is a collapsed button that does not claim to open a menu or dialog", () => {
      const { trigger } = renderDisclosure();

      expect(trigger.getAttribute("aria-expanded")).toBe("false");
      expect(trigger.hasAttribute("aria-haspopup")).toBe(false);
      expect(trigger.hasAttribute("aria-controls")).toBe(false);
    });

    it("is named by its label", () => {
      renderDisclosure();

      expect(screen.getByRole("button", { name: "Help" })).toBeTruthy();
    });

    it("is named by aria-label when there is no label", () => {
      render(
        <NavBarDisclosureButton aria-label="Resources">
          <NavBarDisclosureItem href="/x">X</NavBarDisclosureItem>
        </NavBarDisclosureButton>,
      );

      expect(screen.getByRole("button", { name: "Resources" })).toBeTruthy();
    });
  });

  describe("opening", () => {
    it("shows the list and reports the state and the panel it controls", async () => {
      const { user, trigger } = renderDisclosure();

      await user.click(trigger);

      const list = screen.getByRole("list");
      expect(trigger.getAttribute("aria-expanded")).toBe("true");
      expect(trigger.getAttribute("aria-controls")).toBe(list.id);
      expect(list.id).not.toBe("");
    });

    it("states the list role, which list-style: none would drop in Safari", async () => {
      const { user, trigger } = renderDisclosure();

      await user.click(trigger);

      expect(screen.getByRole("list").getAttribute("role")).toBe("list");
    });

    it("adds no menu or dialog semantics", async () => {
      const { user, trigger } = renderDisclosure();

      await user.click(trigger);

      expect(screen.queryByRole("menu")).toBeNull();
      expect(screen.queryByRole("menuitem")).toBeNull();
      expect(screen.queryByRole("dialog")).toBeNull();
    });

    it("renders links as links and actions as buttons", async () => {
      const { user, trigger } = renderDisclosure();

      await user.click(trigger);

      const guide = screen.getByRole("link", { name: "Guide" });
      expect(guide.getAttribute("href")).toBe("/guide");
      expect(guide.getAttribute("target")).toBe("_blank");
      expect(guide.getAttribute("rel")).toBe("noreferrer");
      expect(screen.getByRole("link", { name: "FAQ" }).hasAttribute("rel")).toBe(false);
      expect(screen.getByRole("button", { name: "Cookie settings" }).getAttribute("type")).toBe("button");
      expect(screen.getAllByRole("listitem")).toHaveLength(3);
    });

    it("lets a caller set rel", async () => {
      render(
        <NavBarDisclosureButton label="Help" defaultOpen>
          <NavBarDisclosureItem href="/x" target="_blank" rel="opener">X</NavBarDisclosureItem>
        </NavBarDisclosureButton>,
      );

      expect(screen.getByRole("link", { name: "X" }).getAttribute("rel")).toBe("opener");
    });

    it("can start open", () => {
      renderDisclosure({ defaultOpen: true });

      expect(screen.getByRole("list")).toBeTruthy();
      expect(screen.getByRole("button", { name: "Help" }).getAttribute("aria-expanded")).toBe("true");
    });

    it("lines the list up with the end edge when asked", () => {
      const { container } = renderDisclosure({ align: "end", defaultOpen: true });

      expect(container.querySelector(".navbar-disclosure")?.classList.contains("navbar-disclosure-end")).toBe(true);
    });
  });

  describe("keyboard", () => {
    it("opens with Enter and Space", async () => {
      const { user, trigger } = renderDisclosure();
      trigger.focus();

      await user.keyboard("{Enter}");
      expect(screen.getByRole("list")).toBeTruthy();

      await user.keyboard("{Enter}");
      expect(screen.queryByRole("list")).toBeNull();

      await user.keyboard(" ");
      expect(screen.getByRole("list")).toBeTruthy();
    });

    it("moves through the items with Tab", async () => {
      const { user, trigger } = renderDisclosure();
      await user.click(trigger);

      await user.tab();
      expect(document.activeElement).toBe(screen.getByRole("link", { name: "Guide" }));

      await user.tab();
      expect(document.activeElement).toBe(screen.getByRole("link", { name: "FAQ" }));

      await user.tab();
      expect(document.activeElement).toBe(screen.getByRole("button", { name: "Cookie settings" }));
    });

    it("closes on Escape from inside the list and returns focus to the button", async () => {
      const { user, trigger } = renderDisclosure();
      await user.click(trigger);
      await user.tab();

      await user.keyboard("{Escape}");

      expect(screen.queryByRole("list")).toBeNull();
      expect(trigger.getAttribute("aria-expanded")).toBe("false");
      expect(document.activeElement).toBe(trigger);
    });

    it("closes on Escape from the button", async () => {
      const { user, trigger } = renderDisclosure();
      await user.click(trigger);

      await user.keyboard("{Escape}");

      expect(screen.queryByRole("list")).toBeNull();
      expect(document.activeElement).toBe(trigger);
    });

    it("closes when focus moves past the last item", async () => {
      const { user, trigger } = renderDisclosure();
      await user.click(trigger);
      screen.getByRole("button", { name: "Cookie settings" }).focus();

      await user.tab();

      expect(screen.queryByRole("list")).toBeNull();
      expect(document.activeElement).toBe(screen.getByRole("button", { name: "After" }));
      expect(trigger.getAttribute("aria-expanded")).toBe("false");
    });

    it("stays open while focus moves between the button and its items", async () => {
      const { user, trigger } = renderDisclosure();
      await user.click(trigger);

      await user.tab();
      await user.tab({ shift: true });

      expect(document.activeElement).toBe(trigger);
      expect(screen.getByRole("list")).toBeTruthy();
    });
  });

  describe("pointer", () => {
    it("closes, and stays closed, when the button is pressed again", async () => {
      const { user, trigger } = renderDisclosure();
      await user.click(trigger);

      await user.click(trigger);

      expect(screen.queryByRole("list")).toBeNull();
      expect(trigger.getAttribute("aria-expanded")).toBe("false");
    });

    it("closes on a press outside, without moving focus", () => {
      const { trigger } = renderDisclosure({ defaultOpen: true });
      trigger.focus();

      const outside = screen.getByText("Page content");
      fireEvent.mouseDown(outside);
      fireEvent.mouseUp(outside);

      expect(screen.queryByRole("list")).toBeNull();
      expect(document.activeElement).toBe(trigger);
    });

    it("stays open on a press inside the list", () => {
      renderDisclosure({ defaultOpen: true });

      const item = screen.getByRole("link", { name: "FAQ" });
      fireEvent.mouseDown(item);
      fireEvent.mouseUp(item);

      expect(screen.getByRole("list")).toBeTruthy();
    });
  });

  describe("activating an item", () => {
    it("calls the action once, closes the list and returns focus to the button", async () => {
      const { user, trigger, onAction } = renderDisclosure();
      await user.click(trigger);

      await user.click(screen.getByRole("button", { name: "Cookie settings" }));

      expect(onAction).toHaveBeenCalledTimes(1);
      expect(screen.queryByRole("list")).toBeNull();
      expect(document.activeElement).toBe(trigger);
    });

    it("closes the list after a link is followed", async () => {
      const { user, trigger } = renderDisclosure();
      await user.click(trigger);
      const guide = screen.getByRole("link", { name: "Guide" });
      guide.addEventListener("click", (event) => event.preventDefault());

      await user.click(guide);

      expect(screen.queryByRole("list")).toBeNull();
      expect(document.activeElement).toBe(trigger);
    });

    it("works from the keyboard", async () => {
      const { user, trigger, onAction } = renderDisclosure();
      await user.click(trigger);
      screen.getByRole("button", { name: "Cookie settings" }).focus();

      await user.keyboard("{Enter}");

      expect(onAction).toHaveBeenCalledTimes(1);
      expect(screen.queryByRole("list")).toBeNull();
    });
  });

  describe("onOpenChange", () => {
    it("reports nothing when focus passes a closed disclosure", async () => {
      const onOpenChange = jest.fn();
      const { user, trigger } = renderDisclosure({ onOpenChange });
      trigger.focus();

      await user.tab();

      expect(document.activeElement).toBe(screen.getByRole("button", { name: "After" }));
      expect(onOpenChange).not.toHaveBeenCalled();
    });

    it("reports a close once when a focusable element outside is pressed", async () => {
      const onOpenChange = jest.fn();
      const { user, trigger } = renderDisclosure({ onOpenChange });
      await user.click(trigger);
      onOpenChange.mockClear();

      await user.click(screen.getByRole("button", { name: "After" }));

      expect(screen.queryByRole("list")).toBeNull();
      expect(onOpenChange.mock.calls).toEqual([[false]]);
    });

    it("reports each change once", async () => {
      const onOpenChange = jest.fn();
      const { user, trigger } = renderDisclosure({ onOpenChange });

      await user.click(trigger);
      await user.keyboard("{Escape}");
      await act(async () => { await user.click(trigger); });
      await user.click(screen.getByRole("button", { name: "Cookie settings" }));

      expect(onOpenChange.mock.calls).toEqual([[true], [false], [true], [false]]);
    });
  });
});
