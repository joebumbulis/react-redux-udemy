import React from 'react';
import ReactDom from 'react-dom';

//create React component
const App = () => {
  const buttonText = { text: 'Click Me'};
  const labelText = 'Enter Name:'
  const style = {backgroundColor: 'blue', color: 'white'};

  return (
    <div>
      <label className="label" htmlFor="name">{labelText}</label>
      <input style={{border: '1px solid red'}} id="name" type='text'/>
      <button style={style}>{buttonText.text}</button>
    </div>
    );
}

//take react component and show it on the screen
ReactDom.render(
  <App />,
  document.querySelector('#root')
)
