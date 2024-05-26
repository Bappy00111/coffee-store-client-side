import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const App = () => {
  const data = useLoaderData();
  // console.log(data);
  const handleDelet = (_id) => {
    console.log("detetId", _id);
    Swal.fire({
      title: "Are you sure!",
      text: "Your Coffe hasbeen Deleted",
      icon: "warning",
      confirmButtonText: "Cool",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="bg-slate-100">
      <h1>Add Coffe :</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10 py-5">
        {data.map((d) => (
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={d.photo} alt="Movie" />
            </figure>
            <div className="card-body flex">
              <div className="flex justify-between ">
                <div>
                  <h2 className="card-title"> Name : {d.name}</h2>
                  <p>Quantity : {d.quantity}</p>
                  <p>Supplier : {d.supplier}</p>
                  <p>Test : {d.taste}</p>
                </div>
                <div className=" space-y-4">
                  <button className="btn btn-primary">View</button> <br />
                  <Link to={`/upDateCoffe/${d._id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link> <br />
                  <button
                    onClick={() => handleDelet(d._id)}
                    className="btn btn-primary"
                  >
                    Delet
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
