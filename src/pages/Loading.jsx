import React from 'react';
import '../assets/loading.css'
function Loading() {
    return (
        <div className="loading">
            <div className="fade"></div>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
     );
}

export default Loading;