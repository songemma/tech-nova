import React from 'react';
const formData = ({data}) =>
{
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

export default formData;