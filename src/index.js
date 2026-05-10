import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Mesh from './Mesh';
import Doorbell from './Doorbell';
import Sensing from './Sensing';
import Visual from './Visual';

const root = ReactDOM.createRoot(document.getElementById('root'));
const path = window.location.pathname.replace(/\/+$|^$/g, '').toLowerCase();

if (
  path === '/mesh' ||
  path === '/mesh.html' ||
  path === '/cybersecurity-mesh' ||
  path === '/cybersecurity-mesh.html'
) {
  root.render(<Mesh />);
} else if (path === '/doorbell' || path === '/doorbell.html') {
  root.render(<Doorbell />);
} else if (path === '/sensing' || path === '/sensing.html') {
  root.render(<Sensing />);
} else if (path === '/visual' || path === '/visual.html' || path === '/website-design') {
  root.render(<Visual />);
} else {
  root.render(<App />);
}
