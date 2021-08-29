
import React, { useEffect, useState} from 'react';
import axios from 'axios'
import NavBar from '../NavBar';
import Form from '../form/Form';
import ReactAudioPlayer from 'react-audio-player';
import './Speech.css';
// 



const Speech = () =>  {   
    const[getMessage, setGetMessage] = useState([])

    useEffect((event)=>{
        axios.get('http://localhost:5000/getUsers').then(response => {
        setGetMessage(response.data)
        }).catch(error => {
        console.log(error)
        })


    }, [getMessage])

    // async function importAudio(audioPath) {
    //     const module = await import(audioPath);
    // }

    
    return (
        <div>
    
            {getMessage.map((data,key) =>(
                <div className = "comment" key = {key}>
                    <h4>{data.firstName} {data.lastName}</h4>
                    <div>
                        {/* {const component = React.lazy(() => import(`../mp3_files/${data.mp3Path}`));}
                        {import component} 
                        
                        webpack
                        JSX is compiled into HTML/CSS/JS via webpack
                        HTML in browser checks public directory for src
                        */}
                        <p id = 'nameAudio'>Name pronounciation:</p>
                        <ReactAudioPlayer
                            src={data.mp3FileName}
                            controls
                            preload="none"
                        />
                    </div>
                    <p>{data.pronouns}</p>
                    <p>{data.bio}</p>

                </div>
            ))}
        
        </div>
    );

}

export default Speech;