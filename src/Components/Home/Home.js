import React from "react";
import "./Home.css";
import firstLogo from "./firstLogo.png";
import firstImage from "./firstImage.png";
import fImage from "./fImage.png";
import sImage from "./sImage.png";
import tImage from "./tImage.png";
import b1Image from "./b1Image.png";
import b2Image from "./b2Image.png";
import C11 from "./C11.png";
import C22 from "./C22.png";
import C33 from "./C33.png";
import s1Image from "./s1Image.png";
import s2Image from "./s2Image.png";
import BgImage from "./BgImage.png";
import GImage from "./GImage.png";
import Quotation from "./Quotation.png";
import BC1Image from "./BC1Image.png";
import BC2Image from "./BC2Image.png";
import BC3Image from "./BC3Image.png";
import CallImage from './CallImage.png';
import EmailImage from './EmailImage.png';
import AddressImage from './AddressImage.png';
import FooterIcon from './FooterIcon.png';
import Button from '@mui/material/Button';


function Home() {
  return (
    <div>
      <header className="navbar">
<input type="checkbox" id="nav-toggle" style={{display: 'none'}} />
<label for="nav-toggle" className="hamburger">
  <span></span>
  <span></span>
  <span></span>
</label>

        <div className="navbar-left">
          <img src={firstLogo} alt="Logo" className="logo" />
        </div>
        <nav className="navbar-center">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About us</a>
          <a href="#service" className="nav-link">Service</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="navbar-right">
          <button className="quote-btn">Get a quote</button>
        </div>
      </header>

      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${firstImage})`,
        }}
        id="home"
      >
        <div className="hero-content">
          <h4>Quality Cleaning at a fair price</h4>
          <h1>Specialized, efficient, and thorough cleaning services</h1>
          <p>
            We provide performing cleaning tasks using the least amount of time, energy, and money.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Start Now</button>
             <Button sx={{textTransform:'none', color:'black', borderColor:'rgba(102, 102, 102, 1)'}} variant="outlined">View all Services</Button>
            {/* <button className="secondary-btn">View all Services</button> */}
          </div>
        </div>
      </section>

      <section className="services-section" id="service">
  <div className="services-header">
    <div className="header1">
      <h2>
        We Always Provide The  Best Service
      </h2>
    </div>
    <div className="header2">
      <h2>Services</h2>
      <p>
        While we can customize your cleaning plan to suit your needs,most clients schedule regular cleaning services.
      </p>
    </div>
  </div>
  <hr/>
  <div className="services-list">
    <div className="service-card">
      <img src={fImage} alt="Office Cleaning" />
      <h3>Office Cleaning</h3>
      <p>
       While we can customize your cleaning plan to suit your needs,most clients schedule regular cleaning services.
      </p>
      <button className="book-btn">
        Book Now
        <span className="arrow-icon">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
<path d="M11.1544 9.05401C11.1594 9.43624 11.4733 9.75012 11.8555 9.75508C12.2377 9.76005 12.5436 9.45421 12.5386 9.07198L12.4708 3.85192C12.4659 3.46969 12.152 3.15581 11.7697 3.15084L6.54968 3.08305C6.16744 3.07808 5.86161 3.38392 5.86657 3.76615C5.87154 4.14838 6.18542 4.46226 6.56765 4.46723L10.1169 4.51332L3.8766 10.7536C3.60983 11.0204 3.61552 11.4586 3.88931 11.7323C4.1631 12.0061 4.60131 12.0118 4.86807 11.7451L11.1083 5.50479L11.1544 9.05401Z" fill="#9D9D9D"/>
</svg>

</span>
      </button>
    </div>
    <div className="service-card">
      <img src={sImage} alt="Spring Cleaning" />
      <h3>Spring Cleaning</h3>
      <p>
        While we can customize your cleaning plan to suit your needs,most clients schedule regular cleaning services.
      </p>
      <button className="book-btn">
        Book Now
        <span className="arrow-icon">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none" >
<path d="M11.1544 9.05401C11.1594 9.43624 11.4733 9.75012 11.8555 9.75508C12.2377 9.76005 12.5436 9.45421 12.5386 9.07198L12.4708 3.85192C12.4659 3.46969 12.152 3.15581 11.7697 3.15084L6.54968 3.08305C6.16744 3.07808 5.86161 3.38392 5.86657 3.76615C5.87154 4.14838 6.18542 4.46226 6.56765 4.46723L10.1169 4.51332L3.8766 10.7536C3.60983 11.0204 3.61552 11.4586 3.88931 11.7323C4.1631 12.0061 4.60131 12.0118 4.86807 11.7451L11.1083 5.50479L11.1544 9.05401Z" fill="#9D9D9D"/>
</svg>
</span>

      </button>
    </div>
    <div className="service-card">
      <img src={tImage} alt="House Cleaning" />
      <h3>House Cleaning</h3>
      <p>
      While we can customize your cleaning plan to suit your needs,most clients schedule regular cleaning services.
      </p>
      <button className="book-btn">
        Book Now
        <span className="arrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
<path d="M11.1544 9.05401C11.1594 9.43624 11.4733 9.75012 11.8555 9.75508C12.2377 9.76005 12.5436 9.45421 12.5386 9.07198L12.4708 3.85192C12.4659 3.46969 12.152 3.15581 11.7697 3.15084L6.54968 3.08305C6.16744 3.07808 5.86161 3.38392 5.86657 3.76615C5.87154 4.14838 6.18542 4.46226 6.56765 4.46723L10.1169 4.51332L3.8766 10.7536C3.60983 11.0204 3.61552 11.4586 3.88931 11.7323C4.1631 12.0061 4.60131 12.0118 4.86807 11.7451L11.1083 5.50479L11.1544 9.05401Z" fill="#9D9D9D"/>
</svg>

 </span>
      </button>
      
    </div>
  </div>
        <div className="overlap-section">
  <div className="overlap-text">
    <span className="overlap-subtitle">Affordable cleaning solutions</span>
    <h2 className="overlap-title">
      High-Quality and Friendly 
      Services at Fair Prices
    </h2>
    <p className="overlap-desc">
      We provide comprehensive cleaning services tailored to your needs. From residential cleaning services
    </p>
    <button className="overlap-quote-btn">Get a quote</button>
  </div>
  <div className="overlap-images">
    <img src={b1Image} alt="Cleaning 2" className="overlap-img b1" />
    <img src={b2Image} alt="Cleaning 1" className="overlap-img b2" />
    </div>
</div>
  </section>

<section className="about-section" id="about">
      <div className="about-header-row">
        <div className="about-header-left">
          <h2>
            Effective Cleaning Requires an Expert Cleaning Team
          </h2>
        </div>
        <div className="about-header-right">
          <h4>Expert Team</h4>
          <p>
            We have professional expert cleaning staff ensuring top-notch cleanliness and hygiene for your space.
          </p>
        </div>
      </div>
      <hr className="about-divider" />
      <div className="about-team-cards">
        {/* Card 1 */}
        <div className="team-card">
          <img src={C11} alt="Erick Reynolds" className="team-img" />
          <div className="team-info">
            <h3>Erick Reynolds</h3>
            <div className="team-stars">
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
            </div>
            <p>
              He is an expert cleaning staff member who provides thorough cleaning with precision.
            </p>
            <div className="team-socials">
  <svg xmlns="http://www.w3.org/2000/svg" width="124" height="25" viewBox="0 0 124 25" fill="none">
<path d="M8.65015 12.6939V10.4023H10.5397V9.24991C10.5397 8.41778 10.8154 7.71016 11.3674 7.12591C11.9195 6.54203 12.5884 6.24991 13.3732 6.24991H15.2501V8.54191H13.3732C13.2509 8.54191 13.1405 8.60791 13.0424 8.73991C12.9442 8.87191 12.8951 9.03391 12.8951 9.22591V10.4019H15.2501V12.6935H12.8948V18.2499H10.5394V12.6939H8.65015Z" fill="#111D15"/>
<path d="M46.9671 11.3311L51.3383 6.24988H50.3023L46.507 10.6618L43.4755 6.24988H39.979L44.5632 12.9215L39.979 18.2499H41.0149L45.0231 13.5908L48.2245 18.2499H51.721L46.9668 11.3311H46.9671ZM45.5483 12.9802L45.0838 12.3159L41.3881 7.02969H42.9793L45.9615 11.2959L46.426 11.9602L50.3028 17.5055H48.7119L45.5483 12.9805V12.9802Z" fill="#111D15"/>
<g clip-path="url(#clip0_2025_99)">
<path d="M75.7947 6.21556C75.1314 6.24686 74.6785 6.35271 74.2825 6.5083C73.8727 6.66801 73.5254 6.88233 73.1798 7.22917C72.8342 7.57602 72.6213 7.92362 72.4628 8.33405C72.3093 8.73089 72.2053 9.18421 72.176 9.84786C72.1467 10.5115 72.1402 10.7248 72.1435 12.4177C72.1467 14.1105 72.1542 14.3227 72.1863 14.9877C72.218 15.6509 72.3235 16.1037 72.4791 16.4998C72.639 16.9096 72.8531 17.2568 73.2001 17.6025C73.5471 17.9483 73.8944 18.1606 74.3058 18.3194C74.7023 18.4726 75.1557 18.5771 75.8193 18.6062C76.4828 18.6352 76.6964 18.642 78.3887 18.6387C80.081 18.6355 80.2941 18.628 80.959 18.5964C81.6239 18.5649 82.0743 18.4587 82.4706 18.3038C82.8804 18.1435 83.2278 17.9298 83.5733 17.5827C83.9188 17.2356 84.1315 16.8878 84.29 16.4771C84.4436 16.0806 84.5479 15.6272 84.5767 14.9642C84.6058 14.2988 84.6126 14.0863 84.6094 12.3937C84.6061 10.7011 84.5985 10.4889 84.567 9.82417C84.5354 9.1594 84.4298 8.70795 84.2744 8.31161C84.1142 7.9018 83.9003 7.55483 83.5535 7.20885C83.2066 6.86288 82.8586 6.65031 82.448 6.49222C82.0513 6.33874 81.5981 6.23414 80.9346 6.20547C80.271 6.17679 80.0575 6.16943 78.3645 6.17268C76.6715 6.17592 76.4596 6.18315 75.7947 6.21556ZM75.8675 17.4847C75.2597 17.4583 74.9297 17.3573 74.7098 17.2728C74.4185 17.1606 74.2111 17.0249 73.9919 16.8079C73.7727 16.5908 73.6381 16.3826 73.5244 16.092C73.439 15.872 73.3361 15.5424 73.3077 14.9346C73.2768 14.2777 73.2703 14.0805 73.2667 12.4162C73.263 10.7519 73.2694 10.5549 73.2982 9.89773C73.3241 9.29043 73.4257 8.96004 73.5101 8.74024C73.6224 8.44862 73.7575 8.24154 73.9751 8.02248C74.1926 7.80343 74.4002 7.66853 74.6911 7.55483C74.9108 7.46905 75.2404 7.36707 75.8479 7.33814C76.5053 7.30697 76.7023 7.30074 78.3664 7.29712C80.0304 7.29351 80.2279 7.29974 80.8856 7.32867C81.4929 7.3551 81.8234 7.45571 82.0429 7.54061C82.3343 7.65282 82.5416 7.7876 82.7607 8.00553C82.9797 8.22346 83.1148 8.4303 83.2285 8.72179C83.3144 8.94084 83.4164 9.27036 83.445 9.87828C83.4763 10.5357 83.4834 10.7328 83.4864 12.3967C83.4894 14.0606 83.4836 14.2582 83.4548 14.9152C83.4282 15.523 83.3275 15.8531 83.2428 16.0733C83.1306 16.3644 82.9953 16.572 82.7776 16.7909C82.56 17.0098 82.3526 17.1447 82.0616 17.2584C81.8422 17.3441 81.5122 17.4463 80.9051 17.4752C80.2477 17.5062 80.0507 17.5126 78.3861 17.5163C76.7214 17.5199 76.525 17.5131 75.8676 17.4847M80.9494 9.074C80.9496 9.22196 80.9938 9.36652 81.0762 9.48941C81.1586 9.61229 81.2756 9.70797 81.4124 9.76436C81.5492 9.82074 81.6996 9.83529 81.8447 9.80616C81.9898 9.77704 82.1229 9.70555 82.2274 9.60073C82.3318 9.49591 82.4028 9.36248 82.4314 9.21731C82.46 9.07214 82.4449 8.92175 82.388 8.78516C82.3311 8.64857 82.235 8.53191 82.1118 8.44995C81.9886 8.36799 81.8439 8.3244 81.696 8.3247C81.4976 8.32509 81.3075 8.40425 81.1675 8.54477C81.0275 8.68528 80.9491 8.87564 80.9494 9.074ZM75.1757 12.4119C75.1792 14.1798 76.6149 15.6097 78.3825 15.6064C80.15 15.603 81.5809 14.1674 81.5775 12.3995C81.5741 10.6316 80.138 9.20129 78.3702 9.20478C76.6025 9.20827 75.1723 10.6443 75.1757 12.4119ZM76.2985 12.4097C76.2977 11.9987 76.4188 11.5967 76.6464 11.2545C76.8741 10.9124 77.1981 10.6454 77.5775 10.4874C77.9569 10.3293 78.3746 10.2874 78.7778 10.3667C79.1811 10.4461 79.5517 10.6433 79.8429 10.9333C80.1341 11.2234 80.3327 11.5932 80.4137 11.9961C80.4947 12.3991 80.4544 12.817 80.2978 13.197C80.1413 13.577 79.8756 13.902 79.5343 14.131C79.1931 14.3601 78.7916 14.4827 78.3806 14.4835C78.1077 14.4841 77.8374 14.4309 77.585 14.327C77.3327 14.2231 77.1033 14.0705 76.91 13.8779C76.7166 13.6853 76.5631 13.4565 76.4582 13.2046C76.3533 12.9527 76.299 12.6826 76.2985 12.4097Z" fill="#111D15"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M112.141 9.58678V10.9973C112.436 10.5473 112.844 10.1818 113.323 9.93646C113.802 9.69111 114.336 9.57434 114.874 9.59759C117.746 9.59759 118.367 11.3929 118.367 13.7285V18.4836H115.707V14.2679C115.707 13.2622 115.504 11.9689 113.938 11.9689C112.42 11.9689 112.16 13.0636 112.16 14.1931V18.4836H109.509V9.58678H112.141ZM107.728 7.35094C107.727 7.61442 107.649 7.87195 107.503 8.09122C107.357 8.3105 107.149 8.48177 106.906 8.58356C106.663 8.68454 106.396 8.71095 106.138 8.65944C105.88 8.60793 105.643 8.48083 105.458 8.29432C105.272 8.10768 105.145 7.87026 105.094 7.6119C105.043 7.35354 105.069 7.08578 105.169 6.84229C105.27 6.5988 105.44 6.39045 105.659 6.24344C105.877 6.09643 106.134 6.01733 106.398 6.01608C106.573 6.01608 106.746 6.05064 106.908 6.11779C107.069 6.18493 107.216 6.28334 107.34 6.40735C107.463 6.53137 107.561 6.67857 107.628 6.84049C107.694 7.00241 107.728 7.17588 107.728 7.35094Z" fill="#111D15"/>
<path d="M107.728 9.59772H105.068V18.4837H107.728V9.59772Z" fill="#111D15"/>
<defs>
<clipPath id="clip0_2025_99">
<rect width="12.4675" height="12.4675" fill="white" transform="translate(72.1427 6.17197)"/>
</clipPath>
</defs>
</svg>
</div>

          </div>
        </div>
        {/* Card 2 */}
        <div className="team-card">
          <img src={C22} alt="Erick Reynolds" className="team-img" />
          <div className="team-info">
            <h3>Erick Reynolds</h3>
            <div className="team-stars">
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
            </div>
            <p>
              He is an expert cleaning staff member who provides thorough cleaning with precision.
            </p>
            <div className="team-socials">
 <svg xmlns="http://www.w3.org/2000/svg" width="124" height="25" viewBox="0 0 124 25" fill="none">
<path d="M8.65015 12.6939V10.4023H10.5397V9.24991C10.5397 8.41778 10.8154 7.71016 11.3674 7.12591C11.9195 6.54203 12.5884 6.24991 13.3732 6.24991H15.2501V8.54191H13.3732C13.2509 8.54191 13.1405 8.60791 13.0424 8.73991C12.9442 8.87191 12.8951 9.03391 12.8951 9.22591V10.4019H15.2501V12.6935H12.8948V18.2499H10.5394V12.6939H8.65015Z" fill="#111D15"/>
<path d="M46.9671 11.3311L51.3383 6.24988H50.3023L46.507 10.6618L43.4755 6.24988H39.979L44.5632 12.9215L39.979 18.2499H41.0149L45.0231 13.5908L48.2245 18.2499H51.721L46.9668 11.3311H46.9671ZM45.5483 12.9802L45.0838 12.3159L41.3881 7.02969H42.9793L45.9615 11.2959L46.426 11.9602L50.3028 17.5055H48.7119L45.5483 12.9805V12.9802Z" fill="#111D15"/>
<g clip-path="url(#clip0_2025_99)">
<path d="M75.7947 6.21556C75.1314 6.24686 74.6785 6.35271 74.2825 6.5083C73.8727 6.66801 73.5254 6.88233 73.1798 7.22917C72.8342 7.57602 72.6213 7.92362 72.4628 8.33405C72.3093 8.73089 72.2053 9.18421 72.176 9.84786C72.1467 10.5115 72.1402 10.7248 72.1435 12.4177C72.1467 14.1105 72.1542 14.3227 72.1863 14.9877C72.218 15.6509 72.3235 16.1037 72.4791 16.4998C72.639 16.9096 72.8531 17.2568 73.2001 17.6025C73.5471 17.9483 73.8944 18.1606 74.3058 18.3194C74.7023 18.4726 75.1557 18.5771 75.8193 18.6062C76.4828 18.6352 76.6964 18.642 78.3887 18.6387C80.081 18.6355 80.2941 18.628 80.959 18.5964C81.6239 18.5649 82.0743 18.4587 82.4706 18.3038C82.8804 18.1435 83.2278 17.9298 83.5733 17.5827C83.9188 17.2356 84.1315 16.8878 84.29 16.4771C84.4436 16.0806 84.5479 15.6272 84.5767 14.9642C84.6058 14.2988 84.6126 14.0863 84.6094 12.3937C84.6061 10.7011 84.5985 10.4889 84.567 9.82417C84.5354 9.1594 84.4298 8.70795 84.2744 8.31161C84.1142 7.9018 83.9003 7.55483 83.5535 7.20885C83.2066 6.86288 82.8586 6.65031 82.448 6.49222C82.0513 6.33874 81.5981 6.23414 80.9346 6.20547C80.271 6.17679 80.0575 6.16943 78.3645 6.17268C76.6715 6.17592 76.4596 6.18315 75.7947 6.21556ZM75.8675 17.4847C75.2597 17.4583 74.9297 17.3573 74.7098 17.2728C74.4185 17.1606 74.2111 17.0249 73.9919 16.8079C73.7727 16.5908 73.6381 16.3826 73.5244 16.092C73.439 15.872 73.3361 15.5424 73.3077 14.9346C73.2768 14.2777 73.2703 14.0805 73.2667 12.4162C73.263 10.7519 73.2694 10.5549 73.2982 9.89773C73.3241 9.29043 73.4257 8.96004 73.5101 8.74024C73.6224 8.44862 73.7575 8.24154 73.9751 8.02248C74.1926 7.80343 74.4002 7.66853 74.6911 7.55483C74.9108 7.46905 75.2404 7.36707 75.8479 7.33814C76.5053 7.30697 76.7023 7.30074 78.3664 7.29712C80.0304 7.29351 80.2279 7.29974 80.8856 7.32867C81.4929 7.3551 81.8234 7.45571 82.0429 7.54061C82.3343 7.65282 82.5416 7.7876 82.7607 8.00553C82.9797 8.22346 83.1148 8.4303 83.2285 8.72179C83.3144 8.94084 83.4164 9.27036 83.445 9.87828C83.4763 10.5357 83.4834 10.7328 83.4864 12.3967C83.4894 14.0606 83.4836 14.2582 83.4548 14.9152C83.4282 15.523 83.3275 15.8531 83.2428 16.0733C83.1306 16.3644 82.9953 16.572 82.7776 16.7909C82.56 17.0098 82.3526 17.1447 82.0616 17.2584C81.8422 17.3441 81.5122 17.4463 80.9051 17.4752C80.2477 17.5062 80.0507 17.5126 78.3861 17.5163C76.7214 17.5199 76.525 17.5131 75.8676 17.4847M80.9494 9.074C80.9496 9.22196 80.9938 9.36652 81.0762 9.48941C81.1586 9.61229 81.2756 9.70797 81.4124 9.76436C81.5492 9.82074 81.6996 9.83529 81.8447 9.80616C81.9898 9.77704 82.1229 9.70555 82.2274 9.60073C82.3318 9.49591 82.4028 9.36248 82.4314 9.21731C82.46 9.07214 82.4449 8.92175 82.388 8.78516C82.3311 8.64857 82.235 8.53191 82.1118 8.44995C81.9886 8.36799 81.8439 8.3244 81.696 8.3247C81.4976 8.32509 81.3075 8.40425 81.1675 8.54477C81.0275 8.68528 80.9491 8.87564 80.9494 9.074ZM75.1757 12.4119C75.1792 14.1798 76.6149 15.6097 78.3825 15.6064C80.15 15.603 81.5809 14.1674 81.5775 12.3995C81.5741 10.6316 80.138 9.20129 78.3702 9.20478C76.6025 9.20827 75.1723 10.6443 75.1757 12.4119ZM76.2985 12.4097C76.2977 11.9987 76.4188 11.5967 76.6464 11.2545C76.8741 10.9124 77.1981 10.6454 77.5775 10.4874C77.9569 10.3293 78.3746 10.2874 78.7778 10.3667C79.1811 10.4461 79.5517 10.6433 79.8429 10.9333C80.1341 11.2234 80.3327 11.5932 80.4137 11.9961C80.4947 12.3991 80.4544 12.817 80.2978 13.197C80.1413 13.577 79.8756 13.902 79.5343 14.131C79.1931 14.3601 78.7916 14.4827 78.3806 14.4835C78.1077 14.4841 77.8374 14.4309 77.585 14.327C77.3327 14.2231 77.1033 14.0705 76.91 13.8779C76.7166 13.6853 76.5631 13.4565 76.4582 13.2046C76.3533 12.9527 76.299 12.6826 76.2985 12.4097Z" fill="#111D15"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M112.141 9.58678V10.9973C112.436 10.5473 112.844 10.1818 113.323 9.93646C113.802 9.69111 114.336 9.57434 114.874 9.59759C117.746 9.59759 118.367 11.3929 118.367 13.7285V18.4836H115.707V14.2679C115.707 13.2622 115.504 11.9689 113.938 11.9689C112.42 11.9689 112.16 13.0636 112.16 14.1931V18.4836H109.509V9.58678H112.141ZM107.728 7.35094C107.727 7.61442 107.649 7.87195 107.503 8.09122C107.357 8.3105 107.149 8.48177 106.906 8.58356C106.663 8.68454 106.396 8.71095 106.138 8.65944C105.88 8.60793 105.643 8.48083 105.458 8.29432C105.272 8.10768 105.145 7.87026 105.094 7.6119C105.043 7.35354 105.069 7.08578 105.169 6.84229C105.27 6.5988 105.44 6.39045 105.659 6.24344C105.877 6.09643 106.134 6.01733 106.398 6.01608C106.573 6.01608 106.746 6.05064 106.908 6.11779C107.069 6.18493 107.216 6.28334 107.34 6.40735C107.463 6.53137 107.561 6.67857 107.628 6.84049C107.694 7.00241 107.728 7.17588 107.728 7.35094Z" fill="#111D15"/>
<path d="M107.728 9.59772H105.068V18.4837H107.728V9.59772Z" fill="#111D15"/>
<defs>
<clipPath id="clip0_2025_99">
<rect width="12.4675" height="12.4675" fill="white" transform="translate(72.1427 6.17197)"/>
</clipPath>
</defs>
</svg>
</div>

          </div>
        </div>
        {/* Card 3 */}
        <div className="team-card">
          <img src={C33} alt="Erick Reynolds" className="team-img" />
          <div className="team-info">
            <h3>Erick Reynolds</h3>
            <div className="team-stars">
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
              <span style={{ color: "#FFD700", fontSize: "18px" }}>★</span>
            </div>
            <p>
              He is an expert cleaning staff member who provides thorough cleaning with precision.
            </p>
            <div className="team-socials">
  <svg xmlns="http://www.w3.org/2000/svg" width="124" height="25" viewBox="0 0 124 25" fill="none">
<path d="M8.65015 12.6939V10.4023H10.5397V9.24991C10.5397 8.41778 10.8154 7.71016 11.3674 7.12591C11.9195 6.54203 12.5884 6.24991 13.3732 6.24991H15.2501V8.54191H13.3732C13.2509 8.54191 13.1405 8.60791 13.0424 8.73991C12.9442 8.87191 12.8951 9.03391 12.8951 9.22591V10.4019H15.2501V12.6935H12.8948V18.2499H10.5394V12.6939H8.65015Z" fill="#111D15"/>
<path d="M46.9671 11.3311L51.3383 6.24988H50.3023L46.507 10.6618L43.4755 6.24988H39.979L44.5632 12.9215L39.979 18.2499H41.0149L45.0231 13.5908L48.2245 18.2499H51.721L46.9668 11.3311H46.9671ZM45.5483 12.9802L45.0838 12.3159L41.3881 7.02969H42.9793L45.9615 11.2959L46.426 11.9602L50.3028 17.5055H48.7119L45.5483 12.9805V12.9802Z" fill="#111D15"/>
<g clip-path="url(#clip0_2025_99)">
<path d="M75.7947 6.21556C75.1314 6.24686 74.6785 6.35271 74.2825 6.5083C73.8727 6.66801 73.5254 6.88233 73.1798 7.22917C72.8342 7.57602 72.6213 7.92362 72.4628 8.33405C72.3093 8.73089 72.2053 9.18421 72.176 9.84786C72.1467 10.5115 72.1402 10.7248 72.1435 12.4177C72.1467 14.1105 72.1542 14.3227 72.1863 14.9877C72.218 15.6509 72.3235 16.1037 72.4791 16.4998C72.639 16.9096 72.8531 17.2568 73.2001 17.6025C73.5471 17.9483 73.8944 18.1606 74.3058 18.3194C74.7023 18.4726 75.1557 18.5771 75.8193 18.6062C76.4828 18.6352 76.6964 18.642 78.3887 18.6387C80.081 18.6355 80.2941 18.628 80.959 18.5964C81.6239 18.5649 82.0743 18.4587 82.4706 18.3038C82.8804 18.1435 83.2278 17.9298 83.5733 17.5827C83.9188 17.2356 84.1315 16.8878 84.29 16.4771C84.4436 16.0806 84.5479 15.6272 84.5767 14.9642C84.6058 14.2988 84.6126 14.0863 84.6094 12.3937C84.6061 10.7011 84.5985 10.4889 84.567 9.82417C84.5354 9.1594 84.4298 8.70795 84.2744 8.31161C84.1142 7.9018 83.9003 7.55483 83.5535 7.20885C83.2066 6.86288 82.8586 6.65031 82.448 6.49222C82.0513 6.33874 81.5981 6.23414 80.9346 6.20547C80.271 6.17679 80.0575 6.16943 78.3645 6.17268C76.6715 6.17592 76.4596 6.18315 75.7947 6.21556ZM75.8675 17.4847C75.2597 17.4583 74.9297 17.3573 74.7098 17.2728C74.4185 17.1606 74.2111 17.0249 73.9919 16.8079C73.7727 16.5908 73.6381 16.3826 73.5244 16.092C73.439 15.872 73.3361 15.5424 73.3077 14.9346C73.2768 14.2777 73.2703 14.0805 73.2667 12.4162C73.263 10.7519 73.2694 10.5549 73.2982 9.89773C73.3241 9.29043 73.4257 8.96004 73.5101 8.74024C73.6224 8.44862 73.7575 8.24154 73.9751 8.02248C74.1926 7.80343 74.4002 7.66853 74.6911 7.55483C74.9108 7.46905 75.2404 7.36707 75.8479 7.33814C76.5053 7.30697 76.7023 7.30074 78.3664 7.29712C80.0304 7.29351 80.2279 7.29974 80.8856 7.32867C81.4929 7.3551 81.8234 7.45571 82.0429 7.54061C82.3343 7.65282 82.5416 7.7876 82.7607 8.00553C82.9797 8.22346 83.1148 8.4303 83.2285 8.72179C83.3144 8.94084 83.4164 9.27036 83.445 9.87828C83.4763 10.5357 83.4834 10.7328 83.4864 12.3967C83.4894 14.0606 83.4836 14.2582 83.4548 14.9152C83.4282 15.523 83.3275 15.8531 83.2428 16.0733C83.1306 16.3644 82.9953 16.572 82.7776 16.7909C82.56 17.0098 82.3526 17.1447 82.0616 17.2584C81.8422 17.3441 81.5122 17.4463 80.9051 17.4752C80.2477 17.5062 80.0507 17.5126 78.3861 17.5163C76.7214 17.5199 76.525 17.5131 75.8676 17.4847M80.9494 9.074C80.9496 9.22196 80.9938 9.36652 81.0762 9.48941C81.1586 9.61229 81.2756 9.70797 81.4124 9.76436C81.5492 9.82074 81.6996 9.83529 81.8447 9.80616C81.9898 9.77704 82.1229 9.70555 82.2274 9.60073C82.3318 9.49591 82.4028 9.36248 82.4314 9.21731C82.46 9.07214 82.4449 8.92175 82.388 8.78516C82.3311 8.64857 82.235 8.53191 82.1118 8.44995C81.9886 8.36799 81.8439 8.3244 81.696 8.3247C81.4976 8.32509 81.3075 8.40425 81.1675 8.54477C81.0275 8.68528 80.9491 8.87564 80.9494 9.074ZM75.1757 12.4119C75.1792 14.1798 76.6149 15.6097 78.3825 15.6064C80.15 15.603 81.5809 14.1674 81.5775 12.3995C81.5741 10.6316 80.138 9.20129 78.3702 9.20478C76.6025 9.20827 75.1723 10.6443 75.1757 12.4119ZM76.2985 12.4097C76.2977 11.9987 76.4188 11.5967 76.6464 11.2545C76.8741 10.9124 77.1981 10.6454 77.5775 10.4874C77.9569 10.3293 78.3746 10.2874 78.7778 10.3667C79.1811 10.4461 79.5517 10.6433 79.8429 10.9333C80.1341 11.2234 80.3327 11.5932 80.4137 11.9961C80.4947 12.3991 80.4544 12.817 80.2978 13.197C80.1413 13.577 79.8756 13.902 79.5343 14.131C79.1931 14.3601 78.7916 14.4827 78.3806 14.4835C78.1077 14.4841 77.8374 14.4309 77.585 14.327C77.3327 14.2231 77.1033 14.0705 76.91 13.8779C76.7166 13.6853 76.5631 13.4565 76.4582 13.2046C76.3533 12.9527 76.299 12.6826 76.2985 12.4097Z" fill="#111D15"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M112.141 9.58678V10.9973C112.436 10.5473 112.844 10.1818 113.323 9.93646C113.802 9.69111 114.336 9.57434 114.874 9.59759C117.746 9.59759 118.367 11.3929 118.367 13.7285V18.4836H115.707V14.2679C115.707 13.2622 115.504 11.9689 113.938 11.9689C112.42 11.9689 112.16 13.0636 112.16 14.1931V18.4836H109.509V9.58678H112.141ZM107.728 7.35094C107.727 7.61442 107.649 7.87195 107.503 8.09122C107.357 8.3105 107.149 8.48177 106.906 8.58356C106.663 8.68454 106.396 8.71095 106.138 8.65944C105.88 8.60793 105.643 8.48083 105.458 8.29432C105.272 8.10768 105.145 7.87026 105.094 7.6119C105.043 7.35354 105.069 7.08578 105.169 6.84229C105.27 6.5988 105.44 6.39045 105.659 6.24344C105.877 6.09643 106.134 6.01733 106.398 6.01608C106.573 6.01608 106.746 6.05064 106.908 6.11779C107.069 6.18493 107.216 6.28334 107.34 6.40735C107.463 6.53137 107.561 6.67857 107.628 6.84049C107.694 7.00241 107.728 7.17588 107.728 7.35094Z" fill="#111D15"/>
<path d="M107.728 9.59772H105.068V18.4837H107.728V9.59772Z" fill="#111D15"/>
<defs>
<clipPath id="clip0_2025_99">
<rect width="12.4675" height="12.4675" fill="white" transform="translate(72.1427 6.17197)"/>
</clipPath>
</defs>
</svg>
</div>
          </div>
        </div>
      </div>

{/* <div className="overlap-section2">

  <h2 className="overlap-title">

    Welcome To Our Pro-cleaning Company! 
  </h2>
  <p className="overlap-desc2">
    We make your space shine!Professional and reliable cleaning service company providing top-notch solutions for homes and businesses.Satisfaction guaranteed!
  </p>
</div> */}

<div className="about-pro-section" id="about">
  <div className="about-pro-images">
    <div className="about-pro-img-main">
      <img src={s1Image} alt="Team" />
    </div>
    <div className="about-pro-img-small">
      <img src={s2Image} alt="Cleaning" />
    </div>
  </div>
  <div className="about-pro-content">
    <h2>Welcome To Our<br />Pro-cleaning Company!</h2>
    <p>
      We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!
    </p>
    <div className="about-pro-features">
      <div>
        <div className="about-pro-feature"><span className="about-pro-check"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
<circle cx="6.5" cy="6.50018" r="6" fill="#36B864"/>
<path d="M5.39158 8.53217L5.3922 8.53148L3.72472 6.66241C3.66842 6.59718 3.63724 6.50977 3.63789 6.41901C3.63853 6.32826 3.67095 6.24142 3.72817 6.1772C3.78538 6.11298 3.86281 6.07652 3.94377 6.07567C4.02474 6.07481 4.10276 6.10964 4.16104 6.17265L5.82852 8.04206L9.10388 4.37141C9.13237 4.33836 9.16644 4.31199 9.20412 4.29385C9.24179 4.27571 9.28231 4.26616 9.32331 4.26576C9.36431 4.26536 9.40497 4.27412 9.44292 4.29152C9.48087 4.30893 9.51535 4.33463 9.54434 4.36712C9.57334 4.39962 9.59627 4.43827 9.61179 4.48081C9.62732 4.52334 9.63513 4.56892 9.63478 4.61488C9.63442 4.66084 9.6259 4.70626 9.60972 4.74848C9.59353 4.79071 9.57001 4.82891 9.54052 4.86083L6.04653 8.77688C5.98862 8.84177 5.91009 8.87822 5.82821 8.87822C5.74633 8.87822 5.6678 8.84177 5.60989 8.77688L5.39158 8.53217Z" fill="white"/>
</svg></span> Vetted professionals</div>
        <div className="about-pro-feature"><span className="about-pro-check"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
<circle cx="6.5" cy="6.50018" r="6" fill="#36B864"/>
<path d="M5.39158 8.53217L5.3922 8.53148L3.72472 6.66241C3.66842 6.59718 3.63724 6.50977 3.63789 6.41901C3.63853 6.32826 3.67095 6.24142 3.72817 6.1772C3.78538 6.11298 3.86281 6.07652 3.94377 6.07567C4.02474 6.07481 4.10276 6.10964 4.16104 6.17265L5.82852 8.04206L9.10388 4.37141C9.13237 4.33836 9.16644 4.31199 9.20412 4.29385C9.24179 4.27571 9.28231 4.26616 9.32331 4.26576C9.36431 4.26536 9.40497 4.27412 9.44292 4.29152C9.48087 4.30893 9.51535 4.33463 9.54434 4.36712C9.57334 4.39962 9.59627 4.43827 9.61179 4.48081C9.62732 4.52334 9.63513 4.56892 9.63478 4.61488C9.63442 4.66084 9.6259 4.70626 9.60972 4.74848C9.59353 4.79071 9.57001 4.82891 9.54052 4.86083L6.04653 8.77688C5.98862 8.84177 5.91009 8.87822 5.82821 8.87822C5.74633 8.87822 5.6678 8.84177 5.60989 8.77688L5.39158 8.53217Z" fill="white"/>
</svg></span> Next day availability</div>
        <div className="about-pro-feature"><span className="about-pro-check"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
<circle cx="6.5" cy="6.50018" r="6" fill="#36B864"/>
<path d="M5.39158 8.53217L5.3922 8.53148L3.72472 6.66241C3.66842 6.59718 3.63724 6.50977 3.63789 6.41901C3.63853 6.32826 3.67095 6.24142 3.72817 6.1772C3.78538 6.11298 3.86281 6.07652 3.94377 6.07567C4.02474 6.07481 4.10276 6.10964 4.16104 6.17265L5.82852 8.04206L9.10388 4.37141C9.13237 4.33836 9.16644 4.31199 9.20412 4.29385C9.24179 4.27571 9.28231 4.26616 9.32331 4.26576C9.36431 4.26536 9.40497 4.27412 9.44292 4.29152C9.48087 4.30893 9.51535 4.33463 9.54434 4.36712C9.57334 4.39962 9.59627 4.43827 9.61179 4.48081C9.62732 4.52334 9.63513 4.56892 9.63478 4.61488C9.63442 4.66084 9.6259 4.70626 9.60972 4.74848C9.59353 4.79071 9.57001 4.82891 9.54052 4.86083L6.04653 8.77688C5.98862 8.84177 5.91009 8.87822 5.82821 8.87822C5.74633 8.87822 5.6678 8.84177 5.60989 8.77688L5.39158 8.53217Z" fill="white"/>
</svg></span> Standard cleaning tasks</div>
      </div>
      <div>
        <div className="about-pro-feature"><span className="about-pro-check"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
<circle cx="6.5" cy="6.50018" r="6" fill="#36B864"/>
<path d="M5.39158 8.53217L5.3922 8.53148L3.72472 6.66241C3.66842 6.59718 3.63724 6.50977 3.63789 6.41901C3.63853 6.32826 3.67095 6.24142 3.72817 6.1772C3.78538 6.11298 3.86281 6.07652 3.94377 6.07567C4.02474 6.07481 4.10276 6.10964 4.16104 6.17265L5.82852 8.04206L9.10388 4.37141C9.13237 4.33836 9.16644 4.31199 9.20412 4.29385C9.24179 4.27571 9.28231 4.26616 9.32331 4.26576C9.36431 4.26536 9.40497 4.27412 9.44292 4.29152C9.48087 4.30893 9.51535 4.33463 9.54434 4.36712C9.57334 4.39962 9.59627 4.43827 9.61179 4.48081C9.62732 4.52334 9.63513 4.56892 9.63478 4.61488C9.63442 4.66084 9.6259 4.70626 9.60972 4.74848C9.59353 4.79071 9.57001 4.82891 9.54052 4.86083L6.04653 8.77688C5.98862 8.84177 5.91009 8.87822 5.82821 8.87822C5.74633 8.87822 5.6678 8.84177 5.60989 8.77688L5.39158 8.53217Z" fill="white"/>
</svg></span> Affordable Prices</div>
        <div className="about-pro-feature"><span className="about-pro-check"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
<circle cx="6.5" cy="6.50018" r="6" fill="#36B864"/>
<path d="M5.39158 8.53217L5.3922 8.53148L3.72472 6.66241C3.66842 6.59718 3.63724 6.50977 3.63789 6.41901C3.63853 6.32826 3.67095 6.24142 3.72817 6.1772C3.78538 6.11298 3.86281 6.07652 3.94377 6.07567C4.02474 6.07481 4.10276 6.10964 4.16104 6.17265L5.82852 8.04206L9.10388 4.37141C9.13237 4.33836 9.16644 4.31199 9.20412 4.29385C9.24179 4.27571 9.28231 4.26616 9.32331 4.26576C9.36431 4.26536 9.40497 4.27412 9.44292 4.29152C9.48087 4.30893 9.51535 4.33463 9.54434 4.36712C9.57334 4.39962 9.59627 4.43827 9.61179 4.48081C9.62732 4.52334 9.63513 4.56892 9.63478 4.61488C9.63442 4.66084 9.6259 4.70626 9.60972 4.74848C9.59353 4.79071 9.57001 4.82891 9.54052 4.86083L6.04653 8.77688C5.98862 8.84177 5.91009 8.87822 5.82821 8.87822C5.74633 8.87822 5.6678 8.84177 5.60989 8.77688L5.39158 8.53217Z" fill="white"/>
</svg></span> Best Quality</div>
        <div className="about-pro-feature"><span className="about-pro-check"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
<circle cx="6.5" cy="6.50018" r="6" fill="#36B864"/>
<path d="M5.39158 8.53217L5.3922 8.53148L3.72472 6.66241C3.66842 6.59718 3.63724 6.50977 3.63789 6.41901C3.63853 6.32826 3.67095 6.24142 3.72817 6.1772C3.78538 6.11298 3.86281 6.07652 3.94377 6.07567C4.02474 6.07481 4.10276 6.10964 4.16104 6.17265L5.82852 8.04206L9.10388 4.37141C9.13237 4.33836 9.16644 4.31199 9.20412 4.29385C9.24179 4.27571 9.28231 4.26616 9.32331 4.26576C9.36431 4.26536 9.40497 4.27412 9.44292 4.29152C9.48087 4.30893 9.51535 4.33463 9.54434 4.36712C9.57334 4.39962 9.59627 4.43827 9.61179 4.48081C9.62732 4.52334 9.63513 4.56892 9.63478 4.61488C9.63442 4.66084 9.6259 4.70626 9.60972 4.74848C9.59353 4.79071 9.57001 4.82891 9.54052 4.86083L6.04653 8.77688C5.98862 8.84177 5.91009 8.87822 5.82821 8.87822C5.74633 8.87822 5.6678 8.84177 5.60989 8.77688L5.39158 8.53217Z" fill="white"/>
</svg></span> Affordable Prices</div>
      </div>
    </div>
    <div className="about-pro-buttons">
      <button className="about-pro-btn about-pro-btn-green">Book Now</button>
      <button className="about-pro-btn about-pro-btn-outline">Know More</button>
    </div>
  </div>
</div>

</section>

<section
  className="pricing-section"
  style={{
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="pricing-overlay">
    <div className="pricing-header">
      <span className="pricing-subtitle">Our Pricing</span>
      <h2>
        Choose From Our Lowest<br />
        Plans and Prices
      </h2>
      <div className="pricing-toggle">
        <button className="toggle-btn active">Monthly</button>
        <button className="toggle-btn">Yearly</button>
      </div>
    </div>
    <div className="pricing-cards">
      {/* Basic Package */}
      <div className="pricing-card">
        <h3>BASIC PACKAGE</h3>
        <div className="pricing-price">
          <span className="pricing-currency">$</span>
          <span className="pricing-amount">59.00</span>
          <span className="pricing-period">/Monthly</span>
        </div>
        <ul className="pricing-features">
          <li>Dusting of all surfaces</li>
          <li>Sweeping and mopping floors</li>
          <li>Vacuuming carpets and rugs</li>
          <li>Cleaning of kitchen surfaces</li>
          <li>Cleaning of bathroom surfaces</li>
          <li>Emptying trash bins</li>
        </ul>
        <button className="pricing-book-btn outline">Book Now</button>
      </div>
      {/* Enterprise Package */}
      <div className="pricing-card">
        <h3>ENTERPRISE PACKAGE</h3>
        <div className="pricing-price">
          <span className="pricing-currency">$</span>
          <span className="pricing-amount">69.00</span>
          <span className="pricing-period">/Monthly</span>
        </div>
        <ul className="pricing-features">
          <li>All services in the Basic Plan</li>
          <li>Detailed dusting</li>
          <li>Wiping down of kitchen appt</li>
          <li>Cleaning inside the microwave</li>
          <li>Changing bed linens</li>
          <li>Spot cleaning walls and doors</li>
        </ul>
        <button className="pricing-book-btn solid">Book Now</button>
      </div>
      {/* Premium Package */}
      <div className="pricing-card">
        <h3>PREMIUM PACKAGE</h3>
        <div className="pricing-price">
          <span className="pricing-currency">$</span>
          <span className="pricing-amount">99.00</span>
          <span className="pricing-period">/Monthly</span>
        </div>
        <ul className="pricing-features">
          <li>All services in the Clean Plan</li>
          <li>Deep cleaning of kitchen appt</li>
          <li>baseboards, door frames</li>
          <li>Organization of closets pantries</li>
          <li>Carpet, upholstery spot </li>
          <li>Detailed bathroom cleaning</li>
        </ul>
        <button className="pricing-book-btn outline">Book Now</button>
      </div>
    </div>
  </div>
  </section>
  <div className="testimonial-row">
  <div className="testimonial-info">
    <h2>Feedback About Their Experience With Us</h2>
    <p>
      Read testimonials from our satisfied clients. See how our cleaning services have made a difference in their lives and homes
    </p>
    <div className="testimonial-arrows">
      <button className="testimonial-arrow outline">
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
</svg>

      </button>
      <button className="testimonial-arrow filled">
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>

      </button>
    </div>
  </div>
  <div className="testimonial-card">


    <div className="testimonial-card-content">
      <img src={GImage} alt="Client" className="testimonial-avatar" />
      <div className="testimonial-details">
        <div className="testimonial-header">
          <div>
            <div className="testimonial-name">Robert Fox</div>
            <div className="testimonial-role">Business Man</div>
          </div>
          <img src={Quotation} alt="Quotation" className="testimonial-quote-img" />
        </div>
        <div className="testimonial-stars">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <div className="testimonial-text">
          Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service.
        </div>
      </div>
    </div>
  </div>
</div>

<section className="blog-section" id="blog">
  <div className="blog-header">
    <h2>Stay Updated with Our<br />Tips & Service News!</h2>
    <div className="blog-info">
      <h4>Our Blog</h4>
      <p>
        Stay informed with our latest cleaning tips, service updates, expert advice on maintaining an immaculate home
      </p>
    </div>
  </div>
  <hr className="blog-divider" />
  <div className="blog-cards">
    {/* Card 1 */}
    <article className="blog-card">
      <img src={BC1Image} alt="Eco Friendly Cleaning" className="blog-card-img" />
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-author">JOHN HELTON</span>
          <span className="blog-date">JAN 6, 2025</span>
        </div>
        <h3>Eco-Friendly Cleaning: How<br/> We Keep Your Home Green</h3>
        <p>
          Learn about our commitment to eco-friendly practices. We share the eco-conscious products...
        </p>
        <hr className="blog-card-divider" />
           <a href="/blog/post-1" className="blog-readmore">Read More</a>
      </div>
    </article>
    {/* Card 2 */}
    <article className="blog-card featured">
      <img src={BC2Image} alt="Maintain Clean Home" className="blog-card-img" />
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-author">JOHN HELTON</span>
          <span className="blog-date">JAN 6, 2025</span>
        </div>
        <h3>How to Maintain a Clean Home Between Professional Visits</h3>
        <p>
          Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...
        </p>
        {/* <hr className="blog-card-divider" />  */}
          <a href="/blog/post-1" className="blog-readmore-featured">Read More</a>

      </div>
    </article>
    {/* Card 3 */}
    <article className="blog-card">
      <img src={BC3Image} alt="Benefits of Regular Cleaning" className="blog-card-img" />
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-author">JOHN HELTON</span>
          <span className="blog-date">JAN 6, 2025</span>
        </div>
        <h3>The Benefits of Regular<br/> Professional Cleaning</h3>
        <p>
          Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...
        </p>
        <hr className="blog-card-divider" />
        <a href="/blog/post-1" className="blog-readmore">Read More</a>

      </div>
    </article>
  </div>
</section>

<section className="contact-section" id="contact">
  <div className="contact-container">
    {/* Left: Find Us */}
    <div className="contact-findus">
      <h2>Find us</h2>
      <div className="contact-card">
        <img src={CallImage} alt="Call" className="contact-icon" />
        <div>
          <div className="contact-title">Call Us</div>
          <div className="contact-detail">+(92) 331 5485695</div>
        </div>
      </div>
      <div className="contact-card">
        <img src={EmailImage} alt="Email" className="contact-icon" />
        <div>
          <div className="contact-title">Email Now</div>
          <div className="contact-detail">asharmkhan291@gmail.com</div>
        </div>
      </div>
      <div className="contact-card">
        <img src={AddressImage} alt="Address" className="contact-icon" />
        <div>
          <div className="contact-title">Address</div>
          <div className="contact-detail">7510, Brand Tower, New York, USA</div>
        </div>
      </div>
    </div>

    {/* Right: Keep In Touch */}
    <div className="contact-form-area">
      <div className="contact-info">Contact info</div>
      <h2 className="contact-heading">Keep In Touch</h2>
      <p className="contact-desc">
        We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Name" className="contact-input" />
        <input type="email" placeholder="Email" className="contact-input" />
        <textarea placeholder="Message" className="contact-textarea"></textarea>
        <button type="submit" className="contact-submit">Sent Massage</button>
      </form>
    </div>
  </div>
</section>

<footer className="footer-section">
  <div className="footer-container">
    {/* Logo & Description */}
    <div className="footer-col footer-logo-col">
      <img src={FooterIcon} alt="ProCleaning Logo" className="footer-logo" />
      <div>
        {/* <span className="footer-brand">
          <span className="footer-brand-green">Pro</span>Cleaning
        </span> */}
        <div className="footer-subtitle">Cleaning Services company</div>
      </div>
      <p className="footer-desc">
        Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.
      </p>
    </div>

    {/* Company Links */}
    <div className="footer-col">
      <div className="footer-title">Company</div>
      <div className="footer-link">About Us</div>
      <div className="footer-link">Services</div>
      <div className="footer-link">Our Team</div>
    </div>

    {/* Know More Links */}
    <div className="footer-col">
      <div className="footer-title">Know More</div>
      <div className="footer-link">Support</div>
      <div className="footer-link">Privacy Policy</div>
      <div className="footer-link">Terms & conditions</div>
    </div>

    {/* Newsletter */}
    <div className="footer-col">
      <div className="footer-title">Newsletter</div>
      <input type="email" className="footer-input" placeholder="Email Goes here" />
      <button className="footer-btn">Send</button>
    </div>
  </div>
  <hr className="footer-divider" />
  <div className="footer-bottom">
    2024 “Procleaning” All Rights Received<br/>
    Designed By ASH:)
  </div>
</footer>
</div>
  );
}

export default Home;

