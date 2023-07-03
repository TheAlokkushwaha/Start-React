import React, {useState} from 'react'

export default function TextForm(props) {

  const handelUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handelLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handelCapitalizedClick = ()=>{
    let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    setText(newText)
  }

  const handelClearClick = ()=>{
    let newText = '';
    setText(newText)
  }

  const handelCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handelOnChange = (event) =>{
    setText(event.target.value)
  }

  const [text, setText] = useState(''); 
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
        </div>
  
        <button className="btn btn-primary mx-2" onClick={handelUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handelLoClick}>Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handelCapitalizedClick}>Capitalized Case</button>
        <button className="btn btn-primary mx-2" onClick={handelCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handelClearClick}>Clear</button>
    </div>
    <div className='container my-3'>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p style={{color: props.mode === 'dark'?'white':'black'}}>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p style={{color: props.mode === 'dark'?'white':'black'}}>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
    </div>
    </>
  )
}
