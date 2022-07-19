import React from 'react';

function Contact() {
    return (
        <main>
        <div className="page-title">
            <h2>CONTACT US</h2>
            <p>Questions? Comments? Suggestions? Let us know!</p>
        </div>
        <form id="contact-form">
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label for="message">Message</label>
                <textarea name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </main>
    )
}

export default Contact;