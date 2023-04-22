import '.././App.css';
import GoogleLogo from '../images/GoogleLogo.svg'
function GoogleButton(props) {


    return (
        <button className='googleButton'><img src={GoogleLogo} alt="Google Logo" /> {props.text}</button>
    );
}

export default GoogleButton;
