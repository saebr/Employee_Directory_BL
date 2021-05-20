import React,{useState, useEffect} from "react";
import "./style.css";
import axios from "axios";
import SearchBar from "../SearchBar";


function Directory(props) {
  const [employees, setEmployees] = useState("")
  const [search, setSearch] = useState("")
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10&nat=us").then(people => {setEmployees(people.data.results)})
  },[])
  const sortByAge = () => {
    const employeesCopy = [...employees]
    employeesCopy.sort((a, b) => a.dob.age - b.dob.age)
    setEmployees(employeesCopy)
  }
  return (
    <div className="m-5 d-flex">
      <SearchBar setSearch = {setSearch} search = {search}/>
    <table>
      <thead>
      <tr><th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th onClick={sortByAge}>Age</th>
      </tr>
      </thead>
      <tbody>
        {employees? employees.filter(emp => emp.name.first.toLowerCase().includes(search.toLowerCase())).map((emp, i) =>{
          return(<tr className="p-5" key={i} ><td className="p-5">{emp.name.first}</td>
          <td className="p-5">{emp.name.last}</td><td className="p-5">{emp.email}</td>
          <td className="p-5">{emp.phone}</td>
          <td className="p-5">{emp.dob.age}</td>
          </tr>)
        }):null}
      </tbody>
    </table>
  
  </div>
  
  
  );

}

export default Directory;
