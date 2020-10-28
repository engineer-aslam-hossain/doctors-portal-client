import {
  faCalendarWeek,
  faCog,
  faFileAlt,
  faSignOutAlt,
  faTh,
  faUserFriends,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import SplitPane from 'react-split-pane';
import DashBoardComponent from '../DashBoardComponent/DashBoardComponent';
import RecentAppointment from '../RecentAppointment/RecentAppointment';
import './DashBoard.css';
import CreateDoctor from '../CreateDoctor/CreateDoctor';
import { UserContext } from '../../App';
import { Link, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import fakeDoctor from '../../fakeData/fakeDoctor';
const DashBoard = () => {
  const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);

  /////////// add to database ////////

  /*  const handleAddDatabase = () => {
    fetch('https://doctors-portalserver.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fakeDoctor),
    })
      .then(result => result.json())
      .then(data => {
        console.log(data);
      });
  };
*/
  const handleLogout = () => {
    SetLoggedInUser('');
  };

  return (
    <div className='row dashboard'>
      <SplitPane split='vertical'>
        <div className='col-2 dashboardOptions  d-flex flex-column justify-content-between'>
          <div className='panelName'>
            <Link to='/dashboard'>
              <FontAwesomeIcon icon={faTh} /> Dashboard
            </Link>
            <Link to='/dashboard/recentAppointments'>
              <FontAwesomeIcon icon={faCalendarWeek} /> Appointments
            </Link>
            <p>
              <FontAwesomeIcon icon={faUserFriends} /> Patients
            </p>
            <p>
              <FontAwesomeIcon icon={faFileAlt} /> Prescriptions
            </p>
            <p>
              <FontAwesomeIcon icon={faCog} /> Settings
            </p>
            <Link to='/dashboard/createDoctor'>
              <FontAwesomeIcon icon={faUserPlus} /> Add Doctor
            </Link>
          </div>
          <div className='mt-auto' onClick={handleLogout}>
            <p>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </p>
          </div>
        </div>

        <div className='col-10 dashboardRight p-0'>
          <div className='dashboardDetails'>
            <div className='componentList' style={{ padding: '3rem' }}>
              <DashBoardComponent />
              <Switch>
                <Route path='/dashboard/createDoctor'>
                  <CreateDoctor />
                </Route>
                <Route path='/dashboard/recentAppointments'>
                  <RecentAppointment />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </SplitPane>
    </div>
  );
};

export default DashBoard;
