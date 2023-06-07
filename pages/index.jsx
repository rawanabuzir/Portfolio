import React from 'react';

import '../style/style.css';

import Particles from 'react-tsparticles';


const RawanPage = () => {
    const aboutLinkStyle = {
        textDecoration: 'none',
    };

    const handleResumeDownload = () => {
        window.location.href = '../assets/resume/rawanAbuzirflutter-resume.pdf';
    };

    return (
        <div id="particles-js">
            <div className="container">
                <div className="row">
                    <div className="col hero-img-section">
                        <img src="../assets/images/img.jpeg" alt="" className="hero-img" />
                    </div>
                    <div className="col hero-info-section">
                        <div className="text">
                            <h1 className="txt-logo">Rawan K. Abuzir</h1>
                            <h3 className="txt-name">&#127770; Software Engineer</h3>
                            <p className="txt-bio">
                                Hello, My name is Rawan Abuzir, and I am a software engineer, I'm based in Zarqa/Jordan. I hold a BSc in
                                software engineer from AHU.
                            </p>
                        </div>
                        <div className="socials">
                            <a className="slink" href="https://www.instagram.com/rawan_khaled_rs/?next=%2F" target="_blank">
                                <i className="fab fa-instagram-square"></i>
                            </a>
                            <br />
                            <a className="slink" href="https://www.linkedin.com/in/rawan-khaled-9a3252214/" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <br />
                            <a className="slink" href="https://github.com/rawanabuzir" target="_blank">
                                <i className="fab fa-github-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <center>
                    <a href="../pages/home.html" style={aboutLinkStyle}>
                        <button className="my-button">More About Me &#127802;</button>
                    </a>
                    <button className="my-button" onClick={handleResumeDownload}>
                        My Resume &#128193;
                    </button>
                </center>
            </div>
        </div>
    );
};

export default RawanPage;
