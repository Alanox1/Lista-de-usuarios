import { Button } from "@chakra-ui/react"
export default function CrudTableRow({el,setDataToEdit,deleteData}){
    let {name,id} = el
    return(
        <tr>
            <td >{name}</td>
            <td>
                <Button onClick={() => setDataToEdit(el)} color="white" backgroundColor="blue.500" margin="0px 20px">Editar</Button>
                <Button onClick={() => deleteData(id)} 
                        color="white" 
                        backgroundColor="red.600"
                >Eliminar</Button>
            </td>
        </tr>
        )
}