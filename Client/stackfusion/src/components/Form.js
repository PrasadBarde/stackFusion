import React, { useState } from "react";
import "../styles/form.css";
import Name from "./name";
import Email from "./email";
import Gender from "./gender";
import Phone from "./phone";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Submit from "./submit";
import emailjs from "emailjs-com";

function Form() {
  //  console.log(props);
  const [displayName, setDisplayName] = useState("");
  const [allData, setAllData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });
  const [error, setError] = useState({
    Name: "",
    Email: "",
    Gender: "",
    Phone: "",
  });
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allData);

    let Arr = [];
    for (let i in error) {
      Arr.push(error[i]);
    }
    console.log(Arr.join(""));
    if (Arr.join("") == "") {
      emailjs
        .sendForm(
          "service_lgftjfp",
          "template_dwo3dj9",
          e.target,
          "fid81S4DJc0sxEwWv"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
      // console.log(displayName)

      alert(`
    Hello ${displayName}
    Your Form submitted sucessfuly.........
    check your mail for confirmation`);
    axios({
      method: "post",
      url: "https://fusion-0u4a.onrender.com/addnewproperty",
      data: allData,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("error in registering property");
      });
    navigate("/allForms");
    } else {
      alert("can't submmit form (fill the correct details first)");
    }
    
  };

  return (
    <>
      <h1>User Application Form</h1>
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <Name
          setError={setError}
          error={error}
          setAllData={setAllData}
          allData={allData}
        />
        <Email
          setError={setError}
          error={error}
          setDisplayName={setDisplayName}
          displayName={displayName}
          setAllData={setAllData}
          allData={allData}
        />
        <Gender
          setError={setError}
          error={error}
          setAllData={setAllData}
          allData={allData}
        />
        <Phone
          setError={setError}
          error={error}
          setAllData={setAllData}
          allData={allData}
        />

        <Submit error={error} displayName={displayName} />
      </form>
    </>
  );
}
export default Form;
