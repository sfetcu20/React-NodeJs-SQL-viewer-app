import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import DataTable from './DataTable';
import Dropdown from './Dropdown';
import Axios from 'axios';
import './App.css';
import axios from 'axios';
function App(){
    //getter,setter = default,empty array != empty string
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);
    const [name,setname] =useState("");
    const [mass,setmass] =useState(0);
    const [speed,setspeed] =useState(0);
    const [loading,setLoading] = useState(false);
    const[offset,setOffset]=useState(0);
    const[offset1,setOffset1]=useState(0);
    

    useEffect(()=>{
      
        const fetchData1 = async()=>{
            setLoading(true);
            const res = await Axios.get('http://localhost:8080/routes/getSpacecraft/'+offset);
            setData1(res.data);
            setLoading(false);
        }
       
        fetchData1();
        
    },[offset])

    useEffect(()=>{
        const fetchData2 = async()=>{
            setLoading(true);
            const res = await Axios.get('http://localhost:8080/routes/getAstronaut/'+offset1);
            setData2(res.data);
            setLoading(false);
        }
            fetchData2();
        
    },[offset1])

    const next = (e)=>{
    
       setOffset(offset+3);
    }
    const prev=(e)=>{
        setOffset(offset-3);
    }
    const next1 = ()=>{
    
        setOffset1(offset1+3);
     }
     const prev1=()=>{
         setOffset1(offset1-3);
     }
   
    return(
    <div className="grid">
        <div className = "header">
            <Dropdown />
        </div>
        <div className="table_space">
        <DataTable data={data1} />
        <button onClick={next}>next</button>
        <button onClick={prev}>prev</button>
        <form>
            name<input type="text" onChange={(e)=>{setname(e.target.value)}}></input>
            mass<input type="text" onChange={(e)=>{setmass(e.target.value)}}></input>
            speed<input type="text" onChange={(e)=>{setspeed(e.target.value)}}></input>
            <button onClick={async(e)=>{
                e.preventDefault();
                let v={
                    n:name,
                    m:mass,
                    s:speed
                }
                console.log(JSON.stringify(v));
                const res = await axios.post("http://localhost:8080/routes/add",JSON.stringify(v),{headers:{
                    'Content-Type': 'application/json;charset=UTF-8',
                     'Access-Control-Allow-Origin':'*'}});
                
            }}>Add</button>
            <button>Delete</button>
            <button>Update</button>
        </form>
        </div>
        <div className="table_astr">
        <DataTable data={data2} />
        <button onClick={next1}>next</button>
        <button onClick={prev1}>prev</button>
        </div>
    </div>
    )
}
export default App;