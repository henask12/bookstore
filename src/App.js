import React from 'react';
import Navigation from './components/Navigation';

const App = () => (
  <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-sm">
    <div className="p-8">
      <div className="bg-white border border-white-100 rounded-lg shadow-sm">
        <Navigation />
      </div>
    </div>
  </div>
);

export default App;
