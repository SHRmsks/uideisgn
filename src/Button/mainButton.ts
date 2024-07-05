
class mainButton {
  public variant: "filled" | "vacant" | "dead" | "text";
  public color: "blue" | "green" | "yellow";
  public size: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
  public disabled: boolean;
  constructor(variant: "filled" | "vacant" | "dead" | "text", colors: "blue" | "green" | "yellow", sizes: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl", disabled: boolean) {
    this.variant = variant;
    this.color = colors;
    this.size = sizes;
    this.disabled = disabled;
  }
  getDetails(): string {
    return `Button variant: ${this.variant}, Color: ${this.color}, Size: ${this.size}, Disabled: ${this.disabled}`;
  }
  create(): HTMLButtonElement {
    const button = document.createElement("button");
    button.className = `${this.getTailwindClasses()}`;
    return button;
  }
  getTailwindClasses(): string {
    const variantClasses = this.getVariant();
    const colorClasses = this.getColor();
    const sizeClasses = this.getSize();
    return `${variantClasses} ${colorClasses} ${sizeClasses}`;
  }

  getVariant(): string {
    switch (this.variant) {
      case "filled":
        return "bg-gradient-to-r from-[#4090FF] to-[#0279F3] text-[#FFFFFF]";
      case "vacant":
        return "bg-[#FFFFFF] text-[#0872DC] outline-1 outline-[#0872DC]";
      case "dead":
        return "bg-[#FFFFFF]] text-[#48494a] outline-1 outline-[#48494a]";
      case "text":
        return "bg-transparent outline-none text-[#0872DC]";
      default:
        return "bg-gradient-to-r from-[#4090FF] to-[#0279F3] text-[#FFFFFF";
    }
  }
  getColor(): string {
    switch (this.color) {
      case "blue":
        return "bg-gradient-to-r from-[#4090FF] to-[#0279F3]";
      case "yellow":
        return "bg-gradient-to-r from-[#4090FF] to-[#0279F3]";
      case "green":
        return "bg-gradient-to-r from-[#4090FF] to-[#0279F3]";
      default:
        return "bg-gradient-to-r from-[#4090FF] to-[#0279F3]";
    }
  }
  getSize(): string {
    switch (this.size) {
      case "xxs":
        return "px-2 py-1 text-xs";
      case "xs":
        return "px-3 py-2 text-sm";
      case "s":
        return "w-s h-s";
      case "m":
        return "w-m h-m";
      case "l":
        return "w-l h-l";
      case "xl":
        return "px-10 py-6 text-2xl";
      case "xxl":
        return "px-12 py-8 text-3xl";
      default:
        return "w-m h-m";
    }
  }
}
export default mainButton;
