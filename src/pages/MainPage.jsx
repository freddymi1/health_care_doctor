import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Homepage from './components/Home/Homepage'
import NavBar from './Navbar/Navbar'

import { useEffect } from 'react'
import { useState } from 'react'
import WorkPage from './components/Work/WorkPage'
import AboutPage from './components/About/AboutPage'
import ShedulePage from './components/Shedule/ShedulePage'
import ReviewPage from './components/Reviews/ReviewPage'
import BlogPage from './components/Blog/BlogPage'
// import bg from '../assets/imgs/7 - footer/bg.png'
import Footer from './Footer/Footer'
import storage from '../env/firebase'
export default function MainPage() {
    const [logoh, setLogoh] = useState();
    const [headerImg, setHeaderImg] = useState()
    const [headerShape, setHeaderShape] = useState()
    const [icon1, setIcon1] = useState()
    const [icon2, setIcon2] = useState()
    const [icon3, setIcon3] = useState()
    const [icon4, setIcon4] = useState()
    const [about1, setAbout1] = useState()
    const [about2, setAbout2] = useState()
    const [about3, setAbout3] = useState()
    const [shed1, setShed1] = useState()
    const [shed2, setShed2] = useState()
    const [shed3, setShed3] = useState()
    const [rev1, setRev1] = useState()
    const [rev2, setRev2] = useState()
    const [b1, setB1] = useState()
    const [b2, setB2] = useState()
    const [b3, setB3] = useState()
    const [b4, setB4] = useState()
    const [b5, setB5] = useState()
    const [b6, setB6] = useState()
    const [b7, setB7] = useState()
    const [footer1, setFooter1] = useState()
    const [footer2, setFooter2] = useState()
    const [footer3, setFooter3] = useState()
    const [footer4, setFooter4] = useState()
    const [footer5, setFooter5] = useState()
    const [footer6, setFooter6] = useState()
    const [footer7, setFooter7] = useState()

    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        fetchImagesLogo()
        fetchImagesH()
        fetchImagesShH()
        fetchImagesIco1()
        fetchImagesIco2()
        fetchImagesIco3()
        fetchImagesIco4()
        fetchImagesAbout1()
        fetchImagesAbout2()
        fetchImagesAbout3()
        fetchImagesShedule1()
        fetchImagesShedule2()
        fetchImagesShedule3()
        fetchImagesReview1()
        fetchImagesReview2()
        fetchImagesBlog1()
        fetchImagesBlog2()
        fetchImagesBlog3()
        fetchImagesBlog4()
        fetchImagesBlog5()
        fetchImagesBlog6()
        fetchImagesBlog7()
        fetchImagesFooter1()
        fetchImagesFooter2()
        fetchImagesFooter3()
        fetchImagesFooter4()
        fetchImagesFooter5()
        fetchImagesFooter6()
        fetchImagesFooter7()
    }, []);
    
    // Fetch all image to home and navbar
    const fetchImagesLogo = async () => {
        await storage.ref('header/logo.png').getDownloadURL().then((res)=>{
            setLogoh(res);
        });
    };
    const fetchImagesH = async () => {
        await storage.ref('header/header.png').getDownloadURL().then((res)=>{
            setHeaderImg(res);
        });
    };
    const fetchImagesShH = async () => {
        await storage.ref('header/Shape.png').getDownloadURL().then((res)=>{
            setHeaderShape(res);
        });
    };
    // Fetch all image to work section
    const fetchImagesIco1 = async () => {
        await storage.ref('work/icon1.png').getDownloadURL().then((res)=>{
            setIcon1(res);
        });
        
    };
    const fetchImagesIco2 = async () => {
        await storage.ref('work/icon2.png').getDownloadURL().then((res)=>{
            setIcon2(res);

        });
    };
    const fetchImagesIco3 = async () => {
        await storage.ref('work/icon3.png').getDownloadURL().then((res)=>{
            setIcon3(res);

        });
    };
    const fetchImagesIco4 = async () => {
        storage.ref('work/icon4.png').getDownloadURL().then((res)=>{
            setIcon4(res);
        });
        
    };

    // Fetch all image to about page

    const fetchImagesAbout1 = async () => {
        await storage.ref('about/about.svg').getDownloadURL().then((res)=>{
            setAbout1(res);
        });
        
    };
    const fetchImagesAbout2 = async () => {
        await storage.ref('about/Vector.png').getDownloadURL().then((res)=>{
            setAbout2(res);
        });
        
    };
    const fetchImagesAbout3 = async () => {
        await storage.ref('about/star.png').getDownloadURL().then((res)=>{
            setAbout3(res);
        });
        
    };

    // Fetch all image to shedule page
    const fetchImagesShedule1 = async () => {
        await storage.ref('shedule/shedule.png').getDownloadURL().then((res)=>{
            setShed1(res);

        });
    }
    const fetchImagesShedule2 = async () => {
        await storage.ref('shedule/Icon.png').getDownloadURL().then((res)=>{
            setShed2(res);

        });
    }
    const fetchImagesShedule3 = async () => {
        await storage.ref('shedule/link.png').getDownloadURL().then((res)=>{
            setShed3(res);
        });
    }

    // Fetch all review image to testimonial
    const fetchImagesReview1 = async () => {
        await storage.ref('testmonial/testimonialbg.png').getDownloadURL().then((res)=>{
            setRev1(res);
        });
    }
    const fetchImagesReview2 = async () => {
        await storage.ref('testmonial/userPr.png').getDownloadURL().then((res)=>{
            setRev2(res);
        });
    }

    // Fetch all blog image to blog page
    
    const fetchImagesBlog1 = async () => {
        await storage.ref('blog/bl1.png').getDownloadURL().then((res)=>{
            setB1(res);
        });
    }
    const fetchImagesBlog2 = async () => {
        await storage.ref('blog/bl2.png').getDownloadURL().then((res)=>{
            setB2(res);

        });
    }
    const fetchImagesBlog3 = async () => {
        await storage.ref('blog/bl3.png').getDownloadURL().then((res)=>{
            setB3(res);
        });
    }
    const fetchImagesBlog4 = async () => {
        await storage.ref('blog/Blog5.png').getDownloadURL().then((res)=>{
            setB4(res);

        });
    }
    const fetchImagesBlog5 = async () => {
        await storage.ref('blog/Blog6.png').getDownloadURL().then((res)=>{
            setB5(res);

        });
    }
    const fetchImagesBlog6 = async () => {
        await storage.ref('blog/blog.png').getDownloadURL().then((res)=>{
            setB6(res);
        });
    }
    const fetchImagesBlog7 = async () => {
        await storage.ref('blog/usBl.png').getDownloadURL().then((res)=>{
            setB7(res);
        });
    }

    // Fetch all footer image

    const fetchImagesFooter1 = async () => {
        await storage.ref('footer/bg.png').getDownloadURL().then((res)=>{
            setFooter1(res);
        });
    }
    const fetchImagesFooter2 = async () => {
        await storage.ref('footer/twit.png').getDownloadURL().then((res)=>{
            setFooter2(res);
        });
    }
    const fetchImagesFooter3 = async () => {
        await storage.ref('footer/inst.png').getDownloadURL().then((res)=>{
            setFooter3(res);
        });
    }
    const fetchImagesFooter4 = async () => {
        await storage.ref('footer/fb.png').getDownloadURL().then((res)=>{
            setFooter4(res);
        });
    }
    const fetchImagesFooter5 = async () => {
        await storage.ref('footer/in.png').getDownloadURL().then((res)=>{
            setFooter5(res);
        });
    }
    const fetchImagesFooter6 = async () => {
        await storage.ref('footer/logo_b.png').getDownloadURL().then((res)=>{
            setFooter6(res);
        });
    }
    const fetchImagesFooter7 = async () => {
        await storage.ref('footer/send.png').getDownloadURL().then((res)=>{
            setFooter7(res);
        });
    }

    //Detect on scroll
    const detectScroll = ()=>{
        const scrollUp = document.getElementById("scroll-up")
        if(window.scrollY >= 560){
            scrollUp.classList.add("show__scrollUp")
        }else{
            scrollUp.classList.remove("show__scrollUp")
        }
    }

    window.addEventListener('scroll', detectScroll)

    return (
        <div>
             
             <div className="appPage">
                <NavBar logo={logoh}/>
                <main className="main">
                    <section className="home section" id="home">
                        <Homepage header={headerImg} shape={headerShape} />
                    </section>
                    <section className="section1 section" id="work">
                        <div className="_sect_title">
                            <h2 className="section__title">My Skill <span>depends</span> on work.</h2>
                            <p className="section__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,
                            </p>
                        </div>
                        <WorkPage icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} />
                    </section>
                    <section className="section2 section" id="about">
                        <AboutPage star={about3} phone={about2} about={about1} />
                    </section>
                    <section className="section3 section" id="schedule">
                        <ShedulePage shedule={shed1} vector={shed2} link={shed3}/>
                    </section>
                    <section className="section4 section" id="review">
                        <div className="_sect_title"> 
                            <h2 className="section__title">Let’s see what <span>patient</span> says!</h2>
                        </div>
                        <ReviewPage bg={rev1} userP={rev2}/>
                    </section>
                    <section className="section5 section" id="blog" style={{marginBottom:"4rem"}}>
                        <div className="_sect_title">  
                            <h2 className="section__title">Let’s see Our <span>latest</span> news</h2>
                        </div>
                        <BlogPage blog={b6} usBl={b7} bl1={b1} bl2={b2} bl3={b3} blog5={b4} blog6={b5} />
                    </section>
                    
                </main>
                <footer className="footer" style={{backgroundImage: `url(${footer1})`, backgroundRepeat:`no-repeat`, backgroundSize:"cover"}}>
                    <Footer  send={footer7} logof={footer6} twit={footer2} insta={footer3} fb={footer4} linked={footer5} />
                </footer>
                
            </div>
            <a href="#home" className="scrollup" id="scroll-up">
                <FaArrowUp className="scrollup__icon"/>
            </a>
        </div>
    )
}
