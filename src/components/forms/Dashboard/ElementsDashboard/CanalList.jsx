import React from 'react'
import CanalItem from './CanalItem'

function CanalsList({canals, remove}) {
    return (
        <div>
            {canals.map((canal)=>
            <CanalItem remove={remove} canal={canal} key={canal.id}/>
            )}
        </div>
    )
}

export default CanalsList
