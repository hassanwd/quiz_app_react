import React, { useState } from 'react'
import './App.css'
import Card from './card'

const App = () => {

  let count = 0 
  ;

  const [value, setValue] = useState(count)
  const [data, setData] = useState(
    [
      {
        question:"Which language run in a web browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct:"d",
      },
      {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
      },
      {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Select the tag of html:",
        a: "href",
        b: "img",
        c: "class",
        d: "none of the above",
        correct: "b",
    }
  ])

  const handleClick = () => {
    count = count + 1
    setValue(count)
    console.log(count ,value, "ddddddddd");
  }


  return (
    <div className='bg-light d-flex align-items-center justify-content-center flex-column main_Container'>
      <h1 className='text-center'>Quiz App</h1>
      <Card data={data} value={value} handleClick={handleClick} />
    </div>
   )
}

export default App