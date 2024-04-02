import React, { useState } from 'react'
import Question from './Question'
export function Java() 
{
    const javaQuestions=[
        {
            // qustion 1
                qnum:'1',
                ques: ' Memory occupied by INT is ?',
                opA: '1 bytes',
                opB: '2 bytes',
                opC: '8 bytes',
                opD: '4 bytes',
                ans: 'D'
        },
         // qustion 2
        {
           
                qnum: '2',
                ques: ' Memory occupied by CHAR is ?',
                opA: '1 bytes',
                opB: '8 bytes',
                opC: '4 bytes',
                opD: '2 bytes',
                ans: 'D'
        },
         // qustion 3
        {
           
                qnum: '3',
                ques: ' Memory occupied by LONG is ?',
                opA: '1 bytes',
                opB: '8 bytes',
                opC: '4 bytes',
                opD: '2 bytes',
                ans: 'B'
        },
         // qustion 4
        {
          
                qnum: '4',
                ques: ' Memory occupied by BYTE is ?',
                opA: '1 bytes',
                opB: '8 bytes',
                opC: '4 bytes',
                opD: '2 bytes',
                ans: 'A'
        }
    ]
    const [answers, setAnswers] = useState({})

    const handleSubmit = (event) => {
    }

    const handleOnChange = (questionNum, selectedOption) => {

    }

    
    return(
        <div>
            <h1>Java Assignement</h1>
            <form onSubmit={handleSubmit}>

                {
                    javaQuestions.map((question)=>{
                        return (
                            <Question
                            qnum={question.qnum}
                            ques={question.ques}
                            opA={question.opA}
                            opB={question.opB}
                            opC={question.opC}
                            opD={question.opD}
                            ans={question.ans}
                            onChange = {handleOnChange}
                            />
                        )
                        })
                    }
                    <br></br>
                    <button type='submit'> Get result</button>
            </form>
        </div>
    )
}
export function Sql()
{
    const SqlQuestion=[
        {
            // question 1
            qnum:'1',
            ques:' What does SQL stand for?',
            opA:'Structured Question Language',
            opB:'Sequential Query Language',
            opC:'Structured Query Language',
            opD:'Systematic Query Language',
            ans:'C'

        },
        // question 2
        {
            qnum:'2',
            ques:' Which SQL statement is used to update date in a database?',
            opA:'UPDATE',
            opB:'MODIFY',
            opC:'CHANGE',
            opD:'SET',
            ans:'A'
        },
        // question 3
        {
            qnum:'3',
            ques:' Which SQL clause is used to filter records based on specified conditions?',
            opA:'ORDER BY',
            opB:'HAVING',
            opC:'GROUP BY',
            opD:'WHERE',
            ans:'D'
        },
        // question 4
        {
            qnum:'4',
            ques:' Which SQL keyword is used to retrieve data from a database?',
            opA:'FETCH',
            opB:'SELECT',
            opC:'GET',
            opD:'RETRIEVE',
            ans:'B'
        },
        // question 5
        {
            qnum:'5',
            ques:' Which SQL command is used to delete records from a database?',
            opA:'REMOVE',
            opB:'DELETE',
            opC:'ERASE',
            opD:'PURGE',
            ans:'B'
        }
    ]
    return(
        <div>
            <h1>Sql Assignement</h1>
            <form>

                {
                    SqlQuestion.map((question)=>{
                        return (
                            <Question
                            qnum={question.qnum}
                            ques={question.ques}
                            opA={question.opA}
                            opB={question.opB}
                            opC={question.opC}
                            opD={question.opD}
                            ans={question.ans}

                            />
                        )
                    })
                }
                <br></br>
                <button type='submit'> Get result</button>
                </form>
                </div>
                        )
                    }
                export function Html()
                {
                    const HtmlQuestion=[
                        {
                            //question 1
                            qnum:'1',
                            ques:' What does HTML stand for?',
                            opA:'High Text Markup Language',
                            opB:'High Text Markup Language',
                            opC:'High-level Text Markup Language',
                            opD:'Hyperlinks and Text Markup Language',
                            ans:'B'
                        },
                        //question 2
                        {
                            qnum:'2',
                            ques:' What HTML tag is used to create a hyperlink?',
                            opA:'<link>',
                            opB:'<a>',
                            opC:'<href>',
                            opD:'<hyperlink>',
                            ans:'B'
                        },
                         //question 3
                         {
                            qnum:'3',
                            ques:' What is the correct HTML tag for inserting a line brake?',
                            opA:'<brake>',
                            opB:'<Ib>',
                            opC:'<br>',
                            opD:'<nextline>',
                            ans:'C'
                        },
                         //question 4
                         {
                            qnum:'4',
                            ques:' Which attribute is used to provide alternative text for an image in HTML?',
                            opA:'src',
                            opB:'alt',
                            opC:'title',
                            opD:'img',
                            ans:'B'
                        },
                         //question 5
                         {
                            qnum:'5',
                            ques:' Wich HTML element is used for creating an unordered list?',
                            opA:'<ul>',
                            opB:'<list>',
                            opC:'<ol>',
                            opD:'<unordered>',
                            ans:'A'
                        },   
                    ]
                    return(
                        <div>
                            <h1>HTML Assignement</h1>
                            <form>

                                {
                                    HtmlQuestion.map((question)=>{
                                        return(
                                            <Question
                                        qnum={question.qnum}
                                        ques={question.ques}
                                        opA={question.opA}
                                        opB={question.opB}
                                        opC={question.opC}
                                        opD={question.opD}
                                        ans={question.ans}
                />
                                        )
                                         } )

                                }
                                <br></br>
                                <button type='submit'>Get result</button>
                            </form>
                        </div>
                    )
                    
                }
            