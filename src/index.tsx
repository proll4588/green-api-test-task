import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.scss'
import Layout from './Layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>
)
