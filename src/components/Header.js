import { React, useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { AppBar, IconButton, Toolbar, Zoom, Collapse } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Link as Scroll } from 'react-scroll'
const useStyles = makeStyles((themes) => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"rgba(0,0,0,0.5)",
        height: "100vh"
    },
    sipto: {
        flexGrow: "1",
        fontFamily: "'Redressed', cursive"

    },
    dao: {
        fontFamily: "'Montserrat', sans-serif",
        color: "#ffbb11"
    },
    appbar: {
        background: "none"
    },
    icon: {
        color: "white",

    }, appbarWrapper: {
        width: "80%",
        margin: "0 auto"
    },
    container: {
        textAlign: "center",
    },
    title: {
        color: "white",
        fontFamily: "'Montserrat', sans-serif",

        fontSize: "4.5rem"
    },
    goDown: {
        color: "#ffbb11",

    }
}));

export const Header = () => {

    let classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);

    }, [])
   
    return (
        <div className={classes.root} id="header">

                    <AppBar color="transparent" className={classes.appbar} elevation={0}>
                        <div> <Toolbar className={classes.appbarWrapper}>
                            <h1 className={classes.sipto}>sipto <span className={classes.dao}>DAO</span> </h1>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                                <IconButton >
                                    <SortIcon fontSize='large' className={classes.icon} />
                                </IconButton>
                            </button>



                        </Toolbar>

                        </div>
                        <Toolbar className={classes.appbarWrapper}><div styles={classes.appbarWrapper}>
                            <div className="collapse navbar-collapse text-align-center" id="navbarsExample01">
                                <ul className="navbar-nav me-auto mb-2">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </div></Toolbar>

                    </AppBar>
               



            <div>
                <Collapse in={checked}
                    {... (checked ? { timeout: 5000 } : {})}
                >

                    <div className={classes.container}>
                        <h1 className={classes.title} >Welcome to<br /><span className={classes.sipto}>sipto</span > <span className={classes.dao}>DAO</span></h1>
                        <Scroll to="destination-id" smooth={true}>
                            <IconButton>
                                <KeyboardDoubleArrowDownIcon fontSize='large' className={classes.goDown} />
                            </IconButton>
                        </Scroll>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}
