import './index.css'
const Portfolio = props => {
    
    const {
        albums
    } = props;

    console.log(albums)

    return(
        <div className="portcon row" >
            {
            albums && albums.map(album => (
                <div key={album.id} className="alsh albcon col-12">
                    <img src={album.images[1].url} alt="album cover" className="album"/>
                    <div className="albumInfo">
                        <h2 className="albumTitle">{album.name}</h2>
                        <h3 className="releaseDate">{album.release_date}</h3>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Portfolio