import React from 'react'
import AboutInteractivity from "./AboutInteractivity"
export default function About() {
  return (
    <div className="min-h-screen bg-base-100">
    {/* Hero Section */}
    <div
      className="hero min-h-[50vh] bg-base-200"
      style={{ backgroundImage: "url(/placeholder.svg?height=500&width=1000)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">About PetPal</h1>
          <p className="mb-5">Your one-stop shop for all things pets!</p>
        </div>
      </div>
    </div>

    {/* Mission Statement */}
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto">
          At PetPal, we're dedicated to enhancing the lives of pets and their owners through quality products, expert
          advice, and a passion for animal welfare.
        </p>
      </div>
    </section>

    {/* Team Members */}
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["John Doe", "Jane Smith", "Mike Johnson", "Sarah Lee"].map((name, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={`/placeholder.svg?height=200&width=200&text=${name}`}
                  alt={name}
                  width={200}
                  height={200}
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p>Passionate about pets and their well-being.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Company Timeline */}
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start">2010</div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Founded PetPal</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">2015</div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Expanded to 50 stores nationwide</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">2020</div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Launched our e-commerce platform</div>
          </li>
        </ul>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-base-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-8">We'd love to hear from you! Reach out with any questions or feedback.</p>
        <button className="btn btn-primary" onClick={() => document.getElementById("contact_modal").showModal()}>
          Contact Us
        </button>
      </div>
    </section>

    {/* Contact Modal */}
    <dialog id="contact_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Contact Us</h3>
        <p className="py-4">Fill out the form below and we'll get back to you as soon as possible!</p>
        <form method="dialog">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Your Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="your.email@example.com" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Your message here..." required></textarea>
          </div>
          <div className="modal-action">
            <button className="btn btn-primary">Send</button>
            <button className="btn">Close</button>
          </div>
        </form>
      </div>
    </dialog>

    <AboutInteractivity />
  </div>
  )
}
