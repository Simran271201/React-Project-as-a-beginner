import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase();
        setText(newText)
        
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
       
    }

    const handleOnChange = (event)=>{
        
        setText(event.target.value)
    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
    }
    const handleAltrClick = ()=>{
        let n=0;
        while(n<text.length){
        let newText = text.charAt(n+1);
        n++;
        console.log(setText(newText.toUpperCase()));
        }
    }
    const mystyle = {
      color: "black",
      backgroundColor: "rgb(50, 12, 238)",
      padding: "8px",
      fontFamily: "Arial"
    };

    const [text, setText] = useState(''); 
    
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'aliceblue'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" style= {mystyle} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" style= {mystyle} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1"  style= {mystyle} onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1"  style= {mystyle} onClick={handleAltrClick}>Alternate Character</button>        
            </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}