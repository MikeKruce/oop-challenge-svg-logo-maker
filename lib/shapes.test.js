const { Circle } = require('./shapes');

test('Circle generates a circle SVG element with the correct attributes', () => {
    const circle = new Circle('#FF0000', 'ABC');
    const svg = circle.generateSVG();
    expect(svg).toContain('<circle cx="150" cy="100" r="50" stroke="#FF0000" fill="none"></circle>');
    expect(svg).toContain('<text x="140" y="110" fill="#FF0000">ABC</text>');
});

const { Square, Triangle } = require('./shapes');

test('Square generates a square SVG element with the correct attributes', () => {
    const square = new Square('#00FF00', 'DEF');
    const svg = square.generateSVG();
    expect(svg).toContain('<rect x="50" y="50" width="100" height="100" stroke="#00FF00" fill="none"></rect>');
    expect(svg).toContain('<text x="90" y="110" fill="#00FF00">DEF</text>');
});

test('Triangle generates a triangle SVG element with the correct attributes', () => {
    const triangle = new Triangle('#0000FF', 'GHI');
    const svg = triangle.generateSVG();
    expect(svg).toContain('<polygon points="100,10 40,180 190,60" stroke="#0000FF" fill="none"></polygon>');
    expect(svg).toContain('<text x="80" y="100" fill="#0000FF">GHI</text>');
});