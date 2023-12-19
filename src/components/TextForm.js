import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("")
    const handleUpclick =()=>{
        let newText =text.toUpperCase();
        setText(newText)
    }
    const handleClearClick =()=>{
        let newText =''
        setText(newText)
    }
    const handleLwclick =()=>{
        let newText =text.toLocaleLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=> {
        
        setText(event.target.value)
    }
    const handlecopy =() => {
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter Text Here" id="myBox" rows="8"></textarea>
  </div>

  <button className="btn btn-primary mx-2 my-1" onClick={handleUpclick}> Convert to upper case</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleLwclick}> Convert to Lower case</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy Text</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>You Text summary</h2>
      <h4>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length} Characters</h4>
      <h5  >Average Reading Minutes is {0.010 * text.split(" ").length } </h5>
      <h3 className='mt-3' >Preview Text</h3>
      <p  >{text}</p>
    </div>
    </>
    
  )
}




