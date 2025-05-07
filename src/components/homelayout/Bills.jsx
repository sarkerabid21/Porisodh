import React, { Suspense } from 'react';
import BillPage from '../../page/BillPage';

const Bills = () => {
    return (
        <div className='bg-gradient-to-b from-gray-100 to-green-200 py-6'>
            {/* <h1 className='text-3xl font-bold text-center py-6'>All Your Monthly Bills </h1> */}
            <div className='w-11/12 mx-auto my-4  grid'>
        <Suspense>
        <BillPage fallback={<span className="loading loading-bars loading-xl"></span>}></BillPage>
        </Suspense>
        </div>
        </div>
        
    );
};

export default Bills;