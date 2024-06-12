import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';

export default function singleQuestion(question, answer) {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <>
            <div className='border border-white-300 rounded-lg bg-white'>
                <article className=' flex items-center justify-between p-4 lg:p-6'>
                    <h2 className='cursos-pointer'
                    onClick={()=> setShowAnswer(!showAnswer)}> {question}</h2>
                    <ul>
                        {!showAnswer && <li> <button onClick={()=> setShowAnswer(true)}>
                            <BsPlus />
                        </button></li>}
                        {showAnswer &&  <li> <button onClick={()=> setShowAnswer(false)}>
                            <FiMinus />
                        </button></li>}
                       
                    </ul>
                </article>
                <article className={'${showAnswer && "border-t border-gray-400 p-4 lg:p-6}'}>
                    {showAnswer && <p>{answer} </p>}
                </article>
            </div>
        </>
    )
}
