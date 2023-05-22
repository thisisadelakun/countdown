import React, { useEffect, useState } from 'react';

function FlipCard({ initialValue, title }) {
    const [currentValue, setCurrentValue] = useState(String(initialValue).padStart(2, '0'));
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        setCurrentValue(String(initialValue).padStart(2, '0'));
        setFlip(true);

        const timeout = setTimeout(() => {
            setFlip(false);
        }, 150);

        return () => {
            clearTimeout(timeout);
        };
    }, [initialValue]);

    return (
        <div className={`flipcard ${flip ? 'flipped' : ''}`}>
            <div className="flips">
                <div className="topFlip">
                    <div className="top">
                        <h1>{currentValue}</h1>
                    </div>
                </div>
                <div className="bottomFlip">
                    <div className="bottom">
                        <h1>{currentValue}</h1>
                    </div>
                </div>
            </div>
            <div>
                <span className="title">{title}</span>
            </div>
        </div>
    );
}

export default FlipCard;
