import React from "react";
import { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("The Text Has Been Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("The Text Has Been Converted to LowerCase", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("The Text Has Been Copied", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  function eraseText() {
    setText("");
    props.showAlert("The Text Has Been Cleared", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Has Been Removed", "success");
  };
  const getWordCount = () => {
    // Trim the text to remove leading/trailing white spaces
    const trimmedText = text.trim();

    // If the trimmed text is empty, return 0
    if (trimmedText === "") {
      return 0;
    }

    // Split the trimmed text into words and return the length
    return trimmedText.split(/\s+/).length;
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#13466e",
            }}
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={handleUpClick}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleLoClick}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={eraseText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {getWordCount()} Words and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes of Reading{" "}
        </p>
      </div>
    </>
  );
}
