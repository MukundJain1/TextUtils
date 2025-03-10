import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <span className="navbar-brand" >{props.title}</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">{props.aboutTextUtils}</Link>
              </li>
              
  
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch text-${props.mode === 'light' ? "dark" : "light"}`}>
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode enable</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTextUtils: PropTypes.string,
}
Navbar.defaultProps = {
  title: "set title",
  aboutTextUtils: "about"
}


// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// export default function Navbar(props) {
//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           {props.title}
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/about">
//                 {props.aboutText}
//               </Link>
//             </li>
//           </ul>

//           {/* Enable Dark Mode */}
//           <div
//             className={`form-check form-switch text-${
//               props.mode === "light" ? "dark" : "light"
//             } mx-2`}
//           >
//             <input
//               className="form-check-input"
//               onClick={props.toggleMode}
//               type="checkbox"
//               role="switch"
//               id="flexSwitchCheckDefault"
//             />
//             <label
//               className="form-check-label"
//               htmlFor="flexSwitchCheckDefault"
//             >
//               DarkMode
//             </label>
//           </div>

//           {/* Search Button */}
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-primary" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };