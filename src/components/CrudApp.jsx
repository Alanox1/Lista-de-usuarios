import { useEffect, useState } from "react";
import CrudTable from "./CrudTable";
import Form from "./Form";
import {users} from "../constants"
import { Stack, Heading, Button } from "@chakra-ui/react";
export default function CrudApp(){
   
    const [db, setDb] = useState(() => {
    const savedTodos = localStorage.getItem("users");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } 
    return users
  });
    const [dataToEdit,setDataToEdit] = useState(null)
   
    const createData = (data) => {
      data.id = Date.now()
      let newUser = {
        name : data.name,
        id : data.id
      }
      setDb([...db,newUser])
    }
    useEffect(() => {
        window.localStorage.setItem("users",JSON.stringify(db))
    },[db])
    const updateData = (data) => {
        let newData = db.map((el) => el.id === data.id ? data : el)

        setDb(newData)
    }

    const deleteData = (id) => {
        let newData = db.filter(el => el.id !== id)
        setDb(newData)
    }

    const ordenarAscendente = () => {
      return setDb([...db].sort((a, b) => {
        if (a.name.toLowerCase() == b.name.toLowerCase()) {
          return 0;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        return 1;
      }));
    }

    const ordenarDescendente = () => {
      return setDb([...db].sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
      }));
    }
    return(
        <Stack width="90%"
               margin="0px auto"
               maxWidth="1280px">
           <Heading fontSize="50px"        
                     textAlign="center">Lista de Usuarios
          </Heading>
            <Form createData={createData} 
                  updateData={updateData} 
                  dataToEdit={dataToEdit} 
                  setDataToEdit={setDataToEdit} 
                  ordenarAscendente={ordenarAscendente}
                  ordenarDescendente={ordenarDescendente}
            />
            <CrudTable users={db}  
                       setDataToEdit={setDataToEdit} 
                       deleteData={deleteData}
            />
        </Stack>
    )
}