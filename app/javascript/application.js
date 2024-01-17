// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import React from 'react';
import { createRoot } from 'react-dom/client';
import BreedImageSearch from './features/dog/BreedImageSearch';
import './controllers';
import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('app'));
  root.render(<BreedImageSearch />);
});
