import React from 'react';

const BookForm = () => (
  <div className="book-form w-full mt-5">
    <h1 className="text-lg">ADD NEW BOOK</h1>
    <form className="flex items-center justify-between gap-x-5">
      <div className="form-group w-[55%]">
        <input type="text" className="form-control" placeholder="Book title" />
      </div>

      <div className="form-group w-[25%]">
        <select className="form-control">
          <option selected value="">Author</option>
          <option value="Suzanne Collins">Suzanne Collins</option>
          <option value="Frank Herbert">Frank Herbert</option>
        </select>
      </div>

      <button type="submit" className="submit-btn border-2 border-black px-5 py-1 w-[20%]">ADD BOOK</button>
    </form>
  </div>
);

export default BookForm;
