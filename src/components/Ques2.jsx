import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='border-b border-gray-300 p-4'>
            <div className='flex justify-between items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <h1 className='text-lg font-semibold'>{title}</h1>
                <IoIosArrowDown className={`transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </div>
            {isOpen && <p className='mt-2 text-gray-700'>{content}</p>}
        </div>
    );
};

const Ques2 = () => {
    return (
        <div className='bg-green-200 p-6 rounded-lg shadow-lg'>
        <h1 className='text-4xl px-4 py-2 text-center'>Question 2 : Accordion</h1>
            <AccordionItem 
                title='HTML' 
                content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto exercitationem sequi sapiente facilis quo.'
            />
            <AccordionItem 
                title='PYTHON' 
                content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto exercitationem sequi sapiente facilis quo.'
            />
            <AccordionItem 
                title='JAVASCRIPT' 
                content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto exercitationem sequi sapiente facilis quo.'
            />
        </div>
    );
};

export default Ques2;
