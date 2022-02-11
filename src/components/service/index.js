import axios from "axios";



export async function saveData (Data) {
    try{
        console.log(Data)
        const formData = new FormData()

            formData.append('name', Data.name)
            formData.append('provincia', Data.provincia)
            formData.append('email', Data.email)
            formData.append('horario', Data.horario)
            formData.append('telefono', Data.telefono)
            formData.append('consulta', Data.consulta)
            
        
        const response = await axios ({
            url: process.env.REACT_APP_URL,
            method: 'POST',
            data: Data,
        }, {
            headers:{
                "Access-Control-Allow-Origin" : "*",
                // Authorization: `Bearer ${token}`,
                 token: process.env.REACT_APP_API,
            }
        
        })
         return response
    } catch (error) {
        console.log(error)
    }

    if(Data) return alert('Datos enviados con exito')
}