import { useState } from 'react'
import './App.css'

function App() {


  return (
    <main>
 <header>
  
  <img src='/Logo.png' width={70}/>

  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact Us</li>
      <li>Create Account</li>
      <li>Terms Of Service</li>
      <li>Privacy Policy</li>
    </ul>
  </nav>
<button className="btn secondary">Login</button>
 </header>

 <section className='hero'>
  <div className="hero-text">
      <h1>
        Fast, Reliable VTU Services <br />
        <span>— Anytime, Anywhere</span>
      </h1>

      <p>
        Buy airtime, data, pay TV and electricity bills instantly on
        <strong> Tada</strong>.
        <br />
        No stress. No delays. Just seamless transactions.
      </p>

      <div className="hero-buttons">
        <button className="btn primary">Get Started</button>
        <button className="btn secondary">Login</button>
      </div>
</div>

      {/* Left: Image */}
      <div className="hero-image">
  <img src="/heroImage.png" alt="Tada VTU services" width={500}  />

      </div>
 </section>

 <section className='box'>
  <div id='price-header'>
  <h1>Affordable Data Plans</h1>
  <p>Choose from the best data deal available for your network</p>
  </div>

  <div className='price'>
  <div>
      <h2>MTN DATA</h2>
      <p>1gb for 30day =# 550</p>
      <p>1gb for 30day =# 550</p>
      <p>1gb for 30day =# 550</p>
    </div>

     <div>
      <h2>GLO DATA</h2>
      <p>1gb for 30day =# 550</p>
      <p>1gb for 30day =# 550</p>
      <p>1gb for 30day =# 550</p>
    </div>
 <div>
      <h2>AIRTEL DATA</h2>
      <p>1gb for 30day = # 550</p>
      <p>1gb for 30day = # 550</p>
      <p>1gb for 30day =# 550</p>
    </div>
    </div>
  
 </section>

 <section className='button'>
  <div className='input'>
    <h1>Ready to Get Started?</h1>
    <p>Create an account in seconds and enjoy seamless data recharges </p>
    <button>Join Now</button>
  </div>

 </section>

 <section className='customers'>
  <div id='data'>
<h1>What Our Customers Say</h1>
<p>Don't take our word for it- here's what our customer have to say.</p>
  </div>

  <div id='say'>
  <div>
    <p>"Customers support was amazing when i had an issue".</p>
    <h1>Emmanuel.O</h1>
  </div>

  <div>
    <p>"Cheapest airtime bundles.
      I have ever seen online"</p>
    <h1>Juliet.U</h1>
  </div>

  <div>
    <p>Fast and reliable data recharge, i use it every week!</p>
    <h1>Adisa.A</h1>
  </div>

  </div>
 </section>

    </main>
  )
}

export default App
