import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("ERROR: erro na busca de usuarios", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return(
    <div>
      <h2>Lista de Usuarios</h2>
      {users.length === 0 ? 
      (<p>Não ha usuarios!</p>)
      : (users.map ((u) => (
        <div key={u.id}>
          <strong>{u.name}</strong> {u.email}
        </div>
      )))  
    }
    </div>
  );

}
export default App;