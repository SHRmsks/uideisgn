import mainButton from "./mainButton.js";

function Button(configs) {
  // configs will be your json list
  var attributes = typeof configs === "string" ? JSON.parse(configs) : configs;
  if (Array.isArray(attributes)) {
    attributes = attributes.reduce((acc, curr) => ({ ...acc, ...curr }), {});
  }

  console.log(attributes);
  let container = null,
    vari = null,
    color = null,
    size = null,
    disabled = null,
    text = null,
    icon = null;
  attributes.container !== undefined ? (container = attributes.container) : (container = undefined);
  console.log(attributes.container);

  attributes.variant !== undefined ? (vari = attributes.variant) : (vari = undefined);

  attributes.color !== undefined ? (color = attributes.color) : (color = undefined);

  attributes.size !== undefined ? (size = attributes.size) : (size = undefined);

  attributes.disabled !== undefined ? (disabled = attributes.disabled) : (disabled = undefined);
  attributes.text !== undefined ? (text = attributes.text) : (text = undefined);
  attributes.icon !== (undefined || null) ? (icon = attributes.icon) : (icon = undefined);
  console.log(attributes.text);
  console.log(attributes.icon);
  const mainbutton = new mainButton(vari, color, size, disabled, icon, text).create();
  const domid = document.getElementById(container);
  console.log(domid === null);
  console.log(typeof mainbutton);
  try {
    if (domid === undefined) {
      throw new Error("Container not found!");
    }
    domid.appendChild(mainbutton);
    console.log("Button created successfully!");
  } catch (e) {
    console.log("created failed!", e);
  }
  return true;
}
export default Button;
