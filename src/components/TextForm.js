import React,{useState} from 'react'

function TextForm(props) {
  const [text,setText]=useState("")
  function Uppercase()
  {
    let newText=text.toUpperCase()
    setText(newText)
    console.log("You have clicked on upoper case"+text)
    props.showAlert("success","converted to uppercase")
  }
  function Lowercase()
  {
    let newText=text.toLowerCase()
    setText(newText)
    console.log("You have clicked on upoper case"+text)
    props.showAlert("success","converted to Lowercase")
  }
  function handleOnchange(event)
  {
    setText(event.target.value)
    console.log("abcss")
  }
  function clearText()
  {
    let newText=" "
    setText(newText)
    props.showAlert("success","Cleared text")
  }
  function copyText()
  {
    var xyz=document.getElementById("exampleFormControlTextarea1")
    xyz.select()
    navigator.clipboard.writeText(xyz.value)
  }
  function extraSpaces()
  {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("success","Removed Extra Space")
  }
  return (
    <>
    <div className='container'>
        <form>
            <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
        <button type="button" className="btn btn-primary mx-1" onClick={Uppercase}>Uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={Lowercase}>Lowercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
        <button type="button" className="btn btn-primary mx-1" onClick={copyText}>Copy </button>
        <button type="button" className="btn btn-primary mx-1" onClick={extraSpaces}>removeSpaces</button>
    </div>
    <div className='container my-2'>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} letters </p>
    </div>
    </>

  )
}

export default TextForm