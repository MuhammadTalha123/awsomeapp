import React from 'react';
import ReactDom from 'react-dom';

const fName = "Talha Bajwa";
const lName = "Saab";
const luckyNum = 10;

ReactDom.render(
  <>
    <h1>{`My name is ${fName} ${lName}`}.</h1>
    <h2>{`My lucky number is ${luckyNum}`}. </h2>
    <h1>Netflix Series</h1>
    <ol>
      <li>Ertugral ghazi</li>
      <li>Usman ghazi</li>
      <li>Hmari Khani</li>
      <li>Pyar Lafzon Mein Kahan</li>
      <li>Team One</li>
    </ol>
  </>,
  document.getElementById('root')
);