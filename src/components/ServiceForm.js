import React, { useState, useEffect } from "react";

const ServiceForm = ({
  addService,
  updateService,
  editingService,
  setEditingService,
}) => {
  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (editingService) {
      setService(editingService);
    }
  }, [editingService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) return;

    if (editingService) {
      updateService(service);
      setEditingService(null);
    } else {
      addService(service);
    }

    setService({ name: "", description: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="container mb-4">
      <div className="form-group">
        <label htmlFor="name">Service Name</label>
        <input
          id="name"
          type="text"
          className="form-control"
          value={service.name}
          onChange={(e) => setService({ ...service, name: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Service Description</label>
        <input
          id="description"
          type="text"
          className="form-control"
          value={service.description}
          onChange={(e) =>
            setService({ ...service, description: e.target.value })
          }
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          className="form-control"
          value={service.price}
          onChange={(e) => setService({ ...service, price: e.target.value })}
          required
        />
      </div>

      <button type="submit" className="btn btn-success mt-3">
        {editingService ? "Update Service" : "Add Service"}
      </button>
    </form>
  );
};

export default ServiceForm;
