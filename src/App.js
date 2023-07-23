import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Showcase from './components/Showcase';
import axios from 'axios'


function App() {

  const imageUrls = [
    'https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1608764129330-5fa692919f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlc2t0b3AlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1521158614-186eebea87b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRlc2t0b3AlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGRlc2t0b3AlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',

  ];

  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const changeBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const imageUrl = imageUrls[randomIndex];
      setBackgroundImage(imageUrl);
    };
    changeBackgroundImage();
    const interval = setInterval(changeBackgroundImage, 10000);
    return () => clearInterval(interval);
  }, []);



  const api_key = '38413279-f805e512a68bb72f86231a2b4'
  const [query, setquery] = useState('')
  const [data, setdata] = useState([])
  const [state, setstate] = useState('none')
  const [heading, setheading] = useState('block')
  const [searchbox, setsearchbox] = useState({

    top: '45%',

    transform: 'translate(-50%, -45%)',
  })
  async function handleClick() {
    const trimmedQuery = query.trim();

    if (trimmedQuery === '') {

      setdata([]);
      setstate('none');
    } else {
      // console.log(", this is the query", trimmedQuery);
      const response = await axios.get(
        `https://pixabay.com/api/?key=${api_key}&q=${trimmedQuery}&image_type=photo&pretty=true`
      );
      setdata(response.data.hits);
      setstate('block');
      setquery('')
      setheading('none')
      setsearchbox({
        top: '20%',
        transform: 'translate(-50%, -20%)',
      })
      // console.log(data);
      // console.log(state);
    }
  }
  return (
    <>
      <div className="hero" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'opacity 1s ease',


      }}>
        <div className="overlay">



          <Navbar />
          <div style={{ display: heading }} className='heading-content'>
            <h1>Discover over 2,000,000 <br />free Stock Images</h1>
          </div>
          <Search style={searchbox} query={query} setquery={setquery} handleClick={handleClick} />
          {
            data.length !== 0 ? <Showcase data={data} /> : <h2 className='no-item-found' style={{ display: state }} >No item found</h2>
          }
        </div>

      </div>
    </>
  );
}

export default App;
