import React, { useRef } from 'react'
import axios from 'axios'
import {useState, useref} from 'react'

const Success = () => {
    const rName = useRef();
    const rCompany = useRef();
    const rPkg = useRef();
    
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [pkg, setPkg] = useState("");

    const [msg,setMsg] = useState("");

    const hName = (e) =>{
        setName(e.target.value);
    }
    const hCompany = (e) =>{
        setCompany(e.target.value);
    }
    const hPkg = (e) =>{
        setPkg(e.target.value);
    }


    const save = (e) =>{
        e.preventDefault();

        let data = {name,company,pkg};
        let url = "https://success-story-express.onrender.com/save";

        axios.post(url,data)
        .then(res =>{
            setMsg("Data Submitted Successfully, Congrats!");
            setName("");
            setCompany("");
            setPkg("");
            rName.current.focus();

            
        })
        .catch(err =>{
            setMsg("Issue" +err)
        })
    }

  return (
    <div>
        <center>
            <h1> Success Story Application</h1>
            <form onSubmit={save}>
                <input type='text' placeholder='Enter Your Name' onChange={hName} value={name} ref={rName} />
                <br/>
                <br/>
                <input type='text' placeholder='Enter Your Company Name' onChange={hCompany} value={company} ref={rCompany} />
                <br/>
                <br/>
                <input type='text' placeholder='Enter Your Company Package' onChange={hPkg} value={pkg} ref={rPkg} />
                <br/>
                <br/>
                <input type='submit'   value='Submit' />
            </form>
            <h2>{msg}</h2>
        </center>
    </div>
  )
}

export default Success