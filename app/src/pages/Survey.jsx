import { Title } from "../components/Title"

function Survey1() {
    return(
        <>
        <div className="w-full bg-indigo-500 h-12">
            <Title variant="h1">
                Hi, Roy!
            </Title>
            <Title variant='h2'>
            Before we begin, we'd like to ask a few questions on food waste.
            </Title>
            <p>
            How often do you go grocery shopping?
            </p>
            <button>
                Once a day
            </button>
            <button>
                Once a week
            </button>
            <button>
                Once a month
            </button>
            <button>
                Once a year
            </button>
            <button type='submit'>
                Next
            </button>
        </div>

        </>
    )
}

function Survey2() {
    return(
        <>
        <div className="w-full bg-indigo-500 h-12">Survey 2</div>
        </>
    )
}

function Survey3() {
    return(
        <>
        <div className="w-full bg-indigo-500 h-12">Survey 3</div>
        </>
    )
}

function Survey4() {
    return(
        <>
        <div className="w-full bg-indigo-500 h-12">Survey 4</div>
        </>
    )
}



export function Survey() {
    return(
        <>
        <ul class="steps steps-vertical lg:steps-horizontal">
        <li class="step step-primary"></li>
        <li class="step"></li>
        <li class="step"></li>
        <li class="step"></li>
        </ul>
        <Survey1/>
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

