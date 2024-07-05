class mainButton {
    setText(text) {
        this.text = text;
        return true;
    }
    getText() {
        return this.text;
    }
    constructor(variant, colors, sizes, disabled, text) {
        this.text = "";
        this.variant = variant;
        this.color = colors;
        this.size = sizes;
        this.disabled = disabled;
        this.setText(text);
    }
    getDetails() {
        return `Button variant: ${this.variant}, Color: ${this.color}, Size: ${this.size}, Disabled: ${this.disabled}, Text: ${this.getText()}`;
    }
    create() {
        const button = document.createElement("button");
        button.textContent = this.getText();
        button.className = `${this.getTailwindClasses()}`;
        return button;
    }
    getTailwindClasses() {
        const variantClasses = this.getVariant();
        const colorClasses = this.getColor();
        const sizeClasses = this.getSize();
        return `${variantClasses} ${colorClasses} ${sizeClasses}`;
    }
    getVariant() {
        switch (this.variant) {
            case "filled":
                return "bg-gradient-to-r from-[#4090FF] to-[#0279F3] text-center text-[#FFFFFF] font-btn_weight rounded-[4px] font-btn";
            case "vacant":
                return "bg-[#241111] text-center text-[#0872DC] outline-1 outline-[#0872DC] font-btn_weight rounded-[4px] font-btn";
            case "dead":
                return "bg-[#FFFFFF]] text-center text-[#48494a] outline-1 outline-[#48494a] font-btn_weight rounded-[4px] font-btn";
            case "text":
                return "bg-transparent outline-none text-center text-[#0872DC] font-btn_weight rounded-[4px] font-btn";
            default:
                return "bg-gradient-to-r from-[#4090FF] to-[#0279F3] text-center text-[#FFFFFF] font-btn_weight rounded-[4px] font-btn";
        }
    }
    getColor() {
        switch (this.color) {
            case "blue":
                return "bg-[#241111]";
            case "yellow":
                return "bg-gradient-to-r from-[#4090FF] to-[#0279F3]";
            case "green":
                return "bg-gradient-to-r from-[#4090FF] to-[#0279F3]";
            default:
                return "bg-[#241111]";
        }
    }
    getSize() {
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
