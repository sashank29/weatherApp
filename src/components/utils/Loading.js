import React from 'react';

const Loading = ({
    noPadding = false,
    color = '#337AB7',
    size = 150,
    className = '',
    style = {},
    loadingMsg = 'Loading...'
}) => {
    const circles = [...Array( 4 )].map(( _, index ) => {
        return ( <div
            key={index}
            style={{
                borderColor: `${color} transparent transparent transparent`,
                width: size * 0.8,
                height: size * 0.8,
                margin: size * 0.1,
                borderWidth: size * 0.1
            }}
        ></div>);
    });

    return ( <div className={`loader ${noPadding ? 'noPadding' : ''}`}>
        <div className="text-center">
            <div className={`rings ${className}`} style={{ width: size, height: size, ...style }}>
                {circles}
            </div>
        </div>
        <p className="text-primary text-bold">{loadingMsg}</p>
    </div>
    );
};

export default Loading;