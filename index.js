import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Square, Triangle } from './lib/shapes.js';

inquirer.prompt([
  {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: function(value) {
          if (value.length <= 3) return true;
          return 'Please enter up to three characters.';
      }
  },
  {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text color:',
      // Add validation for color input...
  },
  {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'square', 'triangle']
  },
  {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape color:',
      // Add validation for color input...
  }
]).then(answers => {
  let shape;
  if (answers.shape === 'circle') {
      shape = new Circle(answers.shapeColor, answers.text);
  } else if (answers.shape === 'square') {
      shape = new Square(answers.shapeColor, answers.text);
  } else if (answers.shape === 'triangle') {
      shape = new Triangle(answers.shapeColor, answers.text);
  }
  const svg = shape.generateSVG();
  fs.writeFileSync('logo.svg', svg);
  console.log('Generated logo.svg');
});