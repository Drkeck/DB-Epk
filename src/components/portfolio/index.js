
function Portfolio () {
    let token = '73d269dc5bb344b588428ad19485c1b1'
    
   let info = fetch('https://api.spotify.com/v1/artist/79el7mcHYhXYW3Zek21i0L/albums' ,{
       Authorization: "Bearer " + token
   })
    console.log(info)
    return(
        <>
        {/* {info.map(item)} */}
        </>
    )
}

export default Portfolio