# Tanisha Chaudhary: Professional Portfolio Website

This repository contains my professional portfolio, a dynamic and modern single-page website built with Python Flask. The site showcases my skills in Python development, web application structure, and my impactful projects in Computer Vision, IoT, and backend development.

---

## 📌 Project Summary

This project is a modern, responsive portfolio website designed to present my professional profile, technical skills, and experience to recruiters and technical seniors.

It is built on a robust Flask backend and leverages Jinja templating to maintain a clean separation of concerns, demonstrating proficiency in full-stack fundamentals. The design includes a Dark Mode toggle and smooth navigation for an excellent user experience.

### Key Sections:

* **Professional Summary:** A concise overview of my goals and experience.
* **Technical Skills:** Categorized display of programming languages, tools, and soft skills (Python, C++, AWS, Git, Leadership).
* **Impactful Projects:** Detailed cards for my work in **YOLOv8 Object Detection**, **Real-Time IoT Dashboards**, and **Telegram Bots**.
* **Experience:** A timeline of my internships and industrial training.
* **Contact Form:** A functional form using Flask's `request.form` and `flash` messaging.

## 🚀 My Development Process

### Project Planning & Breakdown

* **Objective:** Create a professional, scalable, and fully responsive portfolio showcasing Python/Flask expertise.
* **Architecture:** Adhere to the standard Flask folder structure (`app.py`, `templates/`, `static/`).
* **Design Goal:** Modern, clean aesthetic with a focus on readability and accessibility (implemented via a Dark Mode toggle).

### Core Implementation

* **Backend (Flask/Python):**
    * Setup the core application (`app.py`) with routing for the single-page application.
    * Implemented a **POST** route to handle the contact form submission, demonstrating form processing and the use of Flask's `flash` messages.
* **Frontend (HTML/Jinja):**
    * Structured the page into semantic HTML5 sections (`<header>`, `<section>`, `<footer>`).
    * Used Jinja templating (`{{ url_for('static', ...) }}`) for managing static file paths.
* **Styling (CSS):**
    * Developed a clean, modern CSS grid for the project and skills sections.
    * Implemented a fully functional, persistent **Dark/Light Mode** via CSS variables and JavaScript.
* **Responsiveness:** Ensured the layout adapts seamlessly to mobile and tablet screens.

### Extra Touches for Professional Look

* **Persistence:** Theme preference is saved using **`localStorage`** via JavaScript.
* **Smooth Navigation:** Implemented smooth scrolling between sections for improved UX.
* **External Links:** Integrated social media icons (LinkedIn, GitHub) and project links.

## 📖 Application Description

This portfolio is an interactive demonstration of my technical capabilities:

* **Modular Code:** Shows a clear understanding of separating Python logic (`app.py`) from presentation (`index.html`).
* **Static Asset Management:** Correctly utilizes Flask's `static` folder for CSS, JavaScript, and images.
* **UI/UX Focus:** Prioritizes a polished interface with modern typography, clear sectioning, and accessibility features (Dark Mode).

## ✨ Key Features

| Feature | Description | Technology Demonstrated |
| :--- | :--- | :--- |
| **Flask Backend** | Handles routing and form submission logic. | Python, Flask, Jinja Templating |
| **Responsive Design** | Ensures perfect rendering on all screen sizes. | CSS Grid, Flexbox, Media Queries |
| **Dark Mode Toggle** | Saves user theme preference across sessions. | JavaScript (`localStorage`), CSS Variables |
| **Contact Form** | Processes user input and provides feedback. | Flask (`request.form`), Flask-Flash Messaging |
| **Structured Data** | Clear, categorized presentation of skills and experience. | Semantic HTML5 |

## ⚙️ Technologies Used

| Category | Technology |
| :--- | :--- |
| **Backend Framework** | Python 3.x, Flask |
| **Frontend Languages** | HTML5, CSS3, JavaScript |
| **Styling/UI** | Font Awesome (Icons) |
| **Tools & Version Control**| Git, GitHub |

## 🎯 Outcome

This project successfully serves as a robust, professional portfolio and demonstrates my ability to:

* Build and maintain a full-stack web application using the Flask framework.
* Implement modern frontend features (Dark Mode, Responsiveness).
* Organize code and static assets following professional standards.
* Showcase technical projects and professional experience effectively.
