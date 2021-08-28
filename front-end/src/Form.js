import React, {useState} from 'react';

const AddCommentForm = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[language, setLanguage] = useState('');
    const [pronouns, setPronouns] = useState('');
    const[bio, setBio] = useState('');

    // const addPerson = async()=>
    // {
    //     const result = await fetch(`/api/articles/${articleName}/add-comment`, {
    //         method:'post',
    //         body:JSON.stringify({username, text:commentText}), 
    //         headers:{
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     const body= await result.json();
    //     setArticleInfo(body);
    //     setUsername('');
    //     setCommentText('');
    // }

    return(
        <div id="add-comment-form">
            <h3>Input your First Name</h3>
            <label>
                First Name:
                <input type = "text" value={firstName} onChange={(event)=>setFirstName(event.target.value)} />
            </label>
            <label>
                Last Name:
                <input type = "text" value={lastName} onChange={(event)=>setLastName(event.target.value)} />
            </label>
            <label>
                Select Language
                <select value={language} onChange={(event)=>setLanguage(event.target.value)} >
                    <option selected value="english">English</option>
                    <option value="french">French</option>
                    <option value="italian">Italian</option>
                    <option value="spanish">Spanish</option>
                </select>
            </label>
            <label>
                Select Pronouns
                <select value={pronouns} onChange={(event)=>setPronouns(event.target.value)} >
                    <option value="sheHer">She/Her</option>
                    <option value="heHim">He/Him</option>
                    <option value="theyThem">They/Them</option>
                    <option value="other">Other</option>
                </select>

            </label>
            <label>
                Bio: 
                <textarea rows= "4" cols = "50" value={bio} onChange={(event)=>setBio(event.target.value)}/>
            </label>
            <button>Submit</button>
            {/* <button onClick={()=> addComment()}>Submit</button> */}

        </div>
    )

}

export default AddCommentForm;