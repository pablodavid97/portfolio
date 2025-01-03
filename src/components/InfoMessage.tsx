const InfoMessage = ({ title = '', message = '', type = 'info' }) => {
    return (
        <div className={`msg ${type}`}>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    );
};

export default InfoMessage;
