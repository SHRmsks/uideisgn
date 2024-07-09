const btn_add = "/public/icon/btn_add.png";
const btn_expd = "/public/icon/btn_expd.png"; // icon's path
class mainButton {
  public variant: "filled" | "vacant" | "dead" | "text" | "error" | "error-vacant"; // you can only have one from these
  public color: "blue" | "grey" | "red" | string; // you can only have one from these
  public size: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl"; // you can only have one from these
  public disabled: boolean;
  private text: string = "";
  private icon: string; //this should be your called type name
  public setText(text: string): boolean {
    this.text = text;
    return true;
  } //setter for text
  public getText(): string {
    return this.text;
  } //getter for text
  public setIcon(iconName: string): boolean {
    if (iconName === "add") {
      this.icon = btn_add; // the icon's path
      return true;
    }
    if (iconName === "expand") {
      this.icon = btn_expd;
      return true;
    } else {
      return null; // else we returned null
    }
  }
  public getIcon(): string {
    return this.icon; // return should be the path
  }

  constructor(variant: "filled" | "vacant" | "dead" | "text" | "error" | "error-vacant", colors: "blue" | "grey" | "red" | string, sizes: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl", disabled: boolean, icon: string, text: string) {
    this.variant = variant;
    this.color = colors;
    this.size = sizes;
    this.disabled = disabled;
    this.setText(text);
    this.setIcon(icon);
  }

  getDetails(): string {
    console.log(this.variant, this.size, this.color, this.disabled, this.getIcon(), this.getText());
    return `Button variant: ${this.variant}, Color: ${this.color}, Size: ${this.size}, Disabled: ${this.disabled}, Text: ${this.getText()}, Icon:${this.getIcon()}`;
  }

  create(): HTMLButtonElement {
    const button = document.createElement("button");
    const icon = document.createElement("img");
    const wrapper = document.createElement("div");
    const wrapperforicon = document.createElement("div");
    button.className = `flex justify-center items-center content-center ${this.getTailwindClasses()}`;
    wrapper.className = "flex min-h-[20px] flex-row gap-x-[6px] content-center"; // wrapper for the text and icon,
    wrapperforicon.className = "w-6 h-6 content-center";
    const iconPath = this.getIcon();
    const text = this.getText();
    if (iconPath) {
      // if not null
      icon.src = iconPath;
      icon.alt = iconPath === btn_add ? "add" : iconPath === btn_expd ? "expand" : "icon";
      wrapperforicon.appendChild(icon);
      wrapper.appendChild(wrapperforicon);
    }

    wrapper.appendChild(document.createTextNode(text));
    button.appendChild(wrapper);
    return button;
  }

  getTailwindClasses(): string {
    const variantClasses = this.getVariant();
    const sizeClasses = this.getSize();
    return `${variantClasses} ${sizeClasses}`;
  }

  getColor(): string {
    // the color converted should be a string xxx-xxx
    if (this.color && typeof this.color === "string" && this.color !== "blue" && this.color !== "grey" && this.color !== "red") {
      let array: string[] = [];
      if (this.color.includes("-")) {
        array = this.color.split("-");
      } else array.push(this.color);
      if (array.length > 1) {
        return JSON.stringify([{ first: array[0] }, { last: array[1] }]);
      } else {
        return JSON.stringify([{ first: array[0] }, { last: array[0] }]);
      }
    }
    // first if will return the json typed of string
    switch (this.color) {
      case "blue":
        return JSON.stringify([{ first: "#4090FF" }, { last: "#0279F3" }]);
      case "grey":
        return JSON.stringify([{ first: "#F3F4F6" }, { last: "#F3F4F6" }]);
      case "red":
        return JSON.stringify([{ first: "#F7525F" }, { last: "#F7525F" }]);
      default:
        return JSON.stringify([{ first: "#4090FF" }, { last: "#0279F3" }]);
    }
  }

  getVariant(): string {
    // you have to have color before you call variant
    if (this.color) {
      let first: string; //from color
      let textfirst: string; // text color
      let outlinefirst: string; // outline color
      let last: string; // to color
      const color = this.getColor();
      console.log(color); // Better visibility for debugging
      const array = JSON.parse(color);
      console.log(JSON.stringify(array[0].first)); // Better visibility for debugging

      if (array.length > 1) {
        first = `from-[${array[0].first}]`;
        console.log(first);
        last = `to-[${array[1].last}]`;
        textfirst = `text-[${array[0].first}]`;
        outlinefirst = `outline outline-1 outline-[${array[0].first}]`;
      } else {
        first = `from-[${array[0].first}]`;
        console.log(first);
        last = `to-[${array[1].last}]`;
        textfirst = `text-[${array[0].first}]`;
        outlinefirst = `outline outline-1 outline-[${array[0].first}]`;
      }

      switch (this.variant) {
        case "filled":
          return `bg-gradient-to-r ${first} ${last} text-center text-[#ffffff] font-btn_weight rounded-[4px] font-btn`;
        case "vacant":
          return `bg-[#ffffff] text-center ${textfirst} ${outlinefirst} font-btn_weight rounded-[4px] font-btn`;
        case "dead":
          return "bg-[#ffffff] text-center text-[#485467] outline outline-1 outline-[#dadfe6] font-btn_weight rounded-[4px] font-btn";
        case "text":
          return `bg-transparent outline-none text-center ${textfirst} font-btn_weight rounded-[4px] font-btn`;
        case "error":
          return "bg-[#f7525f] text-center text-[#ffffff] font-btn_weight rounded-[4px] font-btn";
        case "error-vacant":
          return "bg-[#ffffff] text-center text-[#f7525f] outline outline-1 outline-[#f7525F] font-btn_weight rounded-[4px] font-btn";
        default:
          return "bg-gradient-to-r from-[#4090ff] to-[#0279f3] text-center text-[#FFFFFF] font-btn_weight rounded-[4px] font-btn";
      }
    } else return "";
  }

  getSize(): string {
    switch (this.size) {
      case "xxs":
        return "px-2 py-1 text-xs";
      case "xs":
        return "px-3 py-2 text-sm";
      case "s":
        return "w-btn_s h-btn_s";
      case "m":
        return "w-btn_m h-btn_m";
      case "l":
        return "w-btn_l h-btn_l";
      case "xl":
        return "px-10 py-6 text-2xl";
      case "xxl":
        return "px-12 py-8 text-3xl";
      default:
        return "w-btn_m h-btn_m";
    }
  }
}
export default mainButton;
