import { useState } from "react"
import illustrationThankYou from "./images/illustration-thank-you.svg"
import iconStar from "./images/icon-star.svg"

export function App(){
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleAlterarNotaAvaliacao(nota){
    setNotaAvaliacao(nota)

    console.log(nota)
  }

  function handleSubmit(){
    if (notaAvaliacao !== 0){
      setSubmited(true)
      return
    }

    alert("Please, choose a rate button!")

  }

  return (
    <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass">
      {submited === false ? (
        <>
          <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
            <img src={iconStar} alt="" />
          </div>
  
          <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>
  
          <p className="text-light-grey text-sm leading-1 mb-6">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
  
          <div className="flex justify-between mb-6">
            <input type="button" value={1} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus: text-white" onClick={() => handleAlterarNotaAvaliacao(1)} />
            <input type="button" value={2} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus: text-white" onClick={() => handleAlterarNotaAvaliacao(2)} />
            <input type="button" value={3} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus: text-white" onClick={() => handleAlterarNotaAvaliacao(3)} />
            <input type="button" value={4} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus: text-white" onClick={() => handleAlterarNotaAvaliacao(4)} />
            <input type="button" value={5} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus: text-white" onClick={() => handleAlterarNotaAvaliacao(5)} />
          </div>
  
          <button className="bg-orange w-full py-3 uppercase text-sm rounded-3xl tracking-1 font-bold" onClick={handleSubmit}>
            Submit
          </button>
        </>
      ) : (
        <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass text-center">
         <img className="mx-auto mb-6" src={illustrationThankYou} alt="ilustration Thank You" />
         
         <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl">You selected {notaAvaliacao} out of 5!</p>

         <h1 className="text-2xl font-bold mb-2.5">Thank You!</h1>
  
          <p className="text-light-grey text-sm leading-1 mb-6">
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
          </p>
  
         
         </div>
      )}
    </div>
  )
}