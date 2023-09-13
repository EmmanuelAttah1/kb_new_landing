'use client'

import Form from '@/Lib/Form';
import styles from './page.module.css';
import { useState, useRef,useEffect } from 'react';

import ReactGA from "react-ga4";

import { message } from 'antd';

const form_template={
    first_name:"",
    last_name:"",
    email:""
}

const url = "https://numiattah.pythonanywhere.com/subscribe/"

const image_url = "https://res.cloudinary.com/dtmsdunno/image/upload/"



export default function Home() {
  useEffect(()=>{
    ReactGA.initialize("G-Q1JHZG4Z5F");
  },[])

  const waitlist = useRef()
  const contactRef = useRef()
  const aboutRef = useRef()

  const goto_waitlist=()=>{
    waitlist.current.scrollIntoView({ behavior: "smooth" });
  }

  const goto_contact=()=>{
    contactRef.current.scrollIntoView({behavior:"smooth"})
  }

  const goto_about=()=>{
    aboutRef.current.scrollIntoView({behavior:"smooth"})
  }

  const currentDate = new Date().getFullYear();
  const [messageApi, contextHolder] = message.useMessage();

  const [subForm,setSubForm] = useState(form_template)
  const [loading,setLoading] = useState(false)

  const updateSubForm=(field,value)=>{
    const form = {...subForm}
    form[field] = value
    setSubForm(form)
  }

  const submitForm=()=>{
    subscribe()
  }

  async function subscribe(){
    const email = subForm['email']
    const first_name = subForm['first_name']
    const last_name = subForm['last_name']

    const form = new FormData()
    
    if(first_name.length > 0 && last_name.length > 0 && email.length > 0){
        if(email !== ""){
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (email.match(validRegex)) {

                setLoading(true)
                form.append("email",email)
                form.append("first_name",first_name)
                form.append("last_name",last_name)

                const res = await fetch(url, {
                method: "POST",
                body: form,
                })

                .then(response => {
                    setSubForm(form_template)
                    setLoading(false)
                    messageApi.open({
                        type: 'success',
                        content: "You've successfully joined our waitlist",
                        duration: 5
                    });
                })
            
            } else {
            
                messageApi.open({
                type: 'error',
                content: 'Enter a valid email address',
                duration: 5
                });
            
            }
        }
    }else{
        messageApi.open({
            type: 'error',
            content: 'Please fill all form fields',
            duration: 5
            });
    }
  }
  return (
    <div>
        {contextHolder}
        <div className={styles.navContainer}>
            {/* <Image alt="turtles" src="/logo.png" /> */}
            <img src = {`${image_url}v1694584524/logo_qrvo08.png`} alt='Knowledge-base logo'/>
            <nav>
                <a className={styles.highlighted} href=''>Home</a>
                <a href='#' onClick={goto_about}>About</a>
                <a href='#' onClick={goto_waitlist}>Join Wait-list</a>
                <a href='#' onClick={goto_contact}>Contact us</a>
            </nav>
        </div>

        <main className={styles.main}>
            <div className={styles.topSection}>
                <section className={styles.brief}>
                    <h1 >Ai Co-pilot for</h1>
                    <h1 className={styles.headingHeavy}>Instant Data Retrieval and </h1>
                    <h1  className={styles.headingHeavy}> Report Generation</h1>
                   
                    <p>
                        Swiftly finds information, answer questions,
                        generates reports, and make managing your data 
                        Seamless and effortless.
                    </p>
                    <button className={styles.primaryBtn} onClick={goto_waitlist}>Get Started</button>
                </section>
                <div className={styles.imageContainer}>
                    <img className={styles.smallImageTop} src={`${image_url}v1694584550/brain_quhauv.webp`} />
                    <img className={styles.mainImage} src={`${image_url}v1694584551/ai_sxagp9.webp`} />
                    <img className={styles.smallImageBottom} src={`${image_url}v1694584550/brain_quhauv.webp`} />
                </div>
            </div>
            <div className={styles.darkSection} ref={aboutRef}>
                <div className={styles.fancyText}>
                    <h1>Your very own </h1>
                    <h1 className={styles.headingHeavy}>Knowledge Base</h1>
                </div>
                <div className={styles.darkSectionBody}>
                    <h2>All your documents together in one place </h2>
                    <p>
                        No more hunting through scattered files and folders. Imagine the convenience of having your contracts, reports, invoices, and emails all neatly organized and instantly accessible with a few clicks.
                    </p>
                </div>

                <div className={styles.box}>
                    <img src={`${image_url}v1694584550/curve_d9dr7g.svg`} />
                    <img className={styles.boxImg2} src={`${image_url}v1694584550/curve_d9dr7g.svg`} />
                </div>
            </div>
            <div className={styles.lightSection2}>
                <section>
                    <h1 className='my-h1'>Eliminate stress 
                        and Boost productivity </h1> 
                    <p>
                        Free up precious time to focus on what truly matters. Let our AI agents draft reports and retrieve information for you.
                    </p>      
                </section>

                <div className = {styles.line}></div>
                <section>
                    <h1 className='my-h1'>Your Data Privacy is 
                        our concern. </h1> 
                    <p>
                    At KnowledgeBase, we self-host and operate our LLMs and AI systems, ensuring that none of your business information leaves our servers.
                    </p>      
                </section>
            </div>

            <div className={styles.blueScreenBottom} id="wait-list" ref={waitlist}>
                <section>
                    <h1>
                        Be Amongst <br/>
                        the first to experience <br />
                        <span>Knowledge Base</span>
                    </h1>
                </section>

                <section className={styles.formSection}>
                    <p>Get notified when we launch</p>
                    <Form loading={loading} submitForm={submitForm} updateSubForm={updateSubForm} data={subForm}/>
                </section>
            </div>
        </main>
        <footer className={styles.footer} id="contact" ref={contactRef}>
            <h3>Trinity X</h3>
            <div>
                <h3>Get more Information</h3>
                <p>Info@getknowledgebase.com</p>
            </div>
            <h3>© {currentDate}</h3>
        </footer>

    </div>

    
  )
}
