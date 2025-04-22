import React from 'react';

const RandomQA = () => {
    return (
        <div className='my-3 md:my-5'>
            <div className='my-2 md:mb-5'>
                <h3 className='text-3xl font-medium text-center'>FAQs on LMS</h3>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title font-semibold">Can library staff add and update book details on the website?</div>
                <div className="collapse-content text-sm">Yes, the system allows authorized users to add new books, categorize them, and update existing book information, such as title, author, and availability status.</div>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">How does the system manage borrowed and returned books?</div>
                <div className="collapse-content text-sm">The system tracks every transaction, including when a book is borrowed and returned. This ensures accurate records of book circulation and helps maintain inventory control.</div>
            </div>
            <div className="collapse bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title font-semibold">Is the website interface easy to use for both staff and students?</div>
                <div className="collapse-content text-sm">Absolutely. The system is designed with a user-friendly interface to make navigation simple and operations smooth for all users, whether they are managing the library or accessing resources.</div>
            </div>
        </div>
    );
};

export default RandomQA;