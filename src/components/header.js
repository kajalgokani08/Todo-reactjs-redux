import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';

const Header = () => (
    // <div>
    // <p style={{fontSize:'15px', textAlign:'center'}}>TODO LIST</p>
    // </div>

<div style={{overflow:'hidden',backgroundColor:'#f1f1f1',padding:'20px 10px'}}>
<a href="#default" style={{ fontSize: '25px',fontWeight: 'bold'}}>List of Todo</a>
<div style={{float: 'right'}}>
  <a className="active" href="#todos">Todo</a>
</div>
</div> 
)

export default Header
