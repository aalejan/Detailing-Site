import './style.css'

import beforeExterior from './images/before exterior.JPG'
import afterExterior from './images/after_exterior.JPG'
import beforeInterior from './images/before_interior.JPG'
import afterInterior from './images/after_interior.JPG'
import beforeConsole from './images/before_center_console.JPG'
import afterConsole from './images/after_center_console.JPG'

document.querySelector('#app').innerHTML = `

<!-- NAVBAR -->
<nav class="navbar">
  <div class="navbar-brand">GONZALEZ <span>CUSTOM</span> DETAILING</div>
  <ul class="navbar-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#addons">Add-Ons</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#contact" class="navbar-cta">Book Now</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-badge">Private Appointment-Only Detail Studio</div>
  <h1 class="hero-title">
    GONZALEZ<br>
    <span class="red">CUSTOM</span><br>
    DETAILING
  </h1>
  <p class="hero-sub">Orange, Massachusetts</p>
  <p class="hero-desc">
    Professional auto detailing tailored to your vehicle.<br>
    <strong>Every detail includes a complimentary air freshener.</strong>
  </p>
  <div class="hero-actions">
    <a href="#contact" class="btn-primary">Book an Appointment</a>
    <a href="#services" class="btn-outline">View Services</a>
  </div>
  <div class="hero-scroll">Scroll</div>
</section>

<!-- SERVICES -->
<section class="section" id="services">
  <div class="container">
    <p class="section-label">What We Offer</p>
    <h2 class="section-title">Our Services</h2>
    <p class="section-subtitle">Every service is performed with attention to detail at our private studio in Orange, MA.</p>
    <div class="services-grid">

      <div class="service-card">
        <div class="service-icon">🧹</div>
        <div class="service-name">Interior Detail</div>
        <div class="service-price">$100</div>
        <div class="divider"></div>
        <ul class="service-features">
          <li>Full Vacuum</li>
          <li>Windows Cleaned</li>
          <li>Complete Wipe Down</li>
          <li>Complimentary Air Freshener</li>
        </ul>
      </div>

      <div class="service-card featured">
        <div class="service-badge">POPULAR</div>
        <div class="service-icon">✨</div>
        <div class="service-name">Exterior Detail</div>
        <div class="service-price">$120</div>
        <div class="divider"></div>
        <ul class="service-features">
          <li>Full Body Wash</li>
          <li>Windows Cleaned</li>
          <li>Clay Bar Treatment</li>
          <li>Complimentary Air Freshener</li>
        </ul>
      </div>

      <div class="service-card">
        <div class="service-icon">🛡️</div>
        <div class="service-name">Ceramic Coating</div>
        <div class="service-price">$700<small>+</small></div>
        <div class="service-note">Includes Everything — Starting at $700</div>
        <div class="divider"></div>
        <ul class="service-features">
          <li>Full Interior Detail</li>
          <li>Full Exterior Detail</li>
          <li>Professional Ceramic Coat</li>
          <li>Long-Term Paint Protection</li>
          <li>Complimentary Air Freshener</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<!-- ADD-ONS -->
<section class="section section-alt" id="addons">
  <div class="container">
    <p class="section-label">Enhance Your Detail</p>
    <h2 class="section-title">Premium Add-Ons</h2>
    <p class="section-subtitle">Customize your service with any of our premium add-ons.</p>
    <div class="addons-grid">
      <div class="addon-item">
        <span class="addon-name">Pet Hair Removal</span>
        <span class="addon-price">$20</span>
      </div>
      <div class="addon-item">
        <span class="addon-name">Headlight Restoration</span>
        <span class="addon-price">$30</span>
      </div>
      <div class="addon-item">
        <span class="addon-name">Engine Bay Cleaning</span>
        <span class="addon-price">$50</span>
      </div>
      <div class="addon-item">
        <span class="addon-name">Seat Extraction</span>
        <span class="addon-price">$60</span>
      </div>
      <div class="addon-item">
        <span class="addon-name">Scratch Improvement</span>
        <span class="addon-price">$80</span>
      </div>
      <div class="addon-item">
        <span class="addon-name">Buffing</span>
        <span class="addon-price">$80/hr</span>
      </div>
    </div>
    <p class="addons-footer">
      <span>✦</span> Every detail includes a complimentary air freshener at no extra charge.
    </p>
  </div>
</section>

<!-- GALLERY -->
<section class="section" id="gallery">
  <div class="container">
    <p class="section-label">Our Work</p>
    <h2 class="section-title">Before & After</h2>
    <p class="section-subtitle">Real results from real vehicles — see the Gonzalez difference.</p>
    <div class="gallery-grid">

      <div class="gallery-pair">
        <div class="gallery-imgs">
          <div class="gallery-img">
            <img src="${beforeExterior}" alt="Before exterior detail" />
            <div class="img-label before">Before</div>
          </div>
          <div class="gallery-img">
            <img src="${afterExterior}" alt="After exterior detail" />
            <div class="img-label after">After</div>
          </div>
        </div>
        <div class="gallery-label">Exterior Detail</div>
      </div>

      <div class="gallery-pair">
        <div class="gallery-imgs">
          <div class="gallery-img">
            <img src="${beforeInterior}" alt="Before interior detail" />
            <div class="img-label before">Before</div>
          </div>
          <div class="gallery-img">
            <img src="${afterInterior}" alt="After interior detail" />
            <div class="img-label after">After</div>
          </div>
        </div>
        <div class="gallery-label">Interior Detail</div>
      </div>

      <div class="gallery-pair">
        <div class="gallery-imgs">
          <div class="gallery-img">
            <img src="${beforeConsole}" alt="Before center console" />
            <div class="img-label before">Before</div>
          </div>
          <div class="gallery-img">
            <img src="${afterConsole}" alt="After center console" />
            <div class="img-label after">After</div>
          </div>
        </div>
        <div class="gallery-label">Center Console</div>
      </div>

    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="section section-alt" id="contact">
  <div class="container">
    <p class="section-label">Get in Touch</p>
    <h2 class="section-title">Book Your Detail</h2>
    <p class="section-subtitle">Appointment only. Reach out to schedule your visit.</p>
    <div class="contact-grid">

      <div class="contact-details">

        <div class="contact-item">
          <div class="contact-icon">📍</div>
          <div>
            <div class="contact-label">Location</div>
            <div class="contact-value">Orange, Massachusetts</div>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">📅</div>
          <div>
            <div class="contact-label">Availability</div>
            <div class="contact-value">By Appointment Only</div>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">📞</div>
          <div>
            <div class="contact-label">Phone</div>
            <div class="contact-value"><a href="tel:9786207349">(978) 620-7349</a></div>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">✉️</div>
          <div>
            <div class="contact-label">Email</div>
            <div class="contact-value"><a href="mailto:GonzalezCustomDetailing@gmail.com">GonzalezCustomDetailing@gmail.com</a></div>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">📱</div>
          <div>
            <div class="contact-label">Social Media</div>
            <div class="social-row">
              <a href="#" class="social-chip">Facebook</a>
              <a href="#" class="social-chip">Instagram</a>
            </div>
            <div class="contact-value" style="margin-top:0.4rem; font-size:0.85rem; color:var(--text-muted)">@GonzalezCustomDetailing</div>
          </div>
        </div>

      </div>

      <div class="contact-form-card">
        <div class="form-title">Request a Booking</div>
        <p class="form-desc">Fill out the form and we'll get back to you to confirm your appointment.</p>
        <form>
          <div class="form-row">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Smith" />
            </div>
          </div>
          <div class="form-group">
            <label>Phone / Email</label>
            <input type="text" placeholder="(555) 000-0000 or email@example.com" />
          </div>
          <div class="form-group">
            <label>Service</label>
            <select>
              <option value="" disabled selected>Select a service...</option>
              <option>Interior Detail — $100</option>
              <option>Exterior Detail — $120</option>
              <option>Ceramic Coating — Starting at $700</option>
            </select>
          </div>
          <div class="form-group">
            <label>Vehicle</label>
            <input type="text" placeholder="Year, Make, Model" />
          </div>
          <div class="form-group">
            <label>Notes</label>
            <textarea placeholder="Any add-ons or special requests..."></textarea>
          </div>
          <button type="submit" class="btn-primary" style="width:100%">Send Request</button>
        </form>
      </div>

    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-brand">GONZALEZ <span>CUSTOM</span> DETAILING</div>
  <p class="footer-tagline">Private Appointment-Only Detail Studio · Orange, MA</p>
  <ul class="footer-nav">
    <li><a href="#services">Services</a></li>
    <li><a href="#addons">Add-Ons</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <p class="footer-copy">© 2025 Gonzalez Custom Detailing · (978) 620-7349 · GonzalezCustomDetailing@gmail.com</p>
</footer>

`
