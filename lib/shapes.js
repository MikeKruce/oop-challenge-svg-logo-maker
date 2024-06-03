import { JSDOM } from 'jsdom';
const dom = new JSDOM();

class Circle {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  generateSVG() {
    const svg = dom.window.document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const circle = dom.window.document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "150");
    circle.setAttribute("cy", "100");
    circle.setAttribute("r", "50");
    circle.setAttribute("stroke", this.color);
    circle.setAttribute("fill", "none");
    svg.appendChild(circle);

    const text = dom.window.document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "140");
    text.setAttribute("y", "110");
    text.setAttribute("fill", this.color);
    text.textContent = this.text;
    svg.appendChild(text);

    return svg.outerHTML;
  }
}

class Square {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  generateSVG() {
    const svg = dom.window.document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const rect = dom.window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", "50");
    rect.setAttribute("y", "50");
    rect.setAttribute("width", "100");
    rect.setAttribute("height", "100");
    rect.setAttribute("stroke", this.color);
    rect.setAttribute("fill", "none");
    svg.appendChild(rect);

    const text = dom.window.document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "90");
    text.setAttribute("y", "110");
    text.setAttribute("fill", this.color);
    text.textContent = this.text;
    svg.appendChild(text);

    return svg.outerHTML;
  }
}

class Triangle {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  generateSVG() {
    const svg = dom.window.document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const polygon = dom.window.document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", "100,10 40,180 190,60");
    polygon.setAttribute("stroke", this.color);
    polygon.setAttribute("fill", "none");
    svg.appendChild(polygon);

    const text = dom.window.document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "80");
    text.setAttribute("y", "100");
    text.setAttribute("fill", this.color);
    text.textContent = this.text;
    svg.appendChild(text);

    return svg.outerHTML;
  }
}


export { Circle, Square, Triangle};