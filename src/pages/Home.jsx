import React from 'react';

function Home() {
    return ( 
        <div className="container">
            <div className="home data">
            <div className="txt">
                <h1 className='title title__md'>Welcome</h1>
                <p className='para intro'>Look around and use these links for your web projects. These websites/youtube videos have been my go to resources for over two years and they keep serving me to this day. Use them and make your life easier.</p>
            </div>
            <div className="cards">
                <div className="flex__child card name title__xmd title"><span className="title__md">15 +</span> <span className='para_2'>content resources</span></div>
                <div className="flex__child card name title__xmd title"><span className="title__md">9 +</span><span className='para_2'>learning resources</span></div>
            </div>
        </div>
        </div>
     );
}

export default Home;