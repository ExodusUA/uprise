import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '.././App.css';
import SettingsInput from '../components/SettingsInput';

function Settings(props) {
    props.setActivePage('Settings')

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')

    const [emailValid, setEmailValid] = useState(false)
    const [passValid, setPassValid] = useState(false)
    const [nameValid, setNameValid] = useState(false)

    const [validateError, setValidateError] = useState('')

    const passHandler = (e) => {
        setPass(e.target.value)

        if (e.target.value.length > 7) {
            setPassValid(true)
        } else {
            setPassValid(false)
        }
    }


    const token = window.localStorage.getItem('token')

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token + "");


    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch('https://backend.uprise.partnerswire.com/authenticated/v1/user/me', requestOptions)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setLastName(response.last_name)
                setFirstName(response.first_name)
                setEmail(response.email)
            })
            .catch(err => console.error(err));
    }, [])



    function validateSettings() {
        if (passValid === true) {
            setValidateError('')

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({
                    password: pass
                })
            };

            fetch('https://backend.uprise.partnerswire.com/authenticated/v1/user/password', requestOptions)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    if (response.error) {
                        setValidateError('An error occurred')
                    } else {
                        setValidateError('Password successfully changed')
                    }
                })
                .catch(err => console.error(err));

        } else {
            setValidateError('Incorrect password entered!')
        }
    }

    return (
        <div className='settings'>
            <p className="settingsTitle">Settings</p>
            <div className='settingsBody'>
                <p>Settings</p>

                <div className='settingsForm'>
                    <SettingsInput value={firstName} title={'First Name'} name={'name'} readonly={true} />
                    <SettingsInput value={lastName} title={'Last Name'} name={'name'} readonly={true} />
                    <SettingsInput value={email} title={'Email'} name={'email'} readonly={true} />
                    <SettingsInput title={'Password'} name={'password'} handler={passHandler} readonly={false} />
                    <div className='settingsError'>
                        <p className='errorMessage'>{validateError}</p>
                    </div>
                </div>

                <div className='settingsFormButton'>
                    <button onClick={e => validateSettings()}>SAVE</button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
