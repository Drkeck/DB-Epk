import DateParse from '../../util/date';
import './index.css'


const Portfolio = props => {
    
    const {
        albums
    } = props;

    return(            
    <div>
        <h2 className="portfolio-title">Recent Releases:</h2>
        <div className="portcon row">
            {
            albums && albums.map(album => (
                <a key={album.id} className="alsh albcon" href={album.external_urls.spotify} target="_blank" rel="noreferrer">
                    <img src={album.images[1].url} alt="album cover" className="album"/>
                    <div className="albumInfo">
                        <h2 className="albumTitle">{album.name}</h2>
                        <h3 className="releaseDate">{DateParse(album.release_date)}</h3>
                    </div>
                </a>
            ))
            }
        </div>
    </div>
    )
}

export default Portfolio