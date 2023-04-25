import React from 'react'
import { links, social } from './data'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'
import logo from './logo.svg'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="codding addict" className='logo'/>
        <button className='close-sidebar-btn' onClick={closeSidebar}><FaTimes /></button>
      </div>
      <ul className="links">
        {links.map(link => {
           const  {id, url, text, icon} = link;
          return <li key={id}><a href={url}>{icon}{text}</a></li>
        })}
      </ul>
      <ul className="social-links">
        {social.map(socialIcon => {
           const  {id, url, icon} = socialIcon;
          return <li key={id}><a href={url}>{icon}</a></li>
        })}
      </ul>
    </aside>
  )
}

export default Sidebar