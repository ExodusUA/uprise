import '.././App.css';
function AuthButton(props) {

    return (
        <button className='authButton' onClick={e => props.validateForm()}>{props.text}</button>
    );
}

export default AuthButton;
