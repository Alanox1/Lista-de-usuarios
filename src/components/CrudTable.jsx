import CrudTableRow from "./CrudTableRow"
import { Box } from "@chakra-ui/react"
export default function CrudTable ({users,setDataToEdit,deleteData}) {
   
    
    return(
        <Box width="100%"
             display="flex"
             justifyContent="center"
       >
        
        <table style={{width : "100%",fontSize : "40px"}}>
                <thead style={{margin : "50px"}}>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody style={{width : "100%",textAlign: "center",fontSize : "30px"}}>
                    {users.length === 0 ? <tr><td colSpan="3">Sin Usuarios</td></tr>: users.map((el) => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)}
                </tbody>
        </table>
     
          
        </Box>
    )
}