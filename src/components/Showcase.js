import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
const Showcase = ({ data }) => {
  console.log(data);
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (imageURL) => {
    setSelectedImage(imageURL);
    setShow(true);
  };
  return (
    <>
      <div className="showcase-wrapper">
        {data.map((item, index) => (
          <div key={index} className="image" onClick={() => handleShow(item)}>
            <img src={item.largeImageURL} alt="" />
          </div>
        ))}
      </div>


      <Modal show={show} onHide={handleClose} backdrop="static" className='model-handle' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        {selectedImage && (
          <>
            <Modal.Body>
              <div className='model-data' >
                <div>

                  <img src={selectedImage.largeImageURL} alt="" />
                  <p>ID: {selectedImage.id}</p>
                </div>

                <div className='model-data-details'>
                  <h1>Information</h1>
                  <div> <h6>User_id</h6> <p>{selectedImage.user_id}</p> </div>
                  <div> <h6>Likes</h6><p>{selectedImage.likes}</p></div>
                  <div><h6>Type</h6><p>{selectedImage.type}</p></div>
                  <div> <h6>Views</h6><p>{selectedImage.views}</p></div>
                  <div> <h6>Downloads</h6><p>{selectedImage.downloads}</p></div>
                  <div> <h6>Comments</h6><p>{selectedImage.comments}</p></div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className='model-btn' style={{backgroundColor:"red"}} onClick={handleClose}>
                Close
              </Button>
              <Button className='model-btn' style={{backgroundColor:"green"}} href={selectedImage.previewURL}>
                Download
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  )
}

export default Showcase