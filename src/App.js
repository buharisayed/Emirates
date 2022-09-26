

import FlightSearch from './components/FlightSearch';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body className='h-full bg-[#F6F6F6]'>

      <Navbar />
      <Hero />
      <FlightSearch/>   
      <Footer />     


      </body>
      </html>

    </div>
  );
}

export default App;
