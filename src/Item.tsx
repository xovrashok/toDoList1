import React, {useState} from 'react';
import './Item.css';

export default function Item({name}:any){
    return(
        <li>
            <table>
                <tr>
                    <td><p className="names"><b>{name.firstName}</b></p></td>
                    <td><button className="isTalking"><b>Is talking</b></button></td>
                    <td><button className="interrupted"><b>interrupted:</b></button></td>
                    <td><button className="askedG"><b>asked a G:</b></button></td>
                </tr>
            </table>
            <hr/>

        </li>
    )
}