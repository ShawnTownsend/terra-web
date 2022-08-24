import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryclient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <QueryClientProvider client={queryclient}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
)
