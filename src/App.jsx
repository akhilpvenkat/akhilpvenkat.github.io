import './App.css'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'
import { FaGithub, FaDiscord, FaYoutube } from 'react-icons/fa'

function App() {
  return (
    <div className="center font-poppins" style={{ backgroundColor: '#e0f7fa', overflow: 'hidden' }}>
      <svg id="svg" width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="path" d="M0,160 Q360,100 720,160 T1440,160 V320 H0 Z" stroke="#007bff" strokeWidth="2" fill="rgba(0,123,255,0.1)"/>
        <path className="path" d="M0,200 Q360,140 720,200 T1440,200 V320 H0 Z" stroke="#007bff" strokeWidth="2" fill="rgba(0,123,255,0.05)"/>
        <path className="path" d="M0,240 Q360,180 720,240 T1440,240 V320 H0 Z" stroke="#007bff" strokeWidth="2" fill="rgba(0,123,255,0.03)"/>
      </svg>

      <div className="profile-container flex flex-row justify-center">
        <img src="/vite.svg" alt="Profile" className="logo" />

        <div className="aboutme-container">
          <h1 className="name">
            akhil pasumarthy
          </h1>
          <p className="ml-1 sm:pt-4 pt-0">
            Passionate developer and tech enthusiast. I love building creative projects and exploring new technologies.
          </p>
          <div className="icon-container">
            <a href="mailto:akhil.p.venkat@gmail.com">
              <MdEmail className="icon" />
            </a>
            <a href="https://github.com/akhilpvenkat">
              <FaGithub className="icon" />
            </a>
            <a href="https://discordapp.com/users/816498837156790283">
              <FaDiscord className="icon" />
            </a>
            <a href="https://www.youtube.com/@stealthninja1895">
              <FaYoutube className="icon" />
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          .path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: dash 30s linear forwards;
          }

          @keyframes dash {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
  )
}

export default App
