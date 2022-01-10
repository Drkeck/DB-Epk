import './index.css'

function Resume () {

    return(
        <div style={{height: '160px'}}>
            <div className="row res-con">
                <button className="col-8 view"><a href="https://docs.google.com/document/d/11Ho_Fqby3McO7FUkNGwa0JvcF8PdoBnxaJMmcbWPSyY/edit?usp=sharing" target="_blank" rel="noreferrer">View Resume</a></button>
                <h1 className="col-2 text-white or">Or</h1>
                <button className="col-2 download">
                    <a download href="/../../assets/pdf/jonathan_Toth_Resume.pdf">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" fill="currentColor" className="bi bi-download" viewBox="0 0 16 20">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg></a>
                </button>
            </div>
        </div>
    )
}

export default Resume