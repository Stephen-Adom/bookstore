import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [bookStatus, setBookStatus] = useState('');

  useEffect(() => {
    setBookStatus(status);
  }, [status]);

  return (
    <div>
      <button type="button" className="px-3 py-1 border-2" onClick={() => dispatch(checkStatus())}>CHECK STATUS</button>
      <h1 className="text-4xl text-center">{bookStatus}</h1>
    </div>
  );
};

export default Categories;
