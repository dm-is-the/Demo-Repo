import { Link } from "react-router-dom";

export const Navbar =() => {
    const mystyle={backgroundColor:"gray",color:"black"}
    return (
<div>
    <nav style={mystyle}>
        <link to='/'>Home </link> &nbsp;
        <link to='/about'>About </link> &nbsp;
         <link to='/about/next'>Next page </link> &nbsp; 
    </nav>
</div>
    )
}
