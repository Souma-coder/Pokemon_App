import React from "react";

export default function Pagination({ gotoNextPage, gotoPreviousPage }) {
  return (
    <div className="d-flex justify-content-between">
      {gotoPreviousPage && (
        <button
          className="rounded-3 bg-success border border-0 text-light p-2 fw-bold"
          onClick={gotoPreviousPage}
        >
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button
          className="rounded-3 bg-danger border border-0 text-light p-2 fw-bold"
          onClick={gotoNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
}
