import React from 'react'
import './loading.scss'

export default function Loading (){
    return(
        <div className='active_loader'>
            <div className='active_loader loader'/>
            <p>Cargando...</p>
        </div>
    )
}