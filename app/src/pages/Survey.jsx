import * as React from 'react'
import { Title } from '../components/Title'
import { useForm } from 'react-hook-form'

function Survey1({ register, getValues, setStep }) {
   const [error, setError] = React.useState('')
   const handleClick = () => {
      if (
         getValues('onceADay') ||
         getValues('onceAWeek') ||
         getValues('onceAMonth') ||
         getValues('onceAYear')
      ) {
         //TODO check that ONLY 1 is selected, not 2+
         //TODO display error is 2+ selected
         setError('You selected more than 1')
         setStep(2)
      }

      // TODO display an error message is none are selected
      setError('You did not select a option')
   }

   return (
      <>
         <div className="">
            <Title variant="h1">Hi, Roy!</Title>
            <Title variant="h2">
               Before we begin, we'd like to ask a few questions on food waste.
            </Title>
            <p>How often do you go grocery shopping?</p>
            <div className="form-control">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     Once a day
                  </span>
                  <input
                     type="checkbox"
                     {...register('onceADay')}
                     className="sr-only"
                  />
               </label>
            </div>
            <div className="form-control mt-4">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     Once a week
                  </span>
                  <input
                     type="checkbox"
                     {...register('onceAWeek')}
                     className="sr-only"
                  />
               </label>
            </div>
            <div className="form-control mt-4">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     Once a month
                  </span>
                  <input
                     type="checkbox"
                     {...register('onceAMonth')}
                     className="sr-only"
                  />
               </label>
            </div>
            <div className="form-control mt-4">
               <label className="border-[1px] border-black py-2 px-5 rounded-full">
                  <span className="text-[1.125rem] font-semibold flex items-center justify-center">
                     Once a year
                  </span>
                  <input
                     type="checkbox"
                     {...register('onceAYear')}
                     className="sr-only"
                  />
               </label>
            </div>
            {error && (
               <div>
                  <p className="text-red">{error}</p>{' '}
               </div>
            )}
            <button type="button" onClick={handleClick}>
               Next
            </button>
         </div>
      </>
   )
}

function Survey2() {
   return (
      <>
         <div className="">Survey 2</div>
      </>
   )
}

function Survey3() {
   return (
      <>
         <div className="">Survey 3</div>
      </>
   )
}

function Survey4() {
   return (
      <>
         <div className="">Survey 4</div>
      </>
   )
}

export function Survey() {
   const [step, setStep] = React.useState(1)
   const {
      register,
      handleSubmit,
      watch,
      getValues,
      formState: { errors },
   } = useForm()

   const onSubmit = data => console.log(data)

   return (
      <>
         <ul className="steps steps-horizontal">
            <li className="step step-primary"></li>
            <li className="step"></li>
            <li className="step"></li>
            <li className="step"></li>
         </ul>
         <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
               <Survey1
                  register={register}
                  getValues={getValues}
                  setStep={setStep}
               />
            )}
            {step === 2 && (
               <Survey2
                  register={register}
                  getValues={getValues}
                  setStep={setStep}
               />
            )}

            <button type="submit">Save</button>
         </form>
      </>
   )
}

// <input type = checkbox>
// const questionArray = [
//     //[0]
//     {
//         question: `Which quality attracted you the most to “swipe right?”"`,
//         answers: [
//             "Friends oriented",
//             "Pet lover",
//             "Outdoorsy",
//             "Humorous"
//         ],
//     },
//     {
//         question: "What is the most important to you in a partner?",
//         answers: [
//             "Family oriented",
//             "Passionate about personal hobbies",
//             "Loves to travel",
//             "Open to trying new things"
//         ],
//     },
//     {
//         question: "Which best describes you?",
//         answers: [
//             "Music lover",
//             "Netflix & Chill-er",
//             "Foodie",
//             "Planning the next hike"
//         ],
//     },
// ];

// <h2>
//                     {questionArray[page - 1].question}
//                 </h2>
//                 <form className="questions">
//                     {questionArray[page - 1].answers.map((answers, index) =>
//                         <div key={index}>
//                             <input
//                                 id={index}
//                                 type="checkbox"
//                                 value={checkList[page - 1]}
//                                 checked = {checkList[page - 1][index]}
//                                 name ={answers}

//                                 onChange={(event) => {
//                                     handleCheck(event, index)
//                                 }}
//                             />
//                             <label htmlFor={index}> {answers} </label>
//                         </div>
//                     )}
//                     {page < 3 ? (
//                     <button
//                             type="button"
//                             onClick={handleNext}
//                             disabled={checked.length === 0}
//                         >Next
//                         </button>
//                     ) : (
//                         <button
//                             type="button"
//                             onClick={handleSubmit}
//                             disabled={checked.length === 0}
//                         >Submit
//                         </button>
//                     )}
//                 </form>
