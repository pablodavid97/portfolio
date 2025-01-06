type Props = {
    title: string;
    message: string;
    type: string;
};

const InfoMessage = ({ title = '', message = '', type = 'info' }: Props) => {
    return (
        <div className={`msg ${type}`}>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    );
};

export default InfoMessage;
