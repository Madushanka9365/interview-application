import Link from 'next/link'
const Navbar = () => {
    return ( 

        <nav>
            <div className="logo">
                <h1>Employee Management App</h1>
            </div>
            <Link href="/"><a >Home</a></Link>
            <Link href="/views/addnewemployee"><a>Add</a></Link>
            <Link href="/views/allemployees"><a>View</a></Link>
            <Link href="/delete"><a>Delete</a></Link>
            <Link href="/update"><a>Update</a></Link>
        </nav>
     );
}
 
export default Navbar;