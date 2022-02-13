import React from 'react'
import { makeStyles } from '@mui/styles'
import useWindowPosition from '../hook/useWindowPosition'
import AchievementImage from './AchievementImage'
import { Link as Scroll } from 'react-scroll'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { IconButton } from '@mui/material'
const useStyles = makeStyles((theme) => ({
    root: {

        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    }, goDown: {
        color: "#ffbb11",
        margin: "0% 15%",
        paddinf: "0% 40%",

    }
}));

export const Achievements = (props) => {
    let classes = useStyles();
    const checked = useWindowPosition("header")
    return (<>
        <div className={classes.root} id="destination-id">
            <div className="row text-align-center">
                <div className='col-lg-6 col-md-12 col-md-12'>
                    <AchievementImage comps={props.comps[0]} checked={props.checked} />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <AchievementImage comps={props.comps[1]} checked={props.checked} />
                </div>
            </div>

         </div>
        </>
        )
}
