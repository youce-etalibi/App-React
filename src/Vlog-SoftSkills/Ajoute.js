import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ajoute, update } from "./Redux/actions";

export default function Ajoute(){
    const id = useSelector((state) => state.Vlogs.slice(-1)[0].id - (-1));
    // console.log(id)
    const dispatch = useDispatch();
    const home = useNavigate()

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [hour, setHour] = useState();
    const [jour, setJour] = useState();

    function handleSubmit(e){
        e.preventDefault();
        const V = {id : id, day : jour, Hour : hour, Title : title, Description : description};
        dispatch(ajoute(V))
        home('/')
    }
    return(
        <>
        <br/>
        <br/>
        <br/>
        <center>
            <div>
                <form onSubmit={handleSubmit}>
                <h1 style={{color:'white'}}>Ajoute Line</h1>
                    <table style={{color:'white', fontFamily:'verdana', fontWeight:'700', padding:'10px', gap:'10px'}}>
                        <tbody>
                            <tr style={{margin:'5px'}}>
                                <td>Title : </td>
                                <td>
                                    <input type="text" className='inputUpdate' value={title}  onChange={e=>setTitle(e.target.value)}/>
                                </td>
                            </tr>
                            <tr style={{margin:'5px', padding:'10px'}}>
                                <td>Description : </td>
                                <td>
                                    <input type="text" className='inputUpdate' value={description} onChange={e=>setDescription(e.target.value)}/>
                                </td>
                            </tr>
                            <tr style={{margin:'5px', padding:'10px'}}>
                                <td>Hour : </td>
                                <td>
                                    <input type="text" className='inputUpdate' value={hour}  onChange={e=>setHour(e.target.value)}/>
                                </td>
                            </tr>
                            <tr style={{margin:'5px', padding:'10px'}}>
                                <td>Jour : </td>
                                <td>
                                    <input type="number" className='inputUpdate' value={jour} onChange={e=>setJour(e.target.value)}/>
                                </td>
                            </tr>
                            <tr style={{margin:'5px', padding:'10px'}}>
                                <td colSpan='2'>
                                    <input type="submit" className="btnUpdate" value='Ajoute'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </center>
        </>
    )
}