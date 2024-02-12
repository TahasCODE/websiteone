import React from 'react'

import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechyStar.</h1>
                    <p>Solution to All of your Problems.</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>

                    <p>
                        We are your one and only solution to the tech problems
                        you face
                        everyday. We are leading tech company whose aim is to
                        increase the
                        problem solving ability in children.
                    </p>

                </div>
            </div>


            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Welcome to Techystar – your top-tier destination for cutting-edge technology services. At Techystar, we're dedicated to delivering innovative solutions that enhance your business's digital capabilities. Our team of experts is committed to staying ahead in the fast-paced digital landscape, offering services such as software development, IT consulting, and cybersecurity solutions.
                    Techystar specializes in crafting robust and scalable software solutions, from concept to implementation, tailored to your business goals. Navigating IT complexities is made easy with Techystar's consulting services, providing strategic insights to optimize your technology investments. Trust Techystar to safeguard your digital assets with state-of-the-art cybersecurity measures, protecting your business from evolving cyber threats.
                    At Techystar, we pride ourselves on our customer-centric approach. Our experienced professionals work closely with you to understand your objectives, ensuring that the solutions we provide exceed your expectations. Choose Techystar for a transformative journey into the world of digital innovation.</p>
                </div>
            </div>

           <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>

                <article>

                    <div style={{
                        animationDelay : "0.3s",
                        }}>
                      <AiFillGoogleCircle />
                      <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay : "0.5s",
                        }}>
                      <AiFillAmazonCircle />
                      <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay : "0.7s",
                        }}>
                      <AiFillYoutube />
                      <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay : "1s",
                        }}>
                            <AiFillInstagram />
                      <p>Instagram</p>
                    </div>

                </article>
            </div>
           </div>
        </>
    );
}

export default Home