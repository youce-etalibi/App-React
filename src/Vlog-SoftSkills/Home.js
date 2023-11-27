import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const [toggle, setToggle] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const Vlogs = useSelector((state) => state.Vlogs);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  function ShowTable() {
    const filteredVlogs = Vlogs.filter((vlog) => {
      return (
        vlog.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vlog.Hour.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    if (toggle) {
      return (
        <center>
          <table className="table table-bordered tableShow bg-dark w-75">
          <caption>Qu'avez-vous fait ? </caption>
            <thead>
              <tr>
                <th>Jour</th>
                <th>Hour</th>
                <th>Title</th>
                <th>Description</th>
                <th>Images</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              {filteredVlogs.map((vlog) => (
                <tr key={vlog.id} className={vlog.day === 1 ? 'dayOne' : 'dayTwo'}>
                  <td>{vlog.day}</td>
                  <td>{vlog.Hour}</td>
                  <td>{vlog.Title}</td>
                  <td>{vlog.Description}</td>
                  <td><Link to={`/images/${vlog.Images}`}><button className="imagesBtn">Images</button></Link></td>
                  <td><Link to={`/update/${vlog.id}`}><button className="updateBtn">Update</button></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      );
    } else {
      return null;
    }
  }

  return (
    <Fragment>
      <div className="body">
        <div className="navbar">
          <img
            src={require(`../Images/img17.jpg`)}
            alt="Profile Picture"
          />
          <Link to='/ajoute'>
            <button className="ajoute">Ajoute</button>
          </Link>
          <button
            className="show"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "Hide" : "Show"}
          </button>
          <div className="searchDiv">
            <input
              type="text"
              className="search"
              placeholder="..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <i className="bx bx-search-alt-2 searchIcon"></i>
          </div>
        </div>
        <br />
        <div>{ShowTable()}</div>
      </div>
    </Fragment>
  );
}
