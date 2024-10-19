import "../home.css"

export default function Contact(){
     return(
      <section id="contact">
  <div className="contact container">
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.043556165979!2d67.06317911500482!3d24.917728884018634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33edb6cbe470b%3A0x780b35e5a3f7a4fd!2sHussainabad%20Food%20Street!5e0!3m2!1sen!2s!4v1697278729290!5m2!1sen!2"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <form action="https://api.web3forms.com/submit" method="POST">
      <div className="form">
        <div className="form-txt">
          <h4>INFORMATION</h4>
          <h1>Contact Us</h1>
          <span>
            As you might expect of a company that began as a high-end interiors
            contractor, we pay strict attention.
          </span>
      
          <h3>Pakistan</h3>
          <p>
            Karachi
            <br />
            Near Madni Masjid
          </p>
        </div>

        <div className="form-details">
        <input type="hidden" name="access_key" value="fff1762e-1810-4175-b62d-ea810bd67806"/>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required=""
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required=""
          />
          <textarea
            name="message"
            id="message"
            cols={52}
            rows={7}
            placeholder="Message"
            required=""
            defaultValue={""}
          />
          <button type="submit">SEND MESSAGE</button>
        </div>
      </div>
    </form>
  </div>
</section>

     )
}