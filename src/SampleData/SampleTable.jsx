import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SampleTable = () => {
  const [sampleData, setSampleData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:4000/getcalls')
      .then(response => response.json())
      .then(data => setSampleData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to handle the action button click
  const handleAction = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  const toggle=()=>(!isModalOpen)

  // Function to close the modal
  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Sample Table</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map(item => (
            <tr key={item.id}>
              <td>{item._id}</td>
              <td>{item.productName}</td>
              <td>{item.statusValue}</td>
              <td>
                <Button color="primary" onClick={() => handleAction(item)}>
                  Action
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Reactstrap Modal */}
      <Modal isOpen={isModalOpen} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Item Details</ModalHeader>
        <ModalBody>
          {/* Display details about the selected item */}
          {selectedItem && (
            <div>
              <p>ID: {selectedItem._id}</p>
              <p>Name: {selectedItem.productName}</p>
              <p>Status: {selectedItem.statusValue}</p>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={closeModal}>
            Close
          </Button>&nbsp;&nbsp;

          <Button color="secondary" onClick={toggle}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SampleTable;
