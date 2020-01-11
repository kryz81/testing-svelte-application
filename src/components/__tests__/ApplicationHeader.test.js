import ApplicationHeader from "../ApplicationHeader";

const createComponent = (Component, props) => {
  const target = document.body.appendChild(document.createElement("div"));
  return {
    renderedElement: target,
    component: new Component({ target, props: { ...props } })
  };
};

beforeEach(() => {
  document.body.innerHTML = "";
});

it("renders without error", async () => {
  const result = () => createComponent(ApplicationHeader, { appVersion: 'v1.0' });
  expect(result).not.toThrowError();
});

it("correctly renders the component", () => {
  const { renderedElement } = createComponent(ApplicationHeader, { appVersion: 'v1.0' });
  expect(renderedElement).toMatchSnapshot();
});

it("correctly renders the app header", () => {
  const { renderedElement } = createComponent(ApplicationHeader, { appVersion: 'v1.0' });
  const result = renderedElement.getElementsByTagName("h1");
  expect(result[0].innerHTML).toEqual("My Expense Tracker v1.0");
});
