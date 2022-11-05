import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Select from "react-select";
import { createDepartment } from "../admin/helper/departmentApiCall";
import { getAllFaculty } from "../admin/helper/facultyApiCall";
import { isAutheticated } from "../auth/helper";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "./Button";

const Departmentanagementform = () => {
  const subjectsoption = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 5,
    }),
  };

  const { currentColor, bgColor } = useStateContext();

  const [values, setValues] = useState({
    departmentCode: "",
    departmentName: "",
    facultyId: "",
    faculties: [],
    faculty: "",
    error: "",
    success: false,
  });

  const {
    departmentCode,
    departmentName,
    facultyId,
    faculties,
    faculty,
    error,
    success,
  } = values;

  const { user, token } = isAutheticated();
  const handleChange = (name) => (event) => {
    console.log("values", event.target.value);
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const perload = () => {
    getAllFaculty()
      .then((data) => {
        console.log("FAC", data);
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({ ...values, faculties: data });
          console.log("Fac", faculties);
        }
      })
      .catch(console.log("Error in Add Faculty"));
  };

  useEffect(() => {
    perload();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    console.log("Submit Button clicked");

    // backend request fired
    createDepartment(user._id, token, { departmentCode, departmentName, facultyId })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
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


  const [departments, setDepartments] = useState([]);

const getDepartments = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/department");
    setDepartments(response.data);
  } catch (error) {
    console.log(error);
  }
};

const columns = [
  {
    name: "Department Code",
    selector: (row) => row.departmentCode,
  },
  {
    name: "Department Name",
    selector: (row) => row.departmentName,
  },
  {
    name: "Faculty Name",
    selector: (row) => row.facultyId,
  },
];

useEffect(() => {
    getDepartments();
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
              Department Code
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs"
              id="grid-first-name"
              type="text"
              placeholder="XX105011"
              onChange={handleChange("departmentCode")}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Department Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs"
              id="grid-last-name"
              type="text"
              placeholder="Mathematics"
              onChange={handleChange("departmentName")}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Faculty
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-xs"
                id="grid-state"
                onChange={handleChange("facultyId")}
              >
                <option>Select</option>
                {faculties &&
                  faculties.map((Fac, index) => (
                    <option
                      key={index}
                      value={Fac._id}
                      className=" text-gray-700 text-xs"
                    >
                      {Fac.facultyName}
                    </option>
                  ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
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
      <DataTable columns={columns} data={departments} />
    </div>
  );
};

export default Departmentanagementform;
