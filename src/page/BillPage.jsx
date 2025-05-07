import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise= fetch("/bill.json").then((res)=> res.json());

const BillPage = () => {
    const categories = use(categoryPromise)

    return (
        <div>
            <h1 className='text-3xl  font-bold text-center py-6'>All Your Monthly Bills ({(categories.length)})</h1>

            <div className='*:shadow grid grid-cols-1 space-y-7 '>
                {
                    categories.map(categories=> <div className={"bg-amber-50 py-5 px-4 rounded-xl "} >
                        <ul className='lg:flex space-y-4 justify-between items-center'>
                            <li><img className='w-[70%] ' src={categories.icon} alt=""/></li>
                            <li className='font-bold'>{categories.organization}</li>
                            <li>{categories.bill_type}</li>
                            <li>Amount : {categories.amount}</li>
                            <li>Due Date: {categories.due_date}</li>
                            <li><NavLink
  to={`/categories/${categories.id}`}
  className="btn bg-[#CAF9B9] font-bold hover:bg-primary hover:text-amber-50"
>
  Details
</NavLink>
</li>
                        </ul>
                        <div>
                        {/* {categories.icon} */}
                    </div>
{/* 
                    <div>{categories.organization}</div> */}

                    {/* <NavLink key={categories.id} className={"btn bg-[#CAF9B9] font-bold hover:bg-primary hover:text-amber-50"} to={`/catagories/${categories.id}`}>Details</NavLink> */}

                    </div>)
                }
            </div>
        </div>
    );
};

export default BillPage;