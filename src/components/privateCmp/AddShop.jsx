
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import apiClient  from '../../API/bootApi';


const AddShop = () => {

  const [shops, setShops] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentShop, setCurrentShop] = useState(null); // To hold the shop being edited

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    logo: '',
    contactno: '',
    image: '',
    shopId:''
  });

  useEffect(()=>{
    getAllShops();
  },[]);


  // Open modal for add or edit
  const openModal = (shop = null) => {
    setCurrentShop(shop);
    setFormData(
      shop || {
        name: '',
        address: '',
        logo: '',
        contactno: '',
        image: '',
        shopId:''
      }
    ); 
    setShowModal(true);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentShop) {
      await   apiClient.post(`/saveShop`, formData);   
     } else {
      await   apiClient.post(`/saveShop`, formData);
    }
    getAllShops();
    setShowModal(false);
  };


  function getAllShops(){
     apiClient.get('/getAllShop.json')
     .then((response) => {
      console.log(response);
        setShops(response.data.shops);  // Accessing the 'shops' array from the response
    })
    .catch((error) => {
      console.error('Error fetching shops:', error);
      
    })
    .finally(() => {
      
    });
  }

  const deleteShop = (shopId) =>{
    try {
      const response =  apiClient.delete(`/deleteShop/${shopId}`); // DELETE request
          setShops((prevShops) => prevShops.filter((shop) => shop.shopId !== shopId)); // Update UI
    
  } catch (error) {
      console.error(`Error deleting shop with ID ${shopId}:`, error);
  }
  }

  return (
    <div>
      <h1 className='text-center'>My Shops</h1>

      {/* Add Shop Button */}
      <button className="btn btn-primary mb-3" onClick={() => openModal()}> Add Shop </button>

      {/* Shop List */}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop, index) => (
            <tr key={shop.shopId}>
              <td>{index + 1}</td>
              <td>{shop.name}</td>
              <td>{shop.address}</td>
              <td>{shop.contactno}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => openModal(shop)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={ () => deleteShop(shop.shopId) }>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="shopModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="shopModalLabel">
                  {currentShop ? 'Edit Shop' : 'Add Shop'}
                </h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)} ></button>
              </div>
              <div className="modal-body">
                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Shop Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="logo" className="form-label">Logo URL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="logo"
                      name="logo"
                      value={formData.logo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactno" className="form-label">Contact Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactno"
                      name="contactno"
                      value={formData.contactno}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="image"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 " style={{textAlign:'center'}}>
                  <button type="submit" className="btn btn-primary">{currentShop ? 'Update Shop' : 'Save Shop'} </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );

}
export default AddShop;