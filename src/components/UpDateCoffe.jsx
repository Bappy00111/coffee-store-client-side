import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpDateCoffe = () => {
  const coffe = useLoaderData();
  console.log(coffe);
  const { name, quantity, supplier, taste, catagore, detels, photo,_id } = coffe;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const catagore = form.catagore.value;
    const detels = form.detels.value;
    const photo = form.photo.value;
    const upDataCoffe = {
      name,
      quantity,
      supplier,
      taste,
      catagore,
      detels,
      photo,
    };
    console.log(upDataCoffe);

    fetch(`http://localhost:5000/coffe/${_id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upDataCoffe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      });
  };
  return (
    <div>
      <h1>UpDate coffe :</h1>

      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content ">
          <div className="card  w-full  bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <div className="flex gap-5">
                <div>
                  <label className="label">
                    <span className="label-text">Coffe Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    defaultValue={name}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Availabel Quantity</span>
                  </label>
                  <input
                    name="quantity"
                    type="number"
                    defaultValue={quantity}
                    placeholder="Availabel Quantity"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input
                    name="supplier"
                    type="text"
                    defaultValue={supplier}
                    placeholder="supplier"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    name="taste"
                    type="text"
                    defaultValue={taste}
                    placeholder="text"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <label className="label">
                    <span className="label-text">Catagore</span>
                  </label>
                  <input
                    name="catagore"
                    type="text"
                    defaultValue={catagore}
                    placeholder="Catagore"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Detels</span>
                  </label>
                  <input
                    name="detels"
                    type="text"
                    defaultValue={detels}
                    placeholder="Detels"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    defaultValue={photo}
                    placeholder="Photo Url"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpDateCoffe;
