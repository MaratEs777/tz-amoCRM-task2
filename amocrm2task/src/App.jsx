import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import PageBody from "./components/PageBody/PageBody";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      <PageBody />
    </div>
  );
}

export default App;
