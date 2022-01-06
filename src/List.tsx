import React, {useState} from 'react';
import Item from './Item';

export default function List(props:any){
       return(
        <ul>{props.names.map((name:any)=>{
            return <Item name={name} key={name.id}></Item>
        })}</ul>
    )
}