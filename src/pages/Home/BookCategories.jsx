import React from 'react';
import cat1 from '../../assets/bookCategory/fiction.png';
import cat2 from '../../assets/bookCategory/science.jpg';
import cat3 from '../../assets/bookCategory/business.jpg';
import cat4 from '../../assets/bookCategory/cooking.jpg';

const BookCategories = () => {
    return (
        <div className='my-3 md:my-5'>
            <div className='my-2 md:mb-5'>
                <h3 className='text-3xl font-medium text-center'>Book Category</h3>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>

                {/* Card-1 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={cat1}
                            alt="Fiction"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fiction</h2>
                        <p>Fiction creates imaginary worlds, reflecting human emotions, ideas, and experiences.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View All</button>
                        </div>
                    </div>
                </div>

                {/* Card-2 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={cat2}
                            alt="science"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Science</h2>
                        <p>Science explores natural phenomena through observation, experimentation, analysis, and discovery.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View All</button>
                        </div>
                    </div>
                </div>

                {/* Card-3 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={cat3}
                            alt="business"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Business</h2>
                        <p>Business involves creating, managing, and growing value through goods and services.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View All</button>
                        </div>
                    </div>
                </div>

                {/* Card-4 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={cat4}
                            alt="cooking"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cooking</h2>
                        <p>Cooking combines ingredients with techniques to create flavorful, nourishing meals daily.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">View All</button>
                        </div>
                    </div>
                </div>            </div>
        </div>
    );
};

export default BookCategories;