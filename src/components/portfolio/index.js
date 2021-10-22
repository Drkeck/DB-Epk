import { useEffect, useState } from "react";

const Portfolio = props => {
    
    const {
        albums
    } = props;

    console.log(albums)

    return(
        <div className="albcon">
            {
            albums && albums.map(album => (
                <div key={album.id}>
                    <img src={album.images[0].url} alt="album cover" className="album"/>
                    <h2>{album.name}</h2>
                </div>
            ))
            }
        </div>
    )
}

export default Portfolio