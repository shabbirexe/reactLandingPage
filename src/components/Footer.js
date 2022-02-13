import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { IconButton } from '@mui/material';
export const Footer = () => {
    let myStyle={
        width:"100%",
        marginLeft:"0",
        marginRight:"0",
        textAlign:"center",
        position:"absolute",
        bottom:"0%"
      }
    
  let styles={

    
}

  return (
   
    <div className="footer  widthh bg-dark text-align-center " style={myStyle} id="destt2" >
  <footer  className=" bg-dark flex-wrap justify-content-between align-items-center py-3 border-top">
    <div className="col-md-4 col-lg-12 align-items-center" style={styles}>
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <h1 >Logo</h1>
      </a>
      <span className="text-muted">&copy; 2021 Company, Inc</span>
    </div>

   
  </footer>
</div>

  
  )
}
