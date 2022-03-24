import React,{Component} from 'react'
import Axios from 'axios'
export default class Dropdown extends Component{
    state={
        isActive:false,
        FileAstronauts:null,
        FileSpaceship:null,
        
        
    };
    render(){
    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick={()=>{
                var aux = !this.isActive;
                this.setState({
                    isActive:aux
                })
            }}>
                import
            </div>
            
            <div className="dropdown-item">
                <form className="space-import">
                    <input type="file" onChange={(e)=>{
                        this.setState({ FileSpaceship: e.target.files[0] });
                    }}></input>
                    <button onClick={async(e)=>{
                       
                        e.preventDefault();
                        const file=this.state.FileSpaceship;
                        const reader = new FileReader();
                        reader.readAsText(file);
                        reader.onload=async()=>{
                        var parsed=JSON.parse(reader.result);
                        console.log(JSON.stringify(parsed));
                      const res =await  Axios.post("http://localhost:8080/routes/import1", JSON.stringify(parsed),{headers:{
                            'Content-Type': 'application/json;charset=UTF-8',
                             'Access-Control-Allow-Origin':'*'}});
                        }
                            
                    }}>Send File S</button>
                </form>
            </div>
            <div className="dropdown-item">
                <form className="astr-import">
                    <input type="file" onChange={(e)=>{
                        this.setState({ FileAstronauts: e.target.files[0] });
                    }}></input>
                    <button onClick={async(e)=>{
                        e.preventDefault();
                            const file=this.state.FileAstronauts;
                            const reader = new FileReader();
                            reader.readAsText(file);
                            reader.onload=async()=>{
                            var parsed=JSON.parse(reader.result);
                            console.log(JSON.stringify(parsed));
                          const res =await  Axios.post("http://localhost:8080/routes/import2", JSON.stringify(parsed),{headers:{
                                'Content-Type': 'application/json;charset=UTF-8',
                                 'Access-Control-Allow-Origin':'*'}});
                            }
                    }}>Send file A</button>
                </form>
            </div>

        </div>
    )
    }
}