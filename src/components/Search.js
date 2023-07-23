import React from 'react';

const Search = ({query,setquery,handleClick,style}) => {
 

  return (
    <>
    <div style={style} className='search-box' >
        <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png" alt="" />
        <input
         type="text"
          placeholder='search here..'
          value={query}
          onChange={(e) =>setquery( e.target.value)}
           />
        <div onClick={handleClick} className='button'><span>GO!</span></div>
    </div>
    </>
  );
};

export default Search;
