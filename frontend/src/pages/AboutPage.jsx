import React from 'react'
import image from './screen.png'
import myImg from './me.png'

const AboutPage = () => {
  return (
    <div>
      <br />
      <h1 className='text-white'>About This Project</h1>
      <br />
      <div className="about-content">
        <p className='text-white'>
          This Product Store is a full-stack MERN (MongoDB, Express, React, Node.js) application built to manage products efficiently with a fast, responsive user interface and secure backend architecture. The system allows users to add products with details such as name, price, and image URL, which are then stored and retrieved from a MongoDB database.

          The frontend is developed using React and styled with Bootstrap, ensuring a clean layout, smooth responsiveness, and a modern UI/UX. API communication is handled through Axios, enabling seamless data flow between the client and server. A loading state is shown while data is being fetched to improve the user experience.

          The backend is powered by Node.js and Express, featuring robust rate-limiting to prevent abuse and ensure server stability. All product data is validated before insertion, guaranteeing consistent, error-free entries in the database.

          This project demonstrates practical use of CRUD operations, secure API design, frontend-backend integration, and clean component-based architecture—making it a strong example of a real-world MERN stack application.
        </p>
        <img src={image} alt="window image" className='image-screen' />
      </div>
      <br />
      <br />
      <h1 className='text-white'>About The Developer!</h1>
      <div className="about-content">
        <p className='text-white'>
          Hi, I’m Supriyo Giri, a passionate Full-Stack Developer and AI/ML enthusiast currently pursuing my B.Tech in Computer Science and Engineering at IEM Kolkata. I love building intelligent systems, crafting modern web experiences, and exploring how technology can solve real-world problems.

          With strong expertise in the MERN stack, Spring Boot, C++, and Python, I enjoy creating end-to-end applications that blend performance, clean design, and smart automation. I’m particularly interested in projects involving machine learning, IoT, data-driven decision systems, and modern UI/UX development.

          Beyond development, I’m deeply involved in Project Alpha, my personal initiative to master major domains like full-stack engineering, AI/ML, cybersecurity, blockchain, and core CS concepts.

          I believe in writing clean code, building scalable systems, and constantly upskilling myself to become the best version of who I can be. Every project I create is a step toward that vision.

          If you’re looking to collaborate, explore ideas, or build something impactful—
          let’s connect and create something amazing.
        </p>
        <img src={myImg} alt="window image" className='image-screen' />
        
      </div>
    </div>
  )
}

export default AboutPage