import "./App.css";
import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isloading, setisLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=30084056-ec17b87209b1059a8581f1785&q=${term}&image_type=photo&pretty=true`
    ).then(res=>res.json()).then(data =>{
      setImages(data.hits)
      setisLoading(false);
    })
  }, [term]);

  return (
    <div className="container mx-auto ">
      <ImageSearch searchText={(text)=> setTerm(text)}/>
      {!isloading &&images.length === 0 && <h1 className=" text-5xl text-center mx-auto mt-32">No images found</h1> }
      { isloading? <h1 className=" text-6xl text-center mx-auto mt-32">Loading...</h1> :<div className="grid grid-cols-1 ml-5 sm:ml-0 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map(image =>(
          <ImageCard id={image.id} image={image} />
        ))

        }
      </div>}
        
    </div>
  );
}

export default App
