import React from 'react'
import './card.css'

const card = (props) => {

    const res = props.data[props.value]

  return (
    <div className='bg-dark text-white main_Quiz'>
        <div className="quiz-header">
      <h2 id="question">{res.question}</h2>
        <ul>
            <li>
            <input type="radio" name="answer" id="a" className="answer" />
            <label for="a" id="a_text">{res.a}</label>
            </li>

            <li>
            <input type="radio" name="answer" id="b" className="answer" />
            <label for="b" id="b_text">{res.b}</label>
            </li>

            <li>
            <input type="radio" name="answer" id="c" className="answer" />
            <label for="c" id="c_text">{res.c}</label>
            </li>

            <li>
            <input type="radio" name="answer" id="d" className="answer" />
            <label for="d" id="d_text">{res.d}</label>
            </li>
        </ul>
    </div>
        <button onClick={props.handleClick} className="btn-light p-2 submit">Submit</button>
    
    </div>
  )
}

export default card