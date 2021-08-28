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
                <option selected value="Arabic">Arabic</option>
                    <option value="Australian English">Australian English</option>
                    <option value="Brazilian Portuguese">Brazilian Portuguese</option>
                    <option value="British English">British English</option>
                    <option value="Canadian French">Canadian French</option>
                    <option value="Castilian Spanish">Castilian Spanish</option>
                    <option value="Chinese Mandarin">Chinese Mandarin</option>
                    <option value="Danish">Danish</option>
                    <option value="Dutch">Dutch</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Hindi or Indian English">Hindi or Indian English</option>
                    <option value="Icelandic">Icelandic</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Mexican Spanish">Mexican Spanish</option>
                    <option value="Norwegian">Norwegian</option>
                    <option value="Polish">Polish</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Russian">Russian</option>
                    <option value="Swedish">Swedish</option>
                    <option value="Turkish">Turkish</option>
                    <option value="US English">US English</option>
                    <option value="US Spanish">US Spanish</option>
                    <option value="Welsh">Welsh</option>
                    <option value="Welsh English">Welsh English</option>
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