import React, { useState, useEffect, useReducer } from "react";
import Select from "react-select";
import { Button, } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { isAutheticated } from "../auth/helper";
import { createFaculty, getAllFaculty } from "../admin/helper/facultyApiCall";
import axios from "axios";
import DataTable from 'react-data-table-component';


const Facultyanagementform = () => {
  const { currentColor, bgColor } = useStateContext();


  const [values, setValues] = useState({
    facultyCode: "",
    facultyName: "",
    error: "",
    success: false,
  });

 // components REFRESH 
const  [ingnored, forceUpdate] = useReducer(x => x + 1, 0);


  const { facultyCode, facultyName, error, success } = values;

  const { user, token } = isAutheticated();
  const handleChange = (name) => (event) => {
    console.log("values", event.target.value);
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    console.log("Submit Button clicked");
    
    // backend request fired
    createFaculty(user._id, token, { facultyCode, facultyName })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
          forceUpdate();
        } else {
          setValues({
            ...values,
            facultyCode: "",
            facultyName: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in Add Faculty"));
  };


//   // load table work
//   const LoadTable = props => (
//     <tr>
//         <td>{props.fac.facultyCode}</td>
//         <td>{props.fac.facultyName}</td>
//         <td>
//             <Link to={"/edit/"+props.todo._id}>Edit</Link>
//         </td>
//     </tr>
// )

const [faculties, setfaculties] = useState([]);

const getFaculties = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/faculty");
    setfaculties(response.data);
  } catch (error) {
    console.log(error);
  }
};

const columns = [
  {
    name: "Faculty Code",
    selector: (row) => row.facultyCode,
  },
  {
    name: "Faculty Name",
    selector: (row) => row.facultyName,
  },
];

useEffect(() => {
  getFaculties();
}, []);


  return (
    <div className="w-full">
      <form class="w-full ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Faculty Code
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs"
              id="grid-first-name"
              type="text"
              placeholder="XX105011"
              onChange={handleChange("facultyCode")}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Faculty Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs"
              id="grid-last-name"
              type="text"
              placeholder="Mathematics"
              onChange={handleChange("facultyName")}
            />
          </div>
        </div>
        <p className="font-semibold text-xs ml-4 mb-10">
          {JSON.stringify(values)}
        </p>
        <div className="mt-3 mb-3">
          <Button
            color="white"
            bgColor={currentColor}
            text="Submit"
            borderRadius="10px"
            width="full"
            btnOnClick={onSubmit}
          />
        </div>
      </form>
      <DataTable columns={columns} data={faculties} />
      
    </div>
  );
};

export default Facultyanagementform;
