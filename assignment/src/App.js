import react from 'react'
import './App.css';

function App() {
  return (
   <>
   <div>
      {/* Header Section */}
      <header>
        <div className="logo">M.</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </header>

      {/* Latest Works Section */}
      <section className="latest-works">
        <h1>Latest Works</h1>
        <p>Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="categories">
          <button className="category-button">All</button>
          <button className="category-button">Branding Goals</button>
          <button className="category-button">Photography</button>
          <button className="category-button">True Perfection</button>
          <button className="category-button">Web Design</button>
        </div>
        <div className="portfolio-grid">
  <div id="img1"><img src="./image/img.jpg" alt="Work 1" /></div>
  <div className="img2"><img src="./image/img 1.jpg" alt="Work 2" /></div>
  <div className="img3"><img src="./image/img 2.jpg" alt="Work 3" /></div> {/* Add a class to this div */}
  <div className="img4"><img src="./image/img 3.jpg" alt="Work 4" /></div>
  <div className="img5"><img src="./image/img 4.jpg" alt="Work 5" /></div>
  <div id="img6"><img src="./image/img 5.jpg" alt="Work 6" /></div>
  <div className="img7"><img src="./image/img 6.jpg" alt="Work 7" /></div>
  <div className="img8"><img src="./image/img 7.jpg" alt="Work 8" /></div>
</div>
      </section>

      {/* Work Experiences Section */}
      <section className="work-experience">
        <h2>Work Experiences</h2>
        <div className="experience-grid">
          <div className="experience-item">
            <h3>UI/UX Designer</h3>
            <p>June 2012 – 2016</p>
            <p>Adobe Inc.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="experience-item">
            <h3>Product Designer</h3>
            <p>June 2012 – 2016</p>
            <p>Adobe Inc.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="experience-item">
            <h3>Graphic Designer</h3>
            <p>June 2012 – 2016</p>
            <p>Adobe Inc.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Hire Me Section */}
      <section className="hire-me">
        <h2>Have Any Project In Mind?</h2>
        <a href="#" className="btn">Hire Me</a>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">M.</div>
        <p>Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="footer-social-icons">
  <a href="#"><i class="fab fa-facebook-f"></i></a>
  <a href="#"><i class="fab fa-twitter"></i></a>
  <a href="#"><i class="fab fa-linkedin-in"></i></a>
  <a href="#"><i class="fab fa-dribbble"></i></a>
  <a href="#"><i class="fab fa-behance"></i></a>
  <a href="#"><i class="fab fa-google-plus-g"></i></a>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
  
</div>

        <p>Copyright © 2021 DroitThemes</p>
      </footer>
    </div>
   </>
  );
}

export default App;