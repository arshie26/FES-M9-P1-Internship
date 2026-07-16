import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  
  const [collections, setCollections] = useState([]);

  async function getCollections(){
    console.log("Fetching collections");
    let collectionRequest = await fetch("https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections");
    let collectionRequestJSON = await collectionRequest.json();
    //console.log(collectionRequestJSON);
    setCollections(collectionRequestJSON);
  }

  useEffect(() => {
    setTimeout(() => {
      getCollections();
    }, 2000);
    
  }, [])
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home collections = {collections} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author" element={<Author />} />
        <Route path="/item-details/:id" element={<ItemDetails getCollections = {getCollections} collections = {collections} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
