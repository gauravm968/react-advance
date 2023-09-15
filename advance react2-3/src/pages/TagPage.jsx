import React from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TagPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
        <div>
            <Header />
            <div>
                <button onClick={navigate(-1)}
                    className='rounded-md border border-gray-400 px-3 py-1 text-sm'>Back</button>
                <h2>
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}
