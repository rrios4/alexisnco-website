import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Layout from './components/Layout/Layout'

const colors = {
  brand: {
    900: '',
    800: '',
    700: '',
  }
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Layout>
        <App />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
)
