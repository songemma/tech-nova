import React, {useState} from 'react';

// import './Form.css';
import './style.css';
import logo from './signup-image (1).jpg'


const Form = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[language, setLanguage] = useState('');
    const [pronouns, setPronouns] = useState('');
    const[bio, setBio] = useState('');
    console.log({firstName})
    return(
        <div class = "main">
            <section class = "signup">
                <div class = "container">
                    <div class = "signup-content">
                        <div class = "signup-form">
                            <h2 class="form-title">Input your Personal Info</h2>
                            <form method="POST" class="register-form" id="register-form">
                                <div class="form-group">
                                    <input type="text" name="name" id="name" placeholder="First Name" value={firstName} onChange={(event)=>setFirstName(event.target.value)}/>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="name" id="name" placeholder="Last Name" value={lastName} onChange={(event)=>setLastName(event.target.value)}/>
                                </div>
                                <div>
                                    <p>Choose a dialect for name pronunciation</p>
                                </div>
                                <div class="form-group">
                                    <select value={language} name = "name" id="name" onChange={(event)=>setLanguage(event.target.value)} >
                                        <option selected value="">---Select Language ---</option>
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
                                </div>
                                <div class="form-group">
                                    <input type="text" name="name" id="name" placeholder="Pronouns" value={pronouns} onChange={(event)=>setPronouns(event.target.value)}/>
                                </div>
                                <div class="form-group">
                                    {/* <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" /> */}
                                    <textarea name = "name" id = "name" placeholder="A little about me!" rows= "4" cols = "50" value={bio} onChange={(event)=>setBio(event.target.value)}/>

                                </div>
                                <div class="form-group form-button">
                                    
                                // whenever there's type="submit", need to use event.preventDefault()
                                // avoid reloading the page
                                <button type="submit" value="Create User" 
                                    onClick={
                                        // JavaScript starts
                                        async (event) => {
                                        event.preventDefault();
                                        let options = {
                                            headers:{
                                                'Content-Type': 'application/json',
                                            },
                                            method: 'POST',
                                            body: JSON.stringify({
                                                "firstName": firstName,
                                                "lastName": lastName,
                                                "language": language,
                                                "pronouns": pronouns,
                                                "bio": bio
                                            })
                                          };
                                        
                                          
                                          fetch('http://localhost:5000/createUser', options)
                                            .then(response => console.log(response))
                                            .catch(error => console.error(error))
                                          }
                                        
                                }>
                                </button>

                                </div>
                            </form>
                        </div>

                        <div class="signup-image">
                        <img src= {logo} alt = " meaningful"/>
                    </div>
                    </div>
                </div>
            </section>

        {/* <div id="form-box">
            <h3>Input your Personal Information</h3>
            <label class="content">
                <input placeholder="First Name" type = "text" value={firstName} onChange={(event)=>setFirstName(event.target.value)} />
            </label>
            <label class="content">
                <input placeholder="Last Name" type = "text" value={lastName} onChange={(event)=>setLastName(event.target.value)} />
            </label>
            <label class="content">
                <h4>Select Language:</h4>
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
            <label class="content">
                Select Pronouns:
                <select value={pronouns} onChange={(event)=>setPronouns(event.target.value)} >
                    <option value="sheHer">She/Her</option>
                    <option value="heHim">He/Him</option>
                    <option value="theyThem">They/Them</option>
                </select>
            </label>
            <label class="content">
                <textarea placeholder="A little about me!" rows= "4" cols = "50" value={bio} onChange={(event)=>setBio(event.target.value)}/>
            </label>
            <div class = "btn">
            <button class = "content">Submit</button>
            </div>
        </div> */}
        </div>

    )

}

export default Form;