import React from 'react';

//arrow function with an implicit return
const Header = (props) => (
//const Header = ({ tageline, example }) => ( //can destructure the props into their own variables
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of"> Of </span>
                <span className="the"> The </span>
            </span>
            Day
        </h1>
        <h3 className={"tagline"}>
            <span>{props.tagline}</span>
            {/*when destructuring you can call by the given name*/}
            {/*<span>{tagline}</span>*/}
        </h3>
    </header>
);

//this is now a stateless functional component
// function Header(props) {
//     return (
//         <header className="top">
//             <h1>
//                 Catch
//                 <span className="ofThe">
//                         <span className="of"> Of </span>
//                         <span className="the"> The </span>
//                     </span>
//                 Day
//             </h1>
//             <h3 className={"tagline"}>
//                 <span>{props.tagline}</span>
//             </h3>
//         </header>
//     )
// }

export default Header;
