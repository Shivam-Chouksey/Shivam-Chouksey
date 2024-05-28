import { useRef, useState } from 'react'
import classes from './main.module.css'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from "framer-motion"
import { Link } from 'react-router-dom'
import profile from '/profile picture.jpg'
import download from '/download.png'
import Screenshot from '/Screenshot.png'
import { HashLink } from 'react-router-hash-link'
import common_bg from '/common-bg.svg'
export default function Main() {

    const [show, setShow] = useState(false)
    const form = useRef();
    const { scrollY } = useScroll()
    const getData = (evt) => {
        evt.preventDefault();
        emailjs.sendForm('Shivam_Chouksey', 'template_uo8frnh', form.current, 'Hs9j8EZKAbE9GyZQt')
            .then(() => {
                setShow(true);
                evt.target.reset();
                setTimeout(() => {
                    setShow(false)
                }, 1000)
            })
    }
    return (
        <>
            <nav>
                <div className={classes.leftDiv}>
                    <img src={profile} alt="" />
                    <span>SHIVAM CHOUKSEY</span>
                </div>
                <div className={classes.rightDiv}>
                    <ul>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg> */}

                        {/* <li><a href='#about'>ABOUT</a></li> */}
                        <li><HashLink to='#about'>ABOUT</HashLink></li>
                        <li><HashLink to='#project'>PROJECT</HashLink></li>
                        <li><HashLink to='#contact'>CONTACT</HashLink></li>

                    </ul>
                </div>
            </nav>
            <motion.div className={classes.introDiv}
                style={{ opacity: useTransform(scrollY, [0, 300, 500], [1, 0.8, .3]) }}
            >
                <div className={classes.intro_left}>
                    <a href="https://www.linkedin.com/in/shivam-chouksey-2a2527173"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></a>
                    <a href="https://github.com/Shivam-Chouksey"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg></a>
                    {/* <a href="">   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg></a> */}
                </div>
                <motion.div
                    initial={{ y: 40, opacity: 0, }}
                    animate={{ y: 0, opacity: 1, }}
                    transition={{ ease: 'linear', duration: .5 }}

                    className={classes.intro_right}>
                    <h1>HEY, I'M SHIVAM CHOUKSEY</h1>
                    <span>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</span>
                    {/* <a href="#project">PROJECTS</a> */}
                    <HashLink to='#project'>PROJECT</HashLink>
                </motion.div>
            </motion.div>

            <div className={classes.about} id='about'
            >
                <div className={classes.about1}>
                    <h1>ABOUT ME</h1>
                    <span>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
                </div>
                <div className={classes.about2}>
                    <motion.div
                        style={{
                            transformX: useTransform(scrollY, [-100], [100])
                        }}
                        className={classes.aboutDiv1} >
                        <h2> Get to know me!</h2>
                        <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                        </p>
                        <p> I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </p>
                        {/* <a href="#contact">CONTACT</a> */}
                        <HashLink to='#contact'>CONTACT</HashLink>
                    </motion.div>
                    <div className={classes.aboutDiv2}>
                        <h2>My Skills</h2>
                        <div className={classes.aboutDiv2underDiv}>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>ReactJs</span>
                            <span>Redux</span>
                            <span>Framer Motion</span>
                            <span>React Router</span>
                            <span>GIT</span>
                            <span>GitHub</span>
                            <span>Responsive Design</span>
                            <span>Bootstrap</span>
                            <span>DOM</span>
                        </div>
                    </div>
                </div>
            </div >

            <div className={classes.certification}>
                <h2>CERTIFICATION</h2>
                <span>Course - <img src={download} alt="" /> React - The Complete Guide 2023 (incl. React Router & Redux)</span><br />
                <span>Source - Udemy</span><br />
                <span>Completion Date - Oct/23</span><br />
                <button> <a href="certificate.pdf">Certificate link</a></button>
            </div>
            <div  className={classes.project} id='project'>
                <div className={classes.projectDiv1}>
                    <h2>PROJECTS</h2>
                    <span>Here you will find some of the personal projects that I have created with each project containing its own case study</span>
                </div>
                <div className={classes.projectDiv2}>
                    <div  className={classes.projectDiv2_1}>
                        <img src={Screenshot} alt="" />
                    </div>
                    <div className={classes.projectDiv2_2}>
                        <span>INTERNSHALA</span>
                        <p>Internshala is an online training and internship platform,which i have created from scratch using frontend tools</p>
                        <Link to={'/caseStudy'}><button>Case Study</button></Link>
                    </div>
                </div>
            </div>
            <div  className={classes.contact} id='contact'
            style={{backgroundImage:`url(${common_bg})`}}
            >
                <div className={classes.projectDiv1} id={classes.contactDiv1}>
                    <h2>CONTACT</h2>
                    <span>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</span>
                </div>
                <form action="" onSubmit={getData} ref={form}>

                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' placeholder='Enter Your Name' required name='user_name' autoFocus />
                    <label htmlFor="email">Email: </label>
                    <input type="email" id='email' placeholder='Enter Your Email' required name='user_email' />
                    <label htmlFor="message">Message: </label>
                    <input type="text" id='message' placeholder='Enter Your Message' required name='message' />
                    <div>
                        <button type='Submit'>{show ? 'Message sent successfully...' : 'Submit'}</button>

                    </div>
                </form>

            </div >

        </>
    )
}