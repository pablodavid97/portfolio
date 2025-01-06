import styles from './Spinner.module.css';

type SpinnerProps = {
    size?: number;
    color?: string;
    thickness?: number;
};

const Spinner = ({
    size = 60,
    color = '#1976d2',
    thickness = 5,
}: SpinnerProps) => {
    return (
        <div
            className={styles.spinner}
            style={
                {
                    width: `${size}px`,
                    height: `${size}px`,
                    borderWidth: `${thickness}px`,
                    '--spinner-color': color, // Pass the color as a CSS variable
                } as React.CSSProperties
            }
        ></div>
    );
};

export default Spinner;
