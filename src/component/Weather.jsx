import React ,{useState ,useEffect} from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { getDate, getDay} from './data'
import {RiHazeFill ,RiSunFoggyFill } from "react-icons/ri";
import { WiDayFog ,WiSolarEclipse,WiCloudy,WiRainMix, } from "react-icons/wi";
export const Weather = () => {

    const [location, setLocation] = useState('');
    const [input, setinput] = useState('');
    const [Data, setData] = useState();
    const [temp, setTemp] = useState('')
    const [status, setstatus] = useState('')
    //  console.log(status);


    const getTemp= async(event)=>{
        event.preventDefault();
        if(location===""){
            setinput('Please fill the input fild ')
            setData('')
            setTemp('')
            setstatus('')

        }else{
            try{
              
               
                let url=`${process.env.REACT_APP_BASE_URL}${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
                let response= await fetch(url);
                let res =await response.json();
                setData(`${res.name},${res.sys.country}`);
                setTemp(`temp:${res.main.temp}C`);
                setstatus(res.weather[0].main);
                setinput('')
                
                

            }catch{
                setinput(`Please enter your city name properly`);
                setLocation('')
                setData('')
                setTemp('')
                setstatus('')

            }

        }
    }

   useEffect(() => {
        setinput(`Hi, input your location and get know about your location's weather`);
        // setLocation('')
        setData('')
        setTemp('')
        setstatus('')
   }, [])


    return (
        
        <>
            <div className="container mt-5 con">
                <div className="row d-flex justify-content-center align-content-center">
                    <div className="col-lg-6">
                       <form action="" onSubmit={getTemp}>
                           <input type="text" className="w-100 p-2 mb-3" onChange={(e)=>{setLocation(e.target.value)}} placeholder="Enter your location" />
                        
                           <input type="submit" className="w-100 p-2 rounded btn btn-outline-dark"  />
                       </form>
                              <div class="card mt-5">
                            <div class="card-header d-flex justify-content-between align-content-center py-3">
                               <h5>{getDay()}</h5>
                               <h5>{getDate()}</h5>
                            </div>
                                
                            <div class="card-body">
                                <h5 class="card-title">{Data}</h5>
                                <h1>{input }</h1>
                                <div className="d-flex justify-content-between align-content-center">
                                    <p>{temp}</p>
                                    <p>{status==="Rain"?    <WiRainMix className='icons ic-1'/> 
                                    :status==="Clear"?    <WiSolarEclipse className='icons ic-2'/> 
                                    :status==="Clouds"? <WiCloudy className='icons ic-3'/> 
                                    :status==="Mist"? <RiSunFoggyFill className='icons ic-4'/> 
                                    :status==="Haze"? <RiHazeFill className='icons ic-5'/>
                                    :status==="Fog"? <WiDayFog className='icons ic-6'/>
                                    : ""}</p>
                                </div>
                            </div>  
                         </div>
                   </div>
                </div>
            </div>   
        </>
    )
}
