import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import './form.css';


const FormSign=()=>{
    const [tag,setTag]=useState("Please give your feedback");
    const [gender,setGender]= useState();

    const [data,setData]=useState({
        fullName:"",
        address:"",
        email:"",
        feedback:""
    });
    const [fullList,setFullList]=useState([]);

    const inputData=(e)=>{
        setData((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    


    const onSubmit= (e)=>{
        e.preventDefault();
   
        // document.getElementsByClassName("myForm")[0].style.display = "none"; 
        document.getElementById("table_container").style.display="flex";
        const sal=gender?"Mr. ":"Miss ";
        const tagLine="Welcome, "+sal+data.fullName;
        setTag(tagLine);

        setFullList((prev)=>{
            return [...prev,data]
        });
        setData({
            fullName:"",
            address:"",
            email:"",
            feedback:""
        });

    }




    return(
        <>
        <header><h1>{tag}</h1></header>
        <div className='left'>
        
        <form onSubmit={onSubmit} className="myForm" >
            <div className="formElement">
                <label htmlFor="fullName">Name:</label>
                <input type="text" 
                    name="fullName" 
                    id="fullName" 
                    value={data.fullName}
                    onChange={inputData} 
                 />
            </div>

            <div  className="formElement">
                <label htmlFor="email">Email:</label>
                <input type="email" 
                        name="email" 
                        id="email"  
                        value={data.email}
                        onChange={inputData}
                 autoComplete="off" value={data.email} />
            </div>

            <div  className="formElement">
                <label htmlFor="Address">Address:</label>
                <input type="text" name="address" id="address" onChange={inputData} value={data.address} />
            </div>
            
            <div  className="formElement">
                <label htmlFor="male">Male:</label>
                <input type="radio" name="gender" id="male" 
                    value={1}
                    onChange={(e)=>{
                            setGender(e.target.value)
                        }}  />
                <label htmlFor="female">Female:</label>
                <input type="radio" name="gender" id="female" 
                    value={0}
                    onChange={(e)=>{
                            setGender(e.target.value)
                        }}  />
            </div>


            <div  className="formElement">
                <label htmlFor="feedback">Feedback:</label>
                <textarea name="feedback" id="feedback" cols="50" rows="5" onChange={inputData} value={data.feedback} />
            </div>

            

            <button  className="formsElement" type="submit">Submit!</button>
        </form>
        </div>
        <div className='right'>
        <div id="table_container" >
        <div id="feedback_table" >            
         
         {fullList.map((val,index)=>{
             return <Card  
                        id={index}
                        key={index} 
                        data={val}
                />
         })}
         

        </div>
        </div>
        </div>
        </>

    
    );
}
export default FormSign;