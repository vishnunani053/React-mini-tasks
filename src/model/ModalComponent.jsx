/* import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';
import axios from 'axios';

const ModalComponent = () => {
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
        contentLabel="ModalComponent Modal"
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default ModalComponent;
 */

// import React, { useState } from 'react';
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Input,
//   Label,
//   Form,
//   FormGroup,
// } from 'reactstrap';
// import PropTypes from 'prop-types';

// function ModalComponent(props) {
//   const { className } = props;
//   const [modal, setModal] = useState(true); // Set initial state to true
//   const [backdrop, setBackdrop] = useState(true);
//   const [keyboard, setKeyboard] = useState(true);

//   const toggle = () => setModal(!modal);

//   const changeBackdrop = (e) => {
//     let { value } = e.target;
//     if (value !== 'static') {
//       value = JSON.parse(value);
//     }
//     setBackdrop(value);
//   };

//   const changeKeyboard = (e) => {
//     setKeyboard(e.currentTarget.checked);
//   };

//   return (
//     <div>
//       <Form inline onSubmit={(e) => e.preventDefault()}>
//         <FormGroup>
//           <Label for="backdrop">Backdrop value</Label>{' '}
//           <Input
//             type="select"
//             name="backdrop"
//             id="backdrop"
//             onChange={changeBackdrop}
//           >
//             <option value="true">true</option>
//             <option value="false">false</option>
//             <option value="static">&ldquo;static&ldquo;</option>
//           </Input>
//         </FormGroup>
//         <FormGroup className="mx-2" check>
//           <Label check>
//             <Input
//               type="checkbox"
//               checked={keyboard}
//               onChange={changeKeyboard}
//             />{' '}
//             Keyboard
//           </Label>
//         </FormGroup>{' '}
//         <Button color="danger" onClick={toggle}>
//           Click Me
//         </Button>
//       </Form>
//       <Modal
//         isOpen={modal}
//         toggle={toggle}
//         className={className}
//         backdrop={backdrop}
//         keyboard={keyboard}
//       >
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={toggle}>
//             Do Something
//           </Button>{' '}
//           <Button color="secondary" onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

// ModalComponent.propTypes = {
//   className: PropTypes.string,
// };

// export default ModalComponent;


import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';

function Example(props) {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  useEffect(() => {
    // This code will run when the component mounts
    setModal(true);

    // This return statement is equivalent to componentWillUnmount
    return () => {
      // This code will run when the component unmounts
      setModal(false);
    };
  }, []);

  const toggle = () => setModal(!modal);

  const changeBackdrop = (e) => {
    let { value } = e.target;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  };

  const changeKeyboard = (e) => {
    setKeyboard(e.currentTarget.checked);
  };

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="backdrop">Backdrop value</Label>{' '}
          <Input
            type="select"
            name="backdrop"
            id="backdrop"
            onChange={changeBackdrop}
          >
            <option value="true">true</option>
            <option value="false">false</option>
            <option value="static">&ldquo;static&ldquo;</option>
          </Input>
        </FormGroup>
        <FormGroup className="mx-2" check>
          <Label check>
            <Input
              type="checkbox"
              checked={keyboard}
              onChange={changeKeyboard}
            />{' '}
            Keyboard
          </Label>
        </FormGroup>{' '}
        <Button color="danger" onClick={toggle}>
          Click Me
        </Button>
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        backdrop={backdrop}
        keyboard={keyboard}
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

Example.propTypes = {
  className: PropTypes.string,
};

export default Example;
