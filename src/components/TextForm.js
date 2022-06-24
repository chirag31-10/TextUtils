import React, {useState} from 'react'

export default function TextForm(props) {
    

    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick =()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const handleExtraSpace =()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces Removed!", "success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const [text,setText]= useState('');
    
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'? 'white': '#042743' }} >
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'? 'white': '#13466e', color: props.mode==='dark'? 'white': '#042743' }}    id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 btn-dark" onClick={handleUpClick}>Convert to UPPERCASE</button>
            
            <button disabled={text.length===0} className="btn btn-primary btn-dark mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>

            <button disabled={text.length===0} className="btn btn-primary mx-2  my-1 btn-dark" onClick={handleClearClick}>Clear Text</button>

            <button disabled={text.length===0} className="btn btn-primary mx-2  my-1 btn-dark" onClick={handleCopy}>Copy Text</button>

            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 btn-dark" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        
        </div>
            
        <div className="container my-4" style={{color: props.mode==='dark'? 'white': '#042743' }}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}

