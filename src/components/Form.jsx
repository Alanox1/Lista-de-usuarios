import { Text, Button,Stack } from "@chakra-ui/react"
import {useState,useEffect} from "react"
const initialForm = {
    name : "",
    id : null
}
export default function Form({createData,updateData,dataToEdit,setDataToEdit,ordenarAscendente,ordenarDescendente}){
    const [form,setForm] = useState(initialForm)

    useEffect(() => {
    if(dataToEdit){
        setForm(dataToEdit)
    }else{
        setForm(initialForm)
    }
    },[dataToEdit])

    const handleChange  = (e) => {
      setForm({
        ...form,
        [e.target.name] : e.target.value,
      })
    }
    const handleSubmit  = (e) => {
        e.preventDefault();
        if(!form.name ){
            alert("Datos imcompletos")
            return;
        }

        if(form.id === null){
            createData(form)
        }else{
            updateData(form)
        }

        setForm(initialForm)
        setDataToEdit(null)
    }
    return(
        <>
            <Text textAlign="center" fontSize="30px">{dataToEdit ? "Editar" : "Agregar"}</Text>
            <form style={{display :"flex", justifyContent:"center"}} onSubmit={handleSubmit}>
          
             <Text fontSize="30px">Ordenar :</Text>
                <Button color="black" 
                        margin="0px 10px" 
                        onClick={() => ordenarDescendente()}>
                   Descentente
                </Button>
                <Button color="black" 
                        onClick={() => ordenarAscendente()}>Ascendente
                </Button>
          
              
                <input  type="text" 
                        name="name" 
                        placeholder="Nombre" 
                        onChange={handleChange} 
                        value={form.name} 
                        style={{color : "black",
                                padding : "10px 20px",
                                margin:"0px 20px"
                               }}
                />   
                <input style={{color : "white",
                               backgroundColor : "forestgreen", 
                               margin:"0px 20px",
                               padding:"0px 20px"
                       }} 
                       type="submit" 
                       value={dataToEdit ? "Editar" : "Agregar"} /> 
              
               
            </form>
        </>
       
    )
}