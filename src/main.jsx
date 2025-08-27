import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Content from "./layouts/Content";
import './styles/index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Content />
  </StrictMode>,
)
