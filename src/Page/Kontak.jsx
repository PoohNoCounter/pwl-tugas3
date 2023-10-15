import React, { useState } from "react";

const Kontak = () => {
  const [dataInput, setDataInput] = useState({
    nama: "",
  });
  const [inputdata, setinputdata] = useState([]);
  const handleChange = (event) => {
    setDataInput((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setinputdata((prev) => [...prev, dataInput]);
    console.log(inputdata);
    setDataInput({
      nama: "",
    });
  };
  return (
    <div>
      <h1 className="text-center">contact</h1>
      <form>
        <label htmlFor="text">Kirim Pesan</label>
        <br />
        <input
          type="text"
          id="kirimpesan"
          onChange={handleChange}
          name="nama"
          value={dataInput.nama}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {inputdata.map((data, index) => {
        return <p key={index}>{data.nama}</p>;
      })}
    </div>
  );
};

export default Kontak;
