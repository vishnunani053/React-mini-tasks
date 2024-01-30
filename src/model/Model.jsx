import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';
import axios from 'axios';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  
  const [data, setData] = useState([]);

  const columns = data.length > 0 ? Object.keys(data[0]).map(key => ({
    name: key,
    selector: key,
    sortable: true,
  })) : [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getcalls');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 
  const openModal = rowData => {
    const statusValue = null;

    const buttonA = <button onClick={handleButtonAClick}>Button A</button>;



    if (statusValue === null) {
      setModalContent(<> {buttonA} <button onClick={handleButtonClick1}>Button 1</button></>);
      
    }

    if (statusValue === 'Avoid') {
      setModalContent(<> {buttonA} <button onClick={handleButtonClick1}>Button Avoid</button></>);
      
    }
    
  

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick1 = () => {
    // Handle Button 1 click
    console.log('Button 1 clicked');
    closeModal();
  };

  const handleButtonClick2 = () => {
    // Handle Button 2 click
    console.log('Button 2 clicked');
    closeModal();
  };

  const handleButtonAClick = () => {
    // Handle Button 2 click
    console.log('Button 2 clicked');
    closeModal();
  };

  return (
    <div>
      <DataTable
        title="Your Data Table"
        columns={columns}
        data={data}
        pagination
        onRowClicked={openModal}
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default App;
