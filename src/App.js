import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
import { getUsers } from "./API";
import "./App.css";

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <p>
        To filter by employee first name, please begin your search in the user input field below
      </p>
      <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
      <Table users={usersToRender} />
    </div>
  );
}
// this is so that we can test

export default App;

