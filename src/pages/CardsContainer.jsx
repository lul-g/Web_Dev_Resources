import React from 'react';
import { useState, useEffect } from 'react';

import '../assets/card.css'


export default function CardsContainer({name, data}) {
    const [isVisible, setVisible] = useState(false)

    window.addEventListener('scroll', () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 500) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    })
    return (  
        <div className="container">
            <div className="data">
                {data.map((datum, index) => {
                    return (
                    <div key={index} className="data__child">
                        <h3 className="title title__md">{datum[0].identifier}</h3>
                        <div className="cards">
                            {datum.slice(1).map((obj, i) => {
                                return(<Card key={i} name={obj.name} tags={obj.tags} link={obj.link} featured={obj.featured} fav={obj.fav} description={obj.description}  />)
                            })}
                        </div>
                    </div>
                    )
                })}
            </div>
            <div 
                className={isVisible ? "to_top show": "show"}
                onClick={() => {
                    window.scrollTo(0, 'smooth')
                }}>
                <i className="fa-solid fa-up-long"></i>
            </div>
        </div>
    );
}

function Card({name, tags, link, featured, fav, description}) {
    return (
        <a target='_blank' href={link} className="card">
            <h3 className="name title__xmd title">{name}</h3>
            {tags && <div className="tags">
                {
                    tags.map((tag, index) => {
                        return (<div key={index} className={tag == "free" ? "tag free" : "tag"}>{tag}</div>)
                    })
                }
            </div>}
            {featured && <div className="featured tag">Featured</div>}
            {fav && <div className={fav == "developer's choice" ? "fav tag dev" : "fav tag"}>{fav}</div>}    
            {description && <div className="para desc">{description}</div>}    
        </a>
      );
}

