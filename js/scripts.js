class Generator {
    constructor(horizontal, horizontalRef, vertical, verticalRef, blur,
        blurRef, spread, spreadRef, color, colorRef, opacity, opacityRef,
        previewBox, rule, webkitRule, mozRule, insetCheckbox, shapeSelect) {

        this.horizontal = horizontal;
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef;
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread = spread;
        this.spreadRef = spreadRef;
        this.color = color;
        this.colorRef = colorRef;
        this.opacity = opacity;
        this.opacityRef = opacityRef;
        this.previewBox = previewBox;
        this.rule = rule;
        this.webkitRule = webkitRule;
        this.mozRule = mozRule;
        this.insetCheckbox = insetCheckbox;
        this.shapeSelect = shapeSelect; // Adicionado shapeSelect no construtor
    }

    initialize() {
        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.spreadRef.value = this.spread.value;
        this.colorRef.value = this.color.value;
        this.blurRef.value = this.blur.value;
        this.opacityRef.value = this.opacity.value;
        this.inset = this.insetCheckbox.checked ? 'inset' : '';
        this.applyRule();
        this.showRule();
        this.updateShape(this.shapeSelect.value);  // Chamada para updateShape dentro de initialize
    }

    applyRule() {
        const rgbaColor = this.convertColorToRGBA(this.colorRef.value, this.opacityRef.value);
        const insetValue = this.insetCheckbox.checked ? 'inset' : '';
        this.previewBox.style.boxShadow = `${insetValue} ${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px ${rgbaColor}`;
        this.currentRule = this.previewBox.style.boxShadow;
    }

    showRule() {
        this.rule.innerText = this.currentRule;
        this.webkitRule.innerText = this.currentRule;
        this.mozRule.innerText = this.currentRule;
    }

    updateValue(type, value) {
        switch (type) {
            case "horizontal":
                this.horizontalRef.value = value;
                this.horizontal.value = value; // Atualiza a barra de controle
                break;
            case "vertical":
                this.verticalRef.value = value;
                this.vertical.value = value;
                break;
            case "blur":
                this.blurRef.value = value;
                this.blur.value = value;
                break;
            case "spread":
                this.spreadRef.value = value;
                this.spread.value = value;
                break;
            case "color":
                this.colorRef.value = value;
                this.color.value = value;
                break;
            case "opacity":
                this.opacityRef.value = value;
                this.opacity.value = value;
                break;
            case "inset":
                this.inset = value ? 'inset' : '';
                break;
        }
        this.applyRule();
        this.showRule();
    }

    convertColorToRGBA(hex, opacity) {
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    updateShape(shape) {
        this.previewBox.classList.remove("square", "circle", "diamond");  // Remove qualquer forma anterior
        switch (shape) {
            case "square":
                this.previewBox.classList.add("square");
                break;
            case "circle":
                this.previewBox.classList.add("circle");
                break;
            case "diamond":
                this.previewBox.classList.add("diamond");
                break;
            default:
                this.previewBox.classList.add("rectangle");
                break;
        }
    }
}

// Seleção de elementos
const shapeSelect = document.querySelector("#shape");
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");
const color = document.querySelector("#color");
const colorRef = document.querySelector("#color-value");
const opacity = document.querySelector("#opacity");
const opacityRef = document.querySelector("#opacity-value");
const insetCheckbox = document.querySelector("#inset");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const boxShadow = new Generator(horizontal, horizontalRef, vertical, verticalRef, blur,
    blurRef, spread, spreadRef, color, colorRef, opacity, opacityRef, previewBox, rule, webkitRule, mozRule, insetCheckbox, shapeSelect);
boxShadow.initialize();

// Eventos
horizontal.addEventListener("input", (e) => {
    const value = e.target.value;
    boxShadow.updateValue("horizontal", value);
});

vertical.addEventListener("input", (e) => {
    const value = e.target.value;
    boxShadow.updateValue("vertical", value);
});

spread.addEventListener("input", (e) => {
    const value = e.target.value;
    boxShadow.updateValue("spread", value);
});

blur.addEventListener("input", (e) => {
    const value = e.target.value;
    boxShadow.updateValue("blur", value);
});

color.addEventListener("input", (e) => {
    const value = e.target.value;
    boxShadow.updateValue("color", value);
});

opacity.addEventListener("input", (e) => {
    const value = e.target.value;
    boxShadow.updateValue("opacity", value);
});

insetCheckbox.addEventListener("change", (e) => {
    const value = e.target.checked;
    boxShadow.updateValue("inset", value);
});

shapeSelect.addEventListener("change", (e) => {
    const value = e.target.value;
    boxShadow.updateShape(value); // Usando a instância do Generator para chamar updateShape
});

// Atualizar valor das barras ao digitar no campo de texto
horizontalRef.addEventListener("input", (e) => {
    const value = e.target.value;
    horizontal.value = value;  // Atualiza o slider
    boxShadow.updateValue("horizontal", value);
});

verticalRef.addEventListener("input", (e) => {
    const value = e.target.value;
    vertical.value = value;
    boxShadow.updateValue("vertical", value);
});

blurRef.addEventListener("input", (e) => {
    const value = e.target.value;
    blur.value = value;
    boxShadow.updateValue("blur", value);
});

spreadRef.addEventListener("input", (e) => {
    const value = e.target.value;
    spread.value = value;
    boxShadow.updateValue("spread", value);
});

opacityRef.addEventListener("input", (e) => {
    const value = e.target.value;
    opacity.value = value;
    boxShadow.updateValue("opacity", value);
});
