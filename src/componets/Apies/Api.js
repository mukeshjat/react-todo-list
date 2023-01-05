import axios from "axios";
import React, { useState, useEffect } from "react";

const Api = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        response=response.data;
        console.log("REsposne data >>>",response)
        return response
      })

      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(users);
  console.log(setUsers);

  //   if (!post) return null;

  return (
    <>
      <h1>hello lodu</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Sno</th>
            <th>title</th>
            <th>price</th>
            <th>category</th>
            <th>description</th>
            <th>Img</th>
            <th>count</th>
            <th>rate</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.price}</td>
              <td>{user.category}</td>
              <td>{user.description}</td>
              <td>
                <img src="{user.img}" alt="user_imgs" />
              </td>
              <td>{user.rating.count}</td>
              <td>{user.rating.rate}</td>
              {/* <td>{user.employee_name}</td>
                <td>{user.employee_salary}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Api;
