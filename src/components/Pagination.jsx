import React from "react";
import Data from "./Data.json";
import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  return (
    <div className="mt-[100px]">
      <div className="flex justify-center items-center]">
        <table className="table">
          <thead>
            <th>ID</th>
            <th className="pl-[100px]">Name</th>
            <th className="pl-[50px]">Email</th>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.ID}</td>
                <td className="pl-[100px]">{d.Name}</td>
                <td className="pl-[100px]">{d.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className="mt-[30px] flex justify-center">
        <ul className="pagination flex items-center">
          <li className="page-item">
            <a
              href="#"
              className="page-link px-4 py-1 text-blue-700 font-medium text-2xl border-2"
              onClick={prePage}
            >
              Pre
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item px-4 py-2 border ${
                currentPage === n ? "active" : ""
              }`}
              key={i}
            >
              <a href="#" className="page-link" onClick={() => changCPage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              href="#"
              className="page-link px-4 py-1 text-blue-700 font-medium text-2xl border-2"
              onClick={nextPage}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default Pagination;
