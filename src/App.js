import React from 'react';
import Header from './component/header/index';
import Footer from './component/footer/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer header="Posts" desc="Click the button to render props" />
    </div>
  );
}

export default App;
