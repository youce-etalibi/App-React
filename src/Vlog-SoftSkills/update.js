import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { update } from "./Redux/actions";

export default function Update(){
    const {id} = useParams();
    const Vlogs = useSelector((state) => state.Vlogs.find((item)=>item.id == id));
    // console.log(Vlogs)
    const dispatch = useDispatch();
    const home = useNavigate()

    const [title, setTitle] = useState(Vlogs.Title);
    const [description, setDescription] = useState(Vlogs.Description);
    const [hour, setHour] = useState(Vlogs.Hour);
    const [jour, setJour] = useState(Vlogs.day);

    function handleSubmit(e){
        e.preventDefault();
        const V = {id : id, day : jour, Hour : hour, Title : title, Description : description};
        dispatch(update(V))
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
                <h1 style={{color:'white'}}>Update Line</h1>
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
                                    <input type="submit" className="btnUpdate" value='Update'/>
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