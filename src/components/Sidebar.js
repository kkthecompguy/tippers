import React,{  useState } from "react";
import { useNavigate } from "react-router";
import SidebarModal from "./SidebarModal";

const settingsOptions = [
  {
    link: '/users',
    name: 'Users'
  },
  {
    link: '/roles',
    name: 'Roles',
  },
  {
    link: '/permissions',
    name: 'Permissions',
  }
]

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleShowModal = () => setShowModal(!showModal);

  const onClickLink = (link) => navigate(link);


  return (
    <React.Fragment>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <h3><span className="lab la-accusoft"></span><span>Tippers</span></h3>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="/dashboard" className="active"><span className="las la-igloo"></span><span>Home</span></a>
            </li>
            <li>
              <span onClick={toggleShowModal} className="override-span"><span className="las la-cog px-2"></span><span>Settings</span></span>
              { showModal && <SidebarModal options={settingsOptions} onClickLink={onClickLink} />}
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;