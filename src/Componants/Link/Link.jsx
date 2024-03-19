const Link = ({route}) => {
    return (
        <div>
            <li className="mr-7 hover:bg-yellow-500 px-4" key={route.id}>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;