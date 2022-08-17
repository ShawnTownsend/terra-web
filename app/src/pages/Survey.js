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

