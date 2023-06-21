import {useEffect, useState} from "react";

export const Resultados = () => {


    useEffect(()=>{
        window.location.href = "http://labnovaeclipse.ddns.net:9090/EclipseWeb/login"

    },[])

    return (
        <div>
            <iframe src="http://labnovaeclipse.ddns.net:9090/EclipseWeb/login"
                className="resultados"/>
        </div>
    )
}
