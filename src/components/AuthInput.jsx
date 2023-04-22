import '.././App.css';

function AuthInput(props) {

    const onChange = (event) => {
        props.updateValue(event.target.value)
    };

    return (
        <input className='authInput' type={props.type} placeholder={props.placeholder} onChange={onChange} />
    );
}

export default AuthInput;
