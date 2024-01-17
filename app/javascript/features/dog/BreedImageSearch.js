import React, { useState } from 'react';

export default function BreedImageSearch() {
  const [breed, setBreed] = useState('');
  const [images, setImages] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${e.target.value}`).then(response => {
      console.log(response);
      setImages([]);
    });
  }

  const renderedImages = images.map(image => (
    <img src={image} className="img-thumbnail" alt={image} />
  ));

  return (
    <div className="row">
      <div className="col">
        <h1>Search Dog Photos</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="breed" className="form-label">
              Breed:
            </label>
            <input
              type="search"
              className="form-control"
              id="dogBreed"
              value={breed}
              onChange={e => setBreed(e.target.value)}
            />
            <div id="breedHelp" className="form-text">
              {'message'}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="col">
        <p>Images goes here...</p>
        {renderedImages}
      </div>
    </div>
  );
}
