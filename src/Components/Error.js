import './Error.css';

const Error = (props) => {
    return (
        <div>
            <h1 className="error-text">Oooops! {props.errorText} </h1>
        </div>
    )
};

export default Error;