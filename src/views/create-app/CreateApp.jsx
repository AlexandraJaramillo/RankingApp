import {React, useState} from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Form from "../../components/app-form/Form";

export default function CreateApp() {
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <Navbar />
      <h2>Agregar app</h2>
      <Form />
            
      <div>
        {/* <input type="file" 
        
        onChange={(e => {
            uploadImage(e)
        })} />
        <img src={baseImage} alt="" /> */}
      </div>
    </>
  );
}
