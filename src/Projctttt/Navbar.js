import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar =() => {
    const mystyle={backgroundColor:"Black",color:"Red",padding:"10px",fontFamily:"Arial",
        display:"flex",justifyContent:"space-between",alignItems:"center"

    }
    return (
<div>
    <nav style={mystyle}>
        
        <Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link>
        <Link to="/about" style={{color:"white",textDecoration:"none"}}>About</Link>
        <Link to="/contact" style={{color:"white",textDecoration:"none"}}>Contact</Link>

    </nav>
</div>
    )
}
