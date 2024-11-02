import React from 'react'

export default function About(props) {


    return (
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#333a45" }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>TextUtils - Simplify Your Text Editing</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>TextUtils</strong> is a versatile web application designed to make text manipulation quick and easy. It provides essential tools to streamline your workflow, allowing you to transform text effortlessly. With TextUtils, you can convert all selected text to uppercase or lowercase with a single click, making it easier to adjust text formatting on the go. If you need to start fresh, the "Remove Text" feature clears all input text instantly, while the "Copy Text" tool allows you to save your modified text to the clipboard for quick access. Additionally, the "Remove Extra Spaces" feature cleans up unnecessary spaces, helping to maintain a polished and organized text structure. More features will be added soon to enhance the text editing experience even further!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#333a45" }} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to Us</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>TextUtils</strong> is completely free, allowing anyone to access powerful text manipulation tools without any cost. Whether you’re a student, writer, developer, or simply someone who needs to modify text frequently, TextUtils provides a user-friendly and efficient platform. With no hidden fees or sign-ups required, you can quickly edit and transform your text as needed. Simply open the app, utilize the tools, and enjoy an enhanced text editing experience anytime, anywhere!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#333a45" }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>TextUtils</strong> is fully browser-compatible, ensuring a seamless experience across all major web browsers, including Chrome, Firefox, Safari, and Edge. No downloads or installations are needed—simply open TextUtils in your preferred browser and start editing your text immediately. Whether you’re on a desktop, tablet, or mobile device, TextUtils adapts to provide a smooth, responsive interface, making text manipulation easy and accessible wherever you are.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
