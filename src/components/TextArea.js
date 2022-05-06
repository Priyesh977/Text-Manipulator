import React, {useState} from 'react'

export default function TextArea(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Changed to UpperCase", 'success')
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Changed to LowerCase", 'success')
    }
    
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", 'success')
    }
    
    const handleCopy = ()=>{
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", 'success')
    }
    
    const handleExtraSpaces = ()=>{
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", 'success')
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState("")

    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1 className="my-2">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled = {text.length===0} className="mx-1 mb-2 btn btn-primary" onClick={handleUpClick}>Change to UpperCase</button>
            <button disabled = {text.length===0} className="mx-1 mb-2 btn btn-primary" onClick={handleLoClick}>Change to LowerCase</button>
            <button disabled = {text.length===0} className="mx-1 mb-2 btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            <button disabled = {text.length===0} className="mx-1 mb-2 btn btn-primary" onClick={handleCopy}>Copy Text</button>
            <button disabled = {text.length===0} className="mx-1 mb-2 btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1 className="my-3">Your Text Preview</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <h2 className="my-3">Text Preview:</h2>
            <p>{text.length>0?text:"Nothing to preview here!"}</p>
        </div>
        </>
    )
}
