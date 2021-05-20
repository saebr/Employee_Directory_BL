import React,{useState, useEffect} from "react";
import "./style.css";
import axios from "axios";
import SearchBar from "../SearchBar";


function Directory(props) {
  const [employees, setEmployees] = useState("")
  const [search, setSearch] = useState("")
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10").then(people => {setEmployees(people.data.results)})
  },[])
  return (
    <div className="m-5 d-flex">
      <SearchBar setSearch = {setSearch} search = {search}/>
    <table>
      <thead>
      <tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Phone</th></tr>
      </thead>
      <tbody>
        {employees? employees.map((emp, i) =>{
          return(<tr className="p-5" key={i} ><td className="p-5">{emp.name.first}</td><td className="p-5">{emp.name.last}</td><td className="p-5">{emp.email}</td><td className="p-5">{emp.phone}</td></tr>)
        }):null}
      </tbody>
    </table>
  
  </div>
 
  
  );
}

export default Directory;
