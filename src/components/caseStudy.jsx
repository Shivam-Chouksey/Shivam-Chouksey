import classes from './caseStudy.module.css'
import { Link } from 'react-router-dom'
import scrnst from '/Screenshot.png'
// import common from '/common-bg.svg'
export default function CaseStudy() {
    return (<>
        <div className={classes.caseStudy}>
            <div className={classes.firstDiv} >
                <h1>INTERNSHALA CLONE</h1>
                <span>This page contains the case study of INTERNSHALA CLONE Project which includes the Project Overview,
                    Tools Used and Live Links to the project.</span>
                <a href="https://shivam-chouksey.github.io/internClone/" >PROJECT LINK</a>
            </div>
            <div className={classes.secondDiv}>
                <img src={scrnst} alt="" />
                <h2>Project Overview</h2>
                <p>
                    Internshala Clone is a Demo project website with multi-page navigation ,which i have created from scratch using reactjs and react-router with responsive design
                    to showcase my proficiency in front-end Developement. <br />
                    Feel free to check out the Project by visiting the Project Link.
                </p>
                <h2>Tools Used</h2>
                <div className={classes.spanDiv}>
                    <span>ReactJs</span>
                    <span>React-Router</span>
                </div>
                <h2>See Live</h2>
                <div className={classes.btnDiv}>
                    <a href="https://shivam-chouksey.github.io/internClone/" >PROJECT LINK</a>
                    <Link to='/'>GO BACK</Link>
                </div>
            </div>
        </div >
    </>
    )
}