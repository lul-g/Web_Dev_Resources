import React from 'react';
import { useState, useEffect } from 'react';

import links from '../assets/data/links.json'
import './css/card.css'


export default function CardsContainer({name, data}) {
    return (  
        <div className="container">
            <div className="data">
                {data.map((datum, index) => {
                    return (
                    <div key={index} className="data__child">
                        <h3 className="title title__md">{datum[0].identifier}</h3>
                        <div className="cards">
                            {datum.slice(1).map((obj, i) => {
                                return(<Card key={i} name={obj.name} tags={obj.tags} link={obj.link} featured={obj.featured} fav={obj.fav} />)
                            })}
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

function Card({name, tags, link, featured, fav}) {
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
            {fav && <div className="fav tag">{fav}</div>}    
        </a>
      );
}

