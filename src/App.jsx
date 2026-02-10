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
  <div>
  <h2>Affordable Data Plans</h2>
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

    </main>
  )
}

export default App
