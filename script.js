document.addEventListener("DOMContentLoaded", () => {
  // Create cursor animation
  const cursorDot = document.querySelector(".cursor-dot")

  // Create particles for cursor
  function createCursorParticles() {
    const particleCount = 80 // Reduced from 150 to 80
    const colors = ["#ff00cc", "#00ffcc", "#ffcc00", "#00ccff", "#cc00ff", "#c084fc", "#a855f7", "#d8b4fe"]

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "cursor-particle"

      // Random size
      const size = Math.random() * 4 + 1 // Reduced from 8+2 to 4+1

      // Random color
      const color = colors[Math.floor(Math.random() * colors.length)]

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border-radius: 50%;
        pointer-events: none;
        opacity: 0;
        box-shadow: 0 0 5px ${color}; /* Reduced shadow size */
      `

      cursorDot.appendChild(particle)
    }
  }

  createCursorParticles()

  const particles = document.querySelectorAll(".cursor-particle")
  let mouseX = 0
  let mouseY = 0

  // Update cursor position
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    // Update cursor dot position
    cursorDot.style.background = `radial-gradient(circle at center, 
      rgba(192, 132, 252, 0.8) 0%, 
      rgba(168, 85, 247, 0.6) 20%, 
      rgba(216, 180, 254, 0.4) 40%, 
      rgba(192, 132, 252, 0.2) 60%, 
      rgba(168, 85, 247, 0.1) 80%, 
      rgba(0, 0, 0, 0) 100%)`
    cursorDot.style.left = `${mouseX}px`
    cursorDot.style.top = `${mouseY}px`

    // Animate particles
    particles.forEach((particle, index) => {
      // Calculate position with delay based on index
      setTimeout(() => {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 40 // Reduced from 100 to 40
        const particleX = mouseX + Math.cos(angle) * distance
        const particleY = mouseY + Math.sin(angle) * distance

        particle.style.left = `${particleX}px`
        particle.style.top = `${particleY}px`
        particle.style.opacity = "0.8"

        // Fade out and move away
        setTimeout(() => {
          particle.style.opacity = "0"
          particle.style.transform = `translate(${Math.cos(angle) * 15}px, ${Math.sin(angle) * 15}px)` // Reduced from 30 to 15
        }, 200)
      }, index * 3)
    })
  })

  // Add hover effect to links and buttons
  const interactiveElements = document.querySelectorAll(
    'a, button, input, textarea, select, .navbar-toggler, [role="button"]',
  )

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursorDot.style.transform = "translate(-50%, -50%) scale(0.7)"
      cursorDot.style.background = `radial-gradient(circle at center, 
        rgba(216, 180, 254, 0.9) 0%, 
        rgba(192, 132, 252, 0.7) 20%, 
        rgba(168, 85, 247, 0.5) 40%, 
        rgba(192, 132, 252, 0.3) 60%, 
        rgba(168, 85, 247, 0.1) 80%, 
        rgba(0, 0, 0, 0) 100%)`
    })

    element.addEventListener("mouseleave", () => {
      cursorDot.style.transform = "translate(-50%, -50%) scale(1)"
      cursorDot.style.background = `radial-gradient(circle at center, 
        rgba(192, 132, 252, 0.8) 0%, 
        rgba(168, 85, 247, 0.6) 20%, 
        rgba(216, 180, 254, 0.4) 40%, 
        rgba(192, 132, 252, 0.2) 60%, 
        rgba(168, 85, 247, 0.1) 80%, 
        rgba(0, 0, 0, 0) 100%)`
    })
  })

  // Create background particles dynamically
  const particlesContainer = document.querySelector(".particles")
  const particleCount = 100 // Increased from 50 to 100

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span")
    particle.className = "particle"

    // Random position
    const posX = Math.random() * 100
    const posY = Math.random() * 100

    // Random size
    const size = Math.random() * 5 + 1 // Increased size range

    // Random animation duration
    const duration = Math.random() * 30 + 15 // Increased duration

    // Random animation delay
    const delay = Math.random() * 15

    // Random color
    const colors = ["rgba(168, 85, 247, ", "rgba(192, 132, 252, ", "rgba(216, 180, 254, ", "rgba(147, 51, 234, "]
    const color = colors[Math.floor(Math.random() * colors.length)]
    const opacity = Math.random() * 0.5 + 0.1

    // Set styles
    particle.style.cssText = `
      position: absolute;
      top: ${posY}%;
      left: ${posX}%;
      width: ${size}px;
      height: ${size}px;
      background: ${color}${opacity});
      border-radius: 50%;
      animation: float ${duration}s linear infinite;
      animation-delay: ${delay}s;
      box-shadow: 0 0 ${size * 2}px ${color}${opacity * 0.5});
      z-index: 0;
    `

    particlesContainer.appendChild(particle)
  }

  // Mobile menu toggle
  const menuBtn = document.querySelector(".navbar-toggler")
  const navbarCollapse = document.querySelector(".navbar-collapse")

  menuBtn.addEventListener("click", () => {
    navbarCollapse.classList.toggle("show")
  })

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navbarCollapse.classList.remove("show")
    })
  })

  // Profession text animation
  const professions = ["Frontend Developer", "UI/UX Designer", "React Developer"]
  const professionText = document.getElementById("profession-text")
  let currentIndex = 0

  function animateProfession() {
    // Fade out
    professionText.style.opacity = 0

    setTimeout(() => {
      // Change text
      currentIndex = (currentIndex + 1) % professions.length
      professionText.textContent = professions[currentIndex]

      // Fade in
      professionText.style.opacity = 1
    }, 500)
  }

  // Set initial text
  if (professionText) {
    professionText.textContent = professions[0]
    professionText.style.transition = "opacity 0.5s ease"
    // Start animation
    setInterval(animateProfession, 3000)
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.padding = "10px 0"
    } else {
      navbar.style.padding = "20px 0"
    }

    // Scroll to top button visibility
    const scrollTopBtn = document.getElementById("scrollToTop")
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("active")
    } else {
      scrollTopBtn.classList.remove("active")
    }
  })

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollToTop")

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") return

      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (navbarCollapse.classList.contains("show")) {
          menuBtn.click()
        }
      }
    })
  })

  // Resume download
  const resumeLinks = document.querySelectorAll("#resume-link-1, #resume-link-2, #resume-link-3")

  resumeLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Open resume in new tab
      window.open("https://drive.google.com/file/d/1afzUcDfRiOJ3kaAfrHqS2PmwZiF14sP8/view?usp=sharing", "_blank")

      // Download resume
      const downloadLink = document.createElement("a")
      downloadLink.href = "https://drive.google.com/uc?export=download&id=1afzUcDfRiOJ3kaAfrHqS2PmwZiF14sP8"
      downloadLink.download = "Sarita-Kumari-RESUME.pdf"
      downloadLink.click()
    })
  })

  // Add animation to elements when they come into view
  const animateElements = document.querySelectorAll(".skill-item, .project-card, .contact-item")

  function checkIfInView() {
    animateElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = element.classList.contains("contact-item")
          ? "translateX(0)"
          : element.classList.contains("skill-item")
            ? "translateX(0)"
            : "translateY(0)"
      }
    })
  }

  // Set initial opacity
  animateElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = element.classList.contains("contact-item")
      ? "translateX(-20px)"
      : element.classList.contains("skill-item")
        ? "translateX(-20px)"
        : "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Check elements on load and scroll
  window.addEventListener("load", checkIfInView)
  window.addEventListener("scroll", checkIfInView)
})
