
import React, { useState } from 'react'//usestate is hook in react

export default function TextForm(props) {
  const handleUpClicktoupper = () => {
    let newText = Text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase","success")
    document.title="Textutils - Uppercase"
  }
  const handleUpClicktolower = () => {
    let newText = Text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase","success")
    document.title="Textutils - Lowercase"
  }
  const handleClear = () => {
    let newText = " ";
    setText(newText)
    props.showAlert("Text is clear","success")
  }
  const CopyToClipboard = () => {
    const textarea = document.getElementById('mybox');
    navigator.clipboard.writeText(textarea.value)
    props.showAlert("Text copied at clipboard","success")
    
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [Text, setText] = useState("")//to get value from user and store

  const handleToSentenceCase = () => {
    if (Text) {
      const lowercaseText = Text.toLowerCase();
      const sentences = lowercaseText.split('. ');
      const sentenceCaseText = sentences.map((sentence) => {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
      }).join('. ');
      setText(sentenceCaseText);
      props.showAlert("Text converted into sentence case","success")
    }
    document.title="Textutils - Sentence Case"
  }
  return (
    <>
      <div className="constainer">
        <div className="mb-3 ">
          <h1 className='mt-5 mb-4'>{props.heading}</h1>
          <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}} id='mybox' rows="8" onChange={handleOnChange} value={Text}></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClicktoupper}>UpperCase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClicktolower}>LowerCase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={CopyToClipboard}>Copy</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToSentenceCase} >Sentence case</button>
      </div>
<div className="container my-3">
  <h1>Your Text Summary</h1>
  <p>{Text.trim().split(/\s+/).filter(word => word !== "").length} words, {Text.trim().length} characters</p>
  <p>{0.008 * Text.trim().split(/\s+/).filter(word => word !== "").length} Minutes to Read</p>
  <h2>Preview</h2>
  <p>{Text.length > 0 ? Text : "Nothing to Preview"}</p>
</div>

    </>
  )
}

