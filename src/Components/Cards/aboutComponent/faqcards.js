import React ,{useState} from 'react'
import singleQuestion from './singleQuestion';
import {questions} from './qaf';
export default function faqcards() {
 const [cards] =  useState(questions);
       
  return (
    <>
<section className='max-w-xl mw-auto py-20 px-4'>
  <h1 className=' text-center uppercase tracking-widest font-bold'>
    Why whould you choose us ?
  </h1>

  <section className='grid grid-cols-1 gap-8'>
    { cards.map((card,index)=>
    <singleQuestion  {...card } key={index }/>
    )}
  </section>
</section>
    </>
  )
}
