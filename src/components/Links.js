import React from "react";



function Links({github, linkedin}){
    console.log(github)
    return (
<>
    <h3>Links</h3>
       { <a href={github}>GitHub</a>},
       { <a href={linkedin}>LinkedIn</a>}
    
</>
    )
}

export default Links;