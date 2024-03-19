import { useState } from "react";
import Link from "../../Link/Link";
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';

const NavBar = () => {

    const [open, setOpen] = useState();

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' },
    ];



    return (
        <nav className="text-black bg-yellow-200 p-6 mb-10">

            <div>
                <div onClick={() => setOpen(!open)} className="md:hidden text-3xl">
                    {
                        open === true ? <RiCloseLine></RiCloseLine> : <RiMenu2Line className=""></RiMenu2Line>
                    }

                </div>

                <ul className={`lg:flex absolute md:static duration-1000

                ${open ? 'top-16' : '-top-80'}
                
                bg-yellow-200 px-6`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;