import React from 'react';
import styles from './Spinner.module.css';

type SpinnerProps = {
    size?: number; // Diameter of the spinner
    color?: string; // Primary color of the spinner
    thickness?: number; // Thickness of the spinner border
};

const Spinner: React.FC<SpinnerProps> = ({
    size = 60,
    color = '#1976d2',
    thickness = 5,
}) => {
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
