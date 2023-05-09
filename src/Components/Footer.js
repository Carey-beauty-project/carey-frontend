import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { SiTiktok } from 'react-icons/si'



function Footer() {
    return (
        <div className='footer-container' style={{width:'100%'}}>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the adventure to receive best service
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div  style={{display: 'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
                    <div className='footer-link-items' style={{width:'32%'}}>
                        <h2>About Us</h2>
                        <p style={{ color: 'white' }}>
                            Carey Beauty is fastest rising Makeup school in Kenya.
                            At Carey beauty academy we pride ourselves in providing
                            intensive beauty training that develops upcoming Makeup artist
                            into top professionals that gets recognize among the best in the
                            industry.
                            At our Academy we equip students with skills and techniques
                            necessary to succeed in the highly competitive makeup industry.
                        </p>
                    </div>
                    <div  style={{width:'32%'}}>
                        <div className='footer-link-items'>
                            <h2>Why Us</h2>
                            <p style={{ color: 'white' }}>
                                Learning is guaranteed at Carey Beauty as all our classes are small
                                size hence students gets a very interactive experience with our
                                highly experienced instructors.
                                At Carey Beauty we focus on hands-on practical learning. Our
                                instructors will guide you, but you will be able to work to create
                                your style and expand your creativity.
                            </p>
                        </div>

                    </div>


                    <div className='footer-link-items' style={{width:'32%'}}>
                        <p style={{ color: 'white' }}>
                            <h2>Talk To Us</h2>
                            For All Flawless Glam
                            Makeup Classes | Weddings | Special Events

                            PHONE 📞:+254 711 364 094

                            EMAIL:Careybeautyworld@gmail.com


                            <Link className="social-icon-link facebook"
                                to="https://web.facebook.com/careybeautyke/?_rdc=1&_rdr"
                                target="blank"
                                aria-labels="Facebook">
                                <i className='BsFacebook'></i>
                                <div className='icons flex gap-4 py-[1rem]'>
                                    <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-bluColor' />
                                    <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-bluColor' />
                                    <SiTiktok className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-bluColor' />
                                </div>
                            </Link>
                            <Link className="social-icon-link instagram"
                                to="https://www.instagram.com/careybeautyke/?hl=en"
                                target="blank"
                                aria-labels="Instagram">
                                <i className='AiFillInstagram '></i>
                            </Link>

                            <Link className="social-icon-link tiktok"
                                to="https://www.tiktok.com/@careypriscilla/video/7124262343328009478"
                                target="blank"
                                aria-labels="Tiktok">
                                <i className='SiTiktok'></i>
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
