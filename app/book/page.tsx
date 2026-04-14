"use client";

import Navbar from "@/components/Navbar";
import { useFetchBooks } from "./-mutation";
import { BookType } from "./type";

const Book = () => {
  const { data, isLoading, isSuccess } = useFetchBooks();

  console.log(`INI DATA VARIABLE ${JSON.stringify(data?.data)}`);

  return (
    <>
      <Navbar />
      {isLoading && (
        <div className="w-12 h-12 border-4 border-gray-600 border-t-transparent rounded-full animate-spin my-2 mx-auto"></div>
      )}
      {isSuccess && (
        <div className="container">
          <h2 className="text-3xl text-center my-3">Book List</h2>
          <div className="flex justify-center">
            <input
              className="w-100 border-2 border-gray-300 rounded mr-3"
              type="text"
              name="search"
              id="search"
              placeholder="Search book..."
            />
            <button className="bg-gray-300 text-white">Search book</button>
          </div>
          <div className="flex justify-center mt-4">
            <table className="responsive border">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data)
                  ? data?.map((d: BookType, i: number) => (
                      <tr key={d.id}>
                        <td className="border">(i + 1)</td>
                        <td className="border">(d.title)</td>
                        <td className="border">(d.category_name)</td>
                        <td className="border">(d.author)</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Book;
