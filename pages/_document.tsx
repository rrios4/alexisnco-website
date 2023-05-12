import { Html, Head, Main, NextScript } from 'next/document'
import image from '@/public/images/backgrounds/camo-purple.png'

export default function Document() {
  return (
    <Html lang="en" className='bg-purple-800' style={{ backgroundImage:`url('/images/backgrounds/camo-purple.png')`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}>
      <Head title='Alexis&Co'/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
