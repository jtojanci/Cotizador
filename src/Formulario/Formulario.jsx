import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Formulario(){

    const[verCedula,guardarCedula]=useState("")
    const[verContraseña,guardarContraseña]=useState("")

    // Hook - es una variable de estado 
    //Para navegar entre componentes debo declarar una variable que almacene el hook
    let enrutador=useNavigate()


    function procesarFormulario(evento){
        //que hago si le hacen clic al boton del formulario?
        evento.preventDefault()
        
        //voy a enrutar otro componente (¿Cómo lanzo un componente desde otro componente?)
        enrutador("/home")
    } 

    return(
        <>
            <section className="container" >
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <img src="../../src/assets/LOGO-GRUPO-SURA-1.png" alt="" className="img-fluid" />
                        <form className="border rounded p-4" onSubmit={procesarFormulario}>
                            <h2>Iniciar sesión</h2>
                            <h5 color="green">Cotizador</h5>

                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Nombre de usuario"
                                    id="identificacion"
                                    onChange={function(evento){guardarCedula(evento.target.value)}}
                                />
                            </div>

                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    placeholder="Contraseña"
                                    id="contraseña"
                                />
                            </div>
                            <div className="row mt-4">
                                <div className="col12 col-md-6">
                                <p>¿Has olvidado tu contraseña?</p> 
                                </div>
                                <div className="col12 col-md-6">
                                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                                </div>
                                
                            </div>

                        </form>
                    </div>
                    
                </div>
                
            </section>
        </>
    )
}