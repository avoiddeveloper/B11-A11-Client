import React from 'react';
import stuff1 from '../../assets/stuffs/stuff1.jpg';
import stuff2 from '../../assets/stuffs/stuff2.jpg';
import stuff3 from '../../assets/stuffs/stuff3.jpg';
import stuff4 from '../../assets/stuffs/stuff4.jpg';
import stuff5 from '../../assets/stuffs/stuff5.jpg';

const LibraryStaff = () => {
    return (
        <div className='my-3 md:my-5'>
            <div className='my-2 md:mb-5'>
                <h3 className='text-3xl font-medium text-center'>Our Stuffs</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-4'>
                {/* Card-1 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src={stuff1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Michael
                            <div className="badge badge-secondary">Lib.</div>
                        </h2>
                    </div>
                </div>

                {/* Card-2 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src={stuff2}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Emily
                            <div className="badge badge-secondary">Asst. Lib.</div>
                        </h2>
                    </div>
                </div>

                {/* Card-3 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src={stuff3}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Sophia
                            <div className="badge badge-secondary">Lib. Mgr.</div>
                        </h2>
                    </div>
                </div>

                {/* Card-4 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src={stuff4}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Olivia
                            <div className="badge badge-secondary">Circ. Mgr</div>
                        </h2>
                    </div>
                </div>

                {/* Card-5 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src={stuff5}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            James
                            <div className="badge badge-secondary">Lib. Tech.</div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LibraryStaff;