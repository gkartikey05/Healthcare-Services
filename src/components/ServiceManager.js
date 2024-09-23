import React, { useState } from "react";
import ServiceList from "./ServiceList";
import ServiceForm from "./ServiceForm";

const ServiceManager = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div>
      <ServiceForm
        addService={addService}
        updateService={updateService}
        editingService={editingService}
        setEditingService={setEditingService}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        setEditingService={setEditingService}
      />
    </div>
  );
};

export default ServiceManager;
