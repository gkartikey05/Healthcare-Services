import React from "react";

const ServiceList = ({ services, deleteService, setEditingService }) => {
  return (
    <div className="container mt-4">
      <h2>Available Services</h2>
      <ul className="list-group">
        {services.map((service) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={service.id}
          >
            <div>
              <h5 className="text-primary">{service.name}</h5>
              <p className="text-muted">{service.description}</p>
              <span className="badge badge-success">${service.price}</span>
            </div>
            <div>
              <button
                className="btn btn-outline-primary mx-2"
                onClick={() => setEditingService(service)}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteService(service.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
