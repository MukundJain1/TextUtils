import React, {useState } from 'react'

export default function TextForms(props) {

    const [text, setText] = useState("");
    const handleOnClick = () => {
        props.showAlert("Successfully! converted into upper case", "success");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelcClick = () => {
        let newText = text.toLowerCase();
        props.showAlert("Successfully! converted into lower case", "success");
        setText(newText);
    }
    // important to set the text while typing in textarea
    const handleOnChange = (event) => {
        console.log("on Change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard", "success")
    }
    const handExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handClearText = () => {
        props.showAlert("Successfully! clear the text", "danger");
        setText('');
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? "white" : "black" }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    {/* onchange is important below in order to make changes or setting the state (text) in textarea as it is setting the entered text with the help of setText(event.target.value) */}
                    <textarea className="form-control text" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#333a45' : 'white', color: props.mode === 'light' ? "black" : "white" }}></textarea>
                </div>
                <button type="submit" disabled={text.trim()===""} onClick={handleOnClick} className="btn btn-primary mx-1 my-1 but">Uppercase converter</button>
                <button type="submit" disabled={text.trim()===""} onClick={handlelcClick} className="btn btn-primary mx-1 my-1 but">Lowercase converter</button>
                <button type="submit" disabled={text.trim()===""} onClick={handleCopy} className="btn btn-primary mx-1 my-1 but">Copy Text</button>
                <button type="submit" disabled={text.trim()===""} onClick={handExtraSpace} className="btn btn-primary mx-1 my-1 but">Remove extra space</button>
                <button type="submit" disabled={text.trim()===""}led onClick={handClearText} className="btn btn-primary mx-1 my-1 but">Remove Text</button>
            </div>

            <div className="container" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? "black" : "white" }}>
                <h3 className='mt-4 '>
                    Your text includes the following numbere of words and characters(excluding space)
                </h3>

                {/* inside split regex is written which is used for checking space and next line words if any word has written */}

                <p className='my-2'>
                    {text.split(/\s+/).filter(word => word.trim() !== "").length} word and {text.length} characters

                </p>
                <p>
                    <b className='my-2'>Avg time to read</b> <br />
                    { text === '' ? 0 : 0.008 * text.split(/\s/).length} minutes to read
                </p>
                <h3>
                    Preview
                </h3>
                <p className="text-justify my-2">
                    {text === '' ? "Nothing to preview" : text}
                </p>
            </div>
        </>

    )
}
