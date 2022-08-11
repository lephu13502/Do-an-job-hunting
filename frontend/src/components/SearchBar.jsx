import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/SearchSharp";
import CloseIcon from "@mui/icons-material/CloseSharp";

// function SearchBar({ placeholder, data }) {
//     const [filteredData, setFilteredData] = useState([]);
//     const [wordEntered, setWordEntered] = useState("");

//     const handleFilter = (event) => {
//       const searchWord = event.target.value;
//       setWordEntered(searchWord);
//       const newFilter = data.filter((value) => {
//         return value.title.toLowerCase().includes(searchWord.toLowerCase());
//       });

//       if (searchWord === "") {
//         setFilteredData([]);
//       } else {
//         setFilteredData(newFilter);
//       }
//     };

//     const clearInput = () => {
//       setFilteredData([]);
//       setWordEntered("");
//     };

//     return (
//       <div className="search">
//         <div className="searchInputs">
//           <input
//             type="text"
//             placeholder={placeholder}
//             value={wordEntered}
//             onChange={handleFilter}
//           />
//           <div className="searchIcon">
//             {filteredData.length === 0 ? (
//               <SearchIcon />
//             ) : (<CloseIcon id="clearBtn" onClick={clearInput} />)}
//           </div>
//         </div>
//         {filteredData.length !== 0 && (
//           <div className="dataResult">
//             {filteredData.slice(0, 15).map((value, key) => {
//               return (
//                 <a className="dataItem" href={value.link} target="_blank" rel = "noreferrer">
//                   <p>{value.title} </p>
//                 </a>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleClick = () => {
    console.log("click");
  };
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
  };
  return (
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-8">
          <div className="search">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Tìm công việc ? Tìm ngay"
              value={wordEntered}
              onChange={handleFilter}
            />
            <button className="btn btn-primary" onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
