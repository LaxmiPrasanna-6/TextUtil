import React,{useState} from 'react'

function TextForm(props) {
  const [text,setText]=useState("")
  function Uppercase()
  {
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("success","converted to uppercase")
  }
  function Lowercase()
  {
    let newText=text.toLowerCase()
    setText(newText)
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
    navigator.clipboard.writeText(text)
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
            <label htmlFor="exampleFormControlTextarea1" >Example text to Analyze</label>
            <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={Uppercase}>Uppercase</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={Lowercase}>Lowercase</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy </button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={extraSpaces}>removeSpaces</button>
    </div>
    <div className='container'>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} letters </p>
    </div>
    </>

  )
}

export default TextForm