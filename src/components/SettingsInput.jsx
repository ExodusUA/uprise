import '.././App.css';

function SettingsInput(props) {

    return (
        <div className='settingsInput'>
            <label htmlFor={props.name}>{props.title}</label>
            <input value={props.value} readOnly={(props.readonly === true) ? true : false} type={props.name} name={props.name} id={props.name} onChange={e => props.handler(e)} />
        </div>
    );
}

export default SettingsInput;
