import React, {useEffect, useState} from "react";

const Header = () => {
    return(
        <div>
            <h1> Strangers Things</h1>
            <Router>
                <Routes>
                    <Route path="/public/index.html" element = {<homePage/>}/>
                </Routes>                    
            </Router>
        </div>
    )
};

export default Header;