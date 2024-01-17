import React, { useState } from 'react';

export default function BreedImageSearch() {
  const [breed, setBreed] = useState('');
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/dogs/search.json?breed=${breed}`)
      .then(response => response.json())
      .then(json => {
        if (json.isError) {
          setErrorMessage(json.errorMessage);
          setImages([]);
        } else if (json.isSuccess) {
          setImages(json.images);
          setErrorMessage('');
        }
      });
  }

  const renderedImages = images.map(image => (
    <img key={image} src={image} className="img-thumbnail" alt={image} />
  ));

  return (
    <div className="row">
      <div id="1" className="col">
        <h1>Search Photo By Dog Breed(Aysnc with ReactJS)</h1>
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
            <div id="breedHelp" className="form-text text-danger">
              {errorMessage}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div id="2" className="col">
        {renderedImages}
      </div>
    </div>
  );
}
