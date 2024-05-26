import React from "react";
import Swal from "sweetalert2";

const AddCoffe = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const catagore = form.catagore.value;
    const detels = form.detels.value;
    const photo = form.photo.value;
    const newCoffe ={name,quantity,supplier,taste,catagore,detels,photo}
    console.log(newCoffe)

    fetch('http://localhost:5000/coffe',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newCoffe)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          title: 'success!',
          text: 'Added product',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })

  }
  return (
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
                  placeholder="Photo Url"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffe;
