

const finalstyle = document.querySelector('link[href="style/styles.css"]');
finalstyle.disabled = true;

const flexes = document.querySelector('link[href="style/flex.css"]');
flexes.disabled = true;

const textDesign = document.querySelector('link[href="style/text.css"]');
textDesign.disabled = true;

const colors = document.querySelector('link[href="style/colors.css"]');
colors.disabled = true;





const startBtn = document.querySelector(".startBtn");

startBtn.onclick = function() {
const home = document.getElementById("home-section");

startBtn.style.display = "none";
home.style.display = "block";

showHomeSection();
}






// ----------------RENDERING HOME CONTENTS----------------//

function showHomeSection() {

  const homeDetails = {
    greeting: `Hello, I'm`,
    myName: 'Aldrin James Palma'
  }

  const homeContentHTML = `
    <header>
      <img src="images and icons/icons/logo.png" alt="" class="logo">
      <nav class="top-nav">
        <ul>
          <li><a href="#home-section">Home</a></li>
          <li><a href="#about-section">About</a></li>
          <li><a href="#skills-section">Skills</a></li>
          <li><a href="#projects-section">Projects</a></li>
          <li><a href="#contact-section">Contacts</a></li>
        </ul>
      </nav>
      <img src="images and icons/icons/white burger nav.png" alt="hamburger-icon" class="hamburger-icon">
    </header>
    <div class="background"></div>
    <div class="background"></div>
    <div class="background"></div>

    <p class="greeting">${homeDetails.greeting}</p>
    <h1 class="name">${homeDetails.myName}</h1>
    <p class="main-skills highlight-txt"></p>
    <button class="explore-btn" id="exploreBtn">Explore</button>
  `
  document.querySelector('#home-section').innerHTML = homeContentHTML;

  const hamburgerIcon = document.querySelector('header .hamburger-icon');
  const topNav = document.querySelector('.top-nav')


  hamburgerIcon.addEventListener('click', ()=>{
    topNav.style.display = 'flex';
    topNav.style.animation = 'show-top-nav 1.5s forwards'
  });

  window.addEventListener('resize', ()=>{
    if (window.innerWidth < 700) {
      topNav.style.display = 'none';
    } else {
      topNav.style.display = 'flex';
        topNav.style.animation = ''
    }
  })

  const button = document.getElementById("exploreBtn");
  button.onclick = function() {
    const about = document.getElementById("about-section");
    about.style.display = "flex";
    location.href = "#about-section";
    showAboutSection();
    flexes.disabled = false;
  }
}







  // -------------------RENDERING ABOUT CONTENTS------------------//

function showAboutSection(){
  const aboutDetails = {
    myPhoto: 'profile1.png',
    aboutMe: `I’m a creative problem solver with a passion for blending design, technology, and storytelling to create impactful digital experiences. My journey has been shaped by years of working across design, video editing, and web development, where I’ve mastered tools like Canva, Figma, and DaVinci Resolve to deliver projects that are both visually stunning and functional.

With a focus on user-centric solutions, I specialize in crafting intuitive interfaces and seamless user experiences. My expertise in front-end development allows me to translate creative concepts into responsive, interactive websites using HTML, CSS, and JavaScript. Whether it’s designing eye-catching visuals, editing compelling video content, or building innovative web solutions, I am driven by a commitment to delivering results that connect with audiences and leave a lasting impression.`
  }

  const aboutContentHTML = `
    <div class="wrapper">
      <div class="details">
        <h1 class="heading">ABOUT<span class="highlight-txt">ME</span></h1>
        <p class="about-me">${aboutDetails.aboutMe}</p>
        <div class="contactInfo">
          <div class="contacts_">
            <img src="images and icons/about/location_icon.png">
            <p>Masaguisi, Santa Cruz, Marinduque</p>
          </div>
          <div class="contacts_">
            <img src="images and icons/about/phone_icon.png">
            <p>09566493152</p>
          </div>
          <div class="contacts_">
            <img src="images and icons/about/mail_icon.png">
            <p>palmaaldrin02@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="photo-container">
        <img src="images and icons/images/${aboutDetails.myPhoto}" alt="" class="my-photo"> 
      </div>

      <a href="#skills-section" class="arrow-to-next-sec" id="skillBtn"><img src="images and icons/icons/down-arrow.png" alt="arrow-down"></a>
    </div>
  `;
  document.querySelector('#about-section').innerHTML = aboutContentHTML;

  const button = document.getElementById("skillBtn");
  button.onclick = function() {
    const skills = document.getElementById("skills-section");
    skills.style.display = "block";
    textDesign.disabled = false;
    showSkillsSection();

  }
}





// -------------------RENDERING SKILLS CONTENTS------------------//

function showSkillsSection() {
  const skillsDetails = {
    heading: 'My Skills',
    subheading: 'Technologies and Tools',
    details: `Through the years, I have honed my skills in creative design, video editing, and web development, working on diverse projects that showcase my expertise. With Canva, I have crafted visually striking marketing materials, social media content, and presentations, consistently meeting client and team expectations. My experience with CapCut includes editing promotional videos, short films, and social media reels, seamlessly blending transitions, effects, and audio to create engaging content. Additionally, I have utilized DaVinci Resolve to perform advanced video editing and color grading for cinematic projects and professional events, ensuring top-tier quality.

In design and development, Figma has been my go-to tool for creating intuitive user interfaces and interactive prototypes, collaborating with developers and stakeholders to bring concepts to life. On the technical side, I have built responsive and dynamic websites using JavaScript, HTML, and CSS, delivering solutions ranging from personal portfolios to business websites. My years of experience have equipped me with the ability to blend creativity and functionality, ensuring impactful and professional results in every project I undertake.`
  }
  const skillsContentHTML = `
    <div class="wrapper">
      <h1 class="heading">${skillsDetails.heading}</h1>
      <p class="subheading">${skillsDetails.subheading}</p>
      <div class="skills-container d-flex">
      </div>
      <p class="about-my-skills">${skillsDetails.details}</p>
      <a href="#projects-section" class="arrow-to-next-sec" id="projectBtn"><img src="images and icons/icons/down-arrow.png" alt="arrow-down"></a>
    </div>
  `;

  document.querySelector('#skills-section').innerHTML = skillsContentHTML;


  const skills = [
    {
      name: "Canva",
      icon: "canva.png"
    },
    {
      name: "Capcut",
      icon: "capcut.png"
    },
    {
      name: "Davinci R",
      icon: "davinci_resolve_logo.png"
    },
    {
      name: "Figma",
      icon: "figma_logo.png"
    },
    {
      name: "JavaScript",
      icon: "javascript.png"
    },
    {
      name: "Html & Css",
      icon1: "html.png",
      icon2: "css.png"
    }
  ];
  
  let skillCardHTML = '';
  skills.forEach(skill => {
    if (skill.icon1 && skill.icon2) {
      skillCardHTML += `
        <div class="skill-card">
          <img src="images and icons/icons/${skill.icon1}" alt="skill-icon" class="skill-icon">
          <img src="images and icons/icons/${skill.icon2}" alt="skill-icon" class="skill-icon">
          <p class="skill-name">${skill.name}</p>
        </div>
      `;
    } else {
      skillCardHTML += `
        <div class="skill-card">
          <img src="images and icons/icons/${skill.icon}" alt="skill-icon" class="skill-icon">
          <p class="skill-name">${skill.name}</p>
        </div>
      `;
    }
  });
  document.querySelector('.skills-container').innerHTML = skillCardHTML;

  const button = document.getElementById("projectBtn");
  button.onclick = function() {
    const projects = document.getElementById("projects-section");
    projects.style.display = "block";
    showProjectSection();
    colors.disabled = false;
  }
}






// -------------------RENDERING PROJECTS CONTENTS------------------//

function showProjectSection() {
  const projectsDetails = {
    heading: 'My Projects',
    subheading: 'Some list of projects I created over the years.',
  }

  const projectContentHTML = `
    <div class="wrapper">
      <h1 class="heading">${projectsDetails.heading}</h1>
      <p class="subheading">${projectsDetails.subheading}</p>
      <div class="projects-container d-grid"> </div>
      </div>
      <a href="#contact-section" class="arrow-to-next-sec" id="contactBtn"><img src="images and icons/icons/down-arrow.png" alt="arrow-down"></a>
    </div>

  `;

  document.querySelector('#projects-section').innerHTML = projectContentHTML;

  const projects = [
    {
      image: "project-image.png",
      title: "Programming 2",
      description: "Final Performance in Programming 2, video demonstration of our compiled outputs."
    },
    {
      image: "project-image(2).png",
      title: "PCC Alabkarbawan - User Side",
      description: "This project was developed using Laravel with PHP, HTML&CSS and basic javascript."
    },
    {
      image: "project-image(3).png",
      title: "World Hardest Game",
      description: "Computer Graphics Final Project developed using Unity and I handled layout and desgin of the game."
    },
    {
      image: "project-image(4).png",
      title: "PharmArshie",
      description: "PharmArshie is our project built with HTML and CSS, featuring responsive design and also a hybrid app."
    },
    {
      image: "project-image(5).png",
      title: "MARSU Logo",
      description: "I am one of the creator of our university logo and we won it in the competition."
    },
    {
      image: "project-image(6}.png",
      title: "National University Website",
      description: "One of our first website front-end created using HTML&CSS."
    }
  ];

  let projectCardHTML = '';

  projects.forEach(project => {
    projectCardHTML += `
      <div class="project">
          <img src="images and icons/images/${project.image}" alt="project-image" class="project-img">
          <div class="project-details">
            <h3 class="proj-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
          </div>
        </div>
    `
  });

  document.querySelector('.projects-container').innerHTML = projectCardHTML;

  const button = document.getElementById("contactBtn");
  button.onclick = function() {
    const contact = document.getElementById("contact-section");
    contact.style.display = "block";
    showContactSection();
    finalstyle.disabled = false;
  }
}




  // -------------------RENDERING CONTACT CONTENTS------------------//

function showContactSection() {
  let contactContentHTML = `
  <div class="wrapper">
      <form action="">
        <h1 class="heading">CONTACT<span class="highlight-txt">ME</span></h1>
        <p class="subheading">For inquiries. You can send me an email</p>             
        <div class="name-input">
          <input type="text" placeholder="First Name" class="fname-input">
          <input type="text" placeholder="Last Name" class="lname-input">
        </div>     
        <input type="email" placeholder="Email Address" >
        <textarea name="" id="" placeholder="Your message here"></textarea>
        <div class="buttons-container">
          <button class="send-btn">Send</button>
          <button class="clear-btn">Clear</button>
        </div>
      </form>
      <div class="photo-container">
        <img src="images and icons/images/profile2.png" alt="" class="my-photo">
      </div>
    </div>
`;

document.querySelector('#contact-section').innerHTML = contactContentHTML;

  showFooterSection();
  
  // Add Fireflies
  createFireflies(60);
  
  // Display Skills
  const mySkills = ["Web Developer", "Graphic Designer", "Front-End Developer" , "Photographer", "Video Editor"];
  let stringIndex = 0;
  let arrayIndex = 0;
  let isAdding = true;
  let interval;
  const displaySkills = document.querySelector("#home-section .main-skills");

  function displayDelay(timeoutDelay, intervalDelay) {
    setTimeout(() => {
      interval = setInterval(diplaySkillsFunc, intervalDelay);
    }, timeoutDelay);
    clearInterval(interval);
  }

  function diplaySkillsFunc() {
    const skill = mySkills[arrayIndex];

    if (isAdding) {
      let skills = skill.substring(0, stringIndex + 1);
      displaySkills.innerText = `${skills}|`;
      stringIndex++;
      if (stringIndex === skill.length) {
        isAdding = false;
        displayDelay(2000, 60);
      }
    } else {
      stringIndex--;
      let skills = skill.substring(0, stringIndex);
      displaySkills.innerText = `${skills}|`;
      if (stringIndex === 0) {
        isAdding = true;
        arrayIndex = (arrayIndex + 1) % mySkills.length;
        displayDelay(500, 120);
      }
    }
  }
  
  interval = setInterval(diplaySkillsFunc, 95);
}

function showFooterSection() {

  const socials = [
    { icon: "facebook-icon.png", link: "#" },
    { icon: "tiktok-icon.png", link: "#" },
    { icon: "instagram- icon.png", link: "#" },
    { icon: "telegram-icon.png", link: "#" },
    { icon: "whatsApp-icon.png", link: "#" },
    { icon: "github-icon.png", link: "#" },
  ];

  const sections = [
    { name: "Home", id: "#home-section" },
    { name: "About", id: "#about-section" },
    { name: "Skills", id: "#skills-section" },
    { name: "Projects", id: "#projects-section" },
    { name: "Contact", id: "#contact-section" },
  ];

  const footerHTML = `
  <footer>
    <img src="images and icons/icons/logo.png" alt="Logo" class="logo">
    <h2 class="socmed-label">SOCIALS</h2>
    <nav class="socmed-nav">
      <ul>
        ${socials.map(soc => `
          <li>
            <a href="${soc.link}">
              <img src="images and icons/icons/${soc.icon}" alt="Social Media Icon" class="socmed-icon">
            </a>
          </li>
        `).join('')}
      </ul>
    </nav>
    <nav class="section-nav">
      <ul>
        ${sections.map(sec => `
          <li><a href="${sec.id}">${sec.name}</a></li>
        `).join('')}
      </ul>
    </nav>
    <p class="copyright-txt">© 2024 Aldrin James Palma. All Rights Reserved</p>
  </footer>
  `;
  document.getElementById("footer-section").innerHTML = footerHTML;

}

// Fireflies Section
function createFireflies(count) {
  const homeSection = document.querySelector('#home-section');

  for (let i = 0; i < count; i++) {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");

    firefly.style.top = Math.random() * window.innerHeight + "px";
    firefly.style.left = Math.random() * window.innerWidth + "px";

    const size = Math.random() * 2 + "rem";
    firefly.style.width = size;
    firefly.style.height = size;

    const animationDuration = Math.random() * 5 + 2 + "s"; 
    firefly.style.animationDuration = animationDuration;

    homeSection.appendChild(firefly);
  }
}
