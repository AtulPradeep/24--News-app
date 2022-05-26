import "./App.css";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import Axios from "axios";
import News from "./components/News/News";
import MainNews from "./components/Mainnews/MainNews";
import { uuid } from "uuidv4";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //State values
  const [datas, setDatas] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [sports, setSports] = useState("science");
  const [category, setCategory] = useState("category");

  //Did not use .env file because API key was freely available and unrestricted use.Did not want to encapsulate.
  const API_KEY = "55b7adb6c1b04265a8d4e50cb146e8a5";
  //Fetching data from the API
  useEffect(() => {
    const getarticle = async () => {
      const res = await Axios.get(
        `https://newsapi.org/v2/top-headlines?${category}=${sports}&apiKey=${API_KEY}`
      ).catch((error) => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
      setDatas(res.data.articles);
      setTitle(res.data.articles[1].title);
      setImage(res.data.articles[1].urlToImage);
      setDescription(res.data.articles[1].description);
      setUrl(res.data.articles[1].url);
    };

    getarticle();
  }, [sports]);

  //Dynamicall changing the category
  const handle = (type) => {
    setSports(type);
  };
  //Dynamically changing the  categories on search
  const handleCategory = () => {
    setCategory("q");
  };

  return (
    <div className="App">
      <Header handle={handle} handlecategory={handleCategory}></Header>

      <div className="grid0">
        <MainNews
          key={uuid}
          title={title}
          image={image}
          description={description}
          url={url}
        ></MainNews>
      </div>

      <div className="grid">
        {datas.map(
          ({ title, description, url, urlToImage, content, publishedAT }) => (
            <News
              key={publishedAT}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
              content={content}
            ></News>
          )
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
