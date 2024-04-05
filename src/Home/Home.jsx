import "./Home.css"

import riesgosAsesor from "../utils/riesgosAsesor.json"

import {useloca}


export function Home(){

    console.log(riesgosAsesor[0])
    
    return( //zona de renderizado
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="fuente">Histórico de cotizaciones</h3>
                        <h2 className="text-muted">HOLA <span className="fuente">{riesgosAsesor[0].nombreUsuario}</span></h2>
                        <p>Revisa la información de los tiesgos que has cotizado.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 col-md-2 mt-5">
                                <i class="bi bi-building fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-5">
                                <br />
                               <p>Oficina: {riesgosAsesor[0].oficina}</p> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-2 mt-5">
                                <i class="bi bi-globe-americas fs-1 fuente"></i>
                            </div>
                            <div className="col-12 col-md-10 mt-5">
                                <br />
                               <p>Regional: {riesgosAsesor[0].departamento}</p> 
                            </div>
                        </div>
                        

                        
                       

                    </div>
                </div>
            </section>

            <hr />
            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <h5>ASESOR {riesgosAsesor[0].nombreUsuario}, Estas son los riesgos cotizados: </h5>

                    </div>
                </div>
            </section>
            <section className="container my-5">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        riesgosAsesor[0].riesgosCotizados.map(function(cotiza){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow px-2">
                                        <h3>{cotiza.Placa}</h3>
                                        <h4>Marca-Línea: {cotiza.Marca}-{cotiza.Referencia1}</h4>
                                        <h4>Modelo: {cotiza.Modelo}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}