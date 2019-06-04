/**
 * Shorthand for creating Elements.
 * @param {*} tag The tag name of the element.
 * @param {*} [props] Optional props.
 * @param {*} children Child elements or strings
 */
function h(tag, props, ...children) {
  let element = document.createElement(tag);
  console.log(element);
  if (props) {
    if (props.nodeType || typeof props !== "object") {
      children.unshift(props);
    } else {
      for (let name in props) {
        let value = props[name];
        if (name === "style") {
          Object.assign(element.style, value);
        } else {
          element.setAttribute(name, value);
          element[name] = value;
        }
      }
    }
  }
  for (let child of children) {
    element.appendChild(
      typeof child === "object" ? child : document.createTextNode(child)
    );
  }
  return element;
}

let header = h(
  "header",
  h(
    "div",
    {
      style: { width: 300 /* height is automatically calculated */ }
    },
    h("h1", "The title"),
    h("p", "Here goes the interesting info"),
    h(
      "footer",
      h(
        "button",
        {
          value: "cta",
          type: "button",
          class: "btn",
          onclick(e) {
            console.log("click!");
          }
        },
        "Click me"
      )
    )
  )
);
document.body.appendChild(header);
