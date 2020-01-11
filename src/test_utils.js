export const createComponent = (Component, props) => {
  const target = document.body.appendChild(document.createElement('div'));
  return {
    renderedElement: target,
    component: new Component({ target, props: { ...props } }),
  };
};

export const cleanBody = () => (document.body.innerHTML = '');

export const fireInput = (elem, value) => {
  elem.value = value;
  elem.dispatchEvent(new Event('input'));
};
