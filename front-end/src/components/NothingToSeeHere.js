import React from "react";
export default function NothingToSeeHere() {
  return (
    <div className="card border-secondary mb-3 text-center mx-auto" style={{ width: '30rem'}}>
      <div className="card-header">
        <h2>No Reservation Found</h2>
      </div>
      <div className="card-body text-left">
        <p className="card-text">Reservation ID: </p>
        <p className="card-text">Name: </p>
        <p className="card-text">Mobile Number: </p>
        <p className="card-text">Date: </p>
        <p className="card-text">Time: </p>
        <p className="card-text">People: </p>
        <p className="card-text">Status: </p>
      </div>
    </div>
  );
}
