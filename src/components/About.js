import React, { useState } from 'react'

export default function About() {
  const [myStyle,setMyStyle] = useState( 
    {
      color: 'black',
      backgroundColor: 'white'
    })
    
    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle=()=>
     {
        if(myStyle.color === 'black')
        {
          setMyStyle(  {
              color: 'white',
              backgroundColor: 'black',
              border: '1px solid white'
          })

          setBtnText("Enable Light Mode")
        }
        else
        {
          setMyStyle(  {
            color: 'black',
            backgroundColor: 'white'
        })
            
        setBtnText("Enable Dark Mode")
        }
     }  

  return (
    <div classNameName="container" style={myStyle}>
      <h1 className='my-3'>About </h1>
          <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About TextUtils
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
              A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Lower Case
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
              If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab. <br />
              this is an example of lower case.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Upper Case
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
              The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab. <br />
              THIS IS AN EXAMPLE OF UPPER CASE.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Remove Extra Spaces
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
              If you are wondering how to remove unwanted extra spaces from your text, this is exactly what the remove extra space option will allow you to do - it removes all the extra irrelavant spaces in your text. Simply copy the text and paste the text into the box above and select the ‘Remove Extra Spaces’ tab. 
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3 ">
        <button onClick={toggleStyle} type="button" class="btn btn-primary">{btntext}</button>
        </div>
        
    </div>
  )
}
