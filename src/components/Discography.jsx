import React from 'react'
import { records } from "../data/recordData";


const DiscographyCard = ({ record }) => {
    const { image, title, songs, release } = record;

    return (
        <article className='discograpy-card'>
            <div className="discography-image-container">
                <img className='discograpy-image' src={image} alt={title} />

            </div>
            <h2 className='discograpy-title'>{title}</h2>
            <p className='discography-release-year'>{release}</p>
            <p>{songs}</p>
        </article>
    )
}


const Discography = () => {
    return (
        <section>
            <h1 className='page-title'>Discography</h1>
            <div className='discography-container'>
                {records.map(record => <DiscographyCard record={record} />)}
            </div>
        </section>
    )
}

export default Discography