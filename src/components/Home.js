import React from "react";

function Home() {
  return (
    <div className="home-component">
      <section className="announcements">
        <div className="announcement-container">
          <p className="announcement-banner">
            Applications to join our board are now open! If interested, please
            fill out{" "}
            <a
              className="application-link"
              href="https://forms.gle/ZjJT2e3VKDde2B3T7"
              target="_blank"
              rel="noopener noreferrer"
            >
              this form
            </a>
          </p>
        </div>
      </section>
      <section className="hero flex-container">
        <div className="option-container">
          <div className="option-row">
            <div className="option card" id="donation-option">
              <a href="donation.html">
                <i className="fa-solid fa-hand-holding-heart fa-4x"></i>
                <p className="title">Make A Donation</p>
              </a>
            </div>
            <div className="option card" id="story-option">
              <a href="stories.html">
                <i className="fa-solid fa-book-open fa-4x"></i>
                <p className="title">Tell Us Your Story</p>
              </a>
            </div>
            <div className="option card" id="mailing-option">
              <a href="email-form.html">
                <i className="fa-solid fa-envelope fa-4x"></i>
                <p className="title">Join Our Mailing List</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="background-section-title">
        <div className="background-title">OUR BACKGROUND</div>
    </div>
    <section className="our-background">
        <div className="founder-bios">
            <article className="bio-container">
                <img src="" alt="Eada" />
                <div className="bio">
                    <h3 className="founder-name"><strong>Eada Al-Soodani</strong></h3>
                    <p>
                        Hi! I'm Eada Talal Al-Soodani and I'm a mixed Arab from Saudi Arabia and white from the United States. I moved from Saudi to the US when I was ten with my 4 siblings. I identify as a Female and go by she/her pronouns. 
                    <br></br>
                    I lived in a small town in Washington State and moved to Eugene, Oregon to get my Bachelor's degrees in Political Science at University of Oregon. I currently work at a Dispute Resolution Center as a Program Coordinator.
                    <br></br>
                    I started BIWOC health with my friend Sarah LaPlante because of my negative experience in healthcare. Like myself, many Black, Indigenous, and People of Color - Women have struggled with physical and mental health issues without getting the proper care they deserve and need. 
                    <br></br>
                    My hope is to have our voices heard about the struggles we have gone through. I hope we can increase the amount of women in healthcare. I hope we can have justice for women's reproductive rights. I hope we can live in a country where we don’t have to worry about our medical bill.
                    <br></br>  
                    </p>
                </div>
            </article>
            <article className="bio-container">
                <img src="" alt="Sarah" />
                <div className="bio">
                    <h3 className="founder-name"><strong>Sarah LaPlante</strong></h3>
                    <p>
                        Sarah LaPlante is a first year MSW student at Washington Universtiy in St. Louis. She plans on focusing on Mental Health and Research in hopes of contiuning to work towards equitable healthcare. Eada and Sarah first started working together as co-creaters of Mixed Student Union at the Universtiy of Oregon where they created a safe space for people that identified as mixed. When Sarah is not working on completing her MSW and working for BIWOC Heatlh she spends time reading, traveling and spending time with loved ones. 
                    </p>
                </div>
            </article>
        </div>
    </section>
    </div>
  );
}

export default Home;