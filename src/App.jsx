import face from '../src/assets/IMG_0945.jpg'
import resume from '../src/assets/HENRY_MARTINEZ_RESUME.pdf'

function App() {
  return (
    <div className="App">
      <body>
        <section class="hero">
            <div class="content-wrap">
                <h1> Henry Martinez </h1>
                <h3> Software Engineer / Web Developer </h3>
            </div>
        </section>

        <section class="about-me">
            <div class="content-wrap">
                <h2> About Me </h2>
                <div class="abme">
                    <p> 
                        Welcome to my website! My name is Henry Martinez
                        and I am a computer science major/data science minor
                        studying at California State University, Northridge
                        with a special interest in software engineering,
                        web development, and data science.
                        Take a look around, see what I've
                        been up to, and learn more about me!
                    </p>
                    <img src={face} alt="face" />
                </div>
                <p class="head">
                    Skills
                </p>
                <p>
                    Languages: Java | Python | HTML | CSS | JavaScript | MIPS Architecture
                </p>
                <p>
                    Software: Github | Git | Microsoft Office (Word, Excel, Powerpoint) | VSCode
                </p>
                <p>
                    Interests: Full-stack Web Development | Software Engineering | Data Science | Web Scraping | A.I. | UI Design
                </p>
                <p class="head">
                    Honors
                </p>
                <p>
                    GE Honors Program
                </p>
                <p>
                    Dean's List: Fall 2021, Spring 2021
                </p>
                <p class="head">
                    Organizations
                </p>
                <p>
                    IEEE-HKN Lambda Beta Honor Society (Member)
                </p>
                <p>
                    Tau Beta Pi Honor Society (Member)
                </p>
                <p>
                    STEM Advantage Scholar Program (Scholar)
                </p>
            </div>
        </section>

        <section class="coursework">
            <div class="content-wrap">
                <h2> Coursework </h2>
                <p>
                    Here is a list of all of the relevant coursework I have taken/am taking:
                </p>
                <div class="courses">
                    <p class="head"> Computer Courses </p>
                    <ul>
                        <li> COMP 111A/B: Introduction to Algorithms & Computer Programming (Completed)</li>
                        <li> COMP 122: Computer Architecture & Assembly Language (Completed)</li>
                        <li> COMP 182: Data Structres & Program Design (Completed)</li>
                        <li> COMP 222: Computer Organization (In-progress)</li>
                        <li> COMP 256: Discrete Structures for Computer Science (In-progress)</li>
                        <li> COMP 282: Advanded Data Structures (In-progress)</li>
                    </ul>
                    <p class="head"> Math Courses </p>
                    <ul>
                        <li> MATH 150A: Calculus I (Completed)</li>
                        <li> MATH 150B: Calculus II (Completed)</li>
                        <li> MATH 262: Intro to Linear Algebra (Completed)</li>
                        <li> MATH 340: Introductory Probability (In-progress)</li>
                    </ul>
                    <p class="head"> Physics Courses </p>
                    <ul>
                        <li> PHYS 220A: Mechanical Physics (Completed) </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="projects">
            <div class="content-wrap">
                <h2> Projects </h2>
                <p>
                    Here are a few of my projects I have or am currently working on:
                </p>
                <p class="head"> 
                    NASA Great Lunar Expedition for Everyone (GLEE) 
                </p>
                <ul>
                    <li>Researched with a team of 6 students from 3 universities on a NASA-funded lunar project, with the goal of establishing a lunar mission for our Lunasat, a tiny programmable spacecraft.</li>
                    <li>Programmed the Lunasat using C++ and the Arduino IDE, collecting temperature, magnetic field, and inertial measurements from the spacecraft’s environment that will aid in conducting our lunar mission.</li> 
                </ul>
                <p class="head"> 
                    Convert and Encode Integers Web Application 
                </p>
                <ul>
                    <li>Created a website from scratch using HTML and CSS, hosted by Github Pages and Jekyll, that showcases my skills, projects, coursework, resume, and contact resources.</li>
                </ul>
                <p class="head"> 
                    Web Scraping using Java and Related Libraries
                </p>
                <ul>
                    <li>Designed and developed a web application in an Agile environment with a group of 5 students using HTML, CSS, and JavaScript, to aid future students in understanding material for computer architecture classes, specifically format encodings and integer conversions.</li>
                </ul>
                <ul>
                    <li>Developed a web-scraping program using Java and Java libraries (Apache Maven and Jsoup) which tells the user which album and artist were at the top of the Billboard 200 chart for any given date and for how many weeks, using data from Billboard’s website HTML.</li>
                </ul>
                <p class="head"> 
                    Object-Oriented Programming and Data Structure Projects 
                </p>
                <ul>
                    <li>Generated Java data structure classes/methods from scratch such as linked lists and binary tree ADTs that mimicked their Java library counterparts using object-oriented programming.</li>
                    <li>Designed and implemented a Java program that converts user-generated music sheet text files into audio playback, utilizing OOP and data structures. Features include the ability to reverse, repeat, and adjust the tempo of the generated audio.</li>
                </ul>
            </div>
        </section>

        <section class="resume">
            <div class="content-wrap">
                <h2> Resume </h2>
                <p> Here is my most recently updated resume, but I'm constantly adding things so it's subject to change!: </p>
                <div>
                    <iframe type="pdf" src={resume}></iframe>
                </div>
            </div>
        </section>

        <section class="contact">
            <div class="content-wrap">
                <h2> Contact </h2>

                <p class="head"> 
                    Links 
                </p>
                <p> 
                    LinkedIn: &nbsp;<a class="links" href="https://www.linkedin.com/in/hnrymrtnz/">www.linkedin.com/in/hnrymrtnz/</a>
                </p>
                <p> 
                    Github: &nbsp;<a class="links" href="https://github.com/hnrymrtnz/">www.github.com/hnrymrtnz/</a>
                </p>
                <p> 
                    Email: &nbsp;<a class="links">henry.martinez.713@my.csun.edu</a>
                </p>

                <p class="head">
                    Contact Form
                </p>
            </div>
        </section>
      </body>
    </div>
  )
}

export default App
