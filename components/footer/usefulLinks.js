import Link from 'next/link';
var UsefulLink = (props) =>{
    return <>
        <div>
            <div className="title">{props.title}</div>
                <ul className="usefull-links">
                    {props.links.map((val)=>(<li><Link href="">{val}</Link></li>))}
                </ul>
        </div>
    </>
}

export default UsefulLink;
