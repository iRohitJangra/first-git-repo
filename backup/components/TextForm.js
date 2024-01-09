import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        console.log('text changed');
        setText(event.target.value);
    }
    const handleUpClick = () => {
        if (text.trim() === "") {
            props.showAlert("Enter text first", "warning");
        } else {
            console.log('up click');
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Upper Case", "success");
        }
    }
    const handleClearText = () => {
        setText("");
        props.showAlert("Text cleared", "success");
    }
    // const [previewStyle, setPreviewStyle] = useState({
    //     border: '1px solid black'
    // })
    // let previewStyle = {
    //     border: '1px solid #ced4da'
    // }
    // let circle = {
    //     width: '100px', /* Adjust the width and height as needed */
    //     height: '100px',
    //     backgroundColor: '#3498db',
    //     borderRadius: '50%'
    // }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id="textbox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleClearText}>Clear Text</button>
            </div>
            {/* <div className="circle mx-3 my-3 " style={circle}></div> */}
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{text.trim() === "" ? 0 : text.split(" ").length} words and {text.length}</p>
                {/* <p>Will take {0.008 * text.split(" ").length } Minutes to read</p> */}
                <h2>Preview</h2>
                {/* <div className="container " style={previewStyle} > */}
                <p>{text.length > 0 ? text : 'Enter Text to get preview here'}</p>
                {/* </div> */}
            </div>
        </>

    )
}
