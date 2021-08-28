import React from 'react';
const Speech = ({data}) =>
{   
    const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
    <div>
      <NavBar />
      <Form />
      {/* <Speech /> */}
    </div>
  );
  
    return(
        <>
        <h3>People:</h3>
            {data.map((data,key) =>(
                <div className = "data" key = {key}>
                    <h3>{data.firstName} + " " + {data.lastName}</h3>
                    <h4>{data.pronouns}</h4>
                    <p>{data.bio}</p>
                </div>
            ))}
        </>
    )
}

export default Speech;