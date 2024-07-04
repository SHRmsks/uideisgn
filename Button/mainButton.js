"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../tailwind.css");
// import "/css/mainButton.css";
var mainButton = /** @class */ (function () {
    function mainButton(variant, colors, sizes, disabled) {
        this.variant = variant;
        this.color = colors;
        this.size = sizes;
        this.disabled = disabled;
    }
    mainButton.prototype.getDetails = function () {
        return "Button variant: ".concat(this.variant, ", Color: ").concat(this.color, ", Size: ").concat(this.size, ", Disabled: ").concat(this.disabled);
    };
    mainButton.prototype.create = function () {
        var button = document.createElement("button");
        button.className = "UI-btn";
        button.setAttribute("variant", this.variant);
        button.setAttribute("color", this.color);
        button.setAttribute("size", this.size);
        button.disabled = this.disabled;
        return button;
    };
    mainButton.prototype.getTailwindClasses = function () {
        var variantClasses = this.getVariant();
        var colorClasses = this.getColor();
        var sizeClasses = this.getSize();
        return "".concat(variantClasses, " ").concat(colorClasses, " ").concat(sizeClasses);
    };
    mainButton.prototype.getVariant = function () {
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
                return "filled";
        }
    };
    mainButton.prototype.getColor = function () {
        switch (this.color) {
            case "blue":
                return "bg-gradient-to-r from-[#4090FF] to-[#0279F3]";
            case "yellow":
                return "bg-gradient-to-r from-[#4090FF] to-[#0279F3]";
            case "green":
                return "bg-gradient-to-r from-[#4090FF] to-[#0279F3]";
            default:
                return "blue";
        }
    };
    mainButton.prototype.getSize = function () {
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
                return "m";
        }
    };
    return mainButton;
}());
exports.default = mainButton;
