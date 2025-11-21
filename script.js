// Add JavaScript code for your web site here and call it from index.html.


/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/


let participantCount = 3;

/*  DARK MODE */
document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-button");
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

/* VALIDATION + RSVP LOGIC  */

const rsvpForm = document.getElementById("rsvp-form");
const rsvpButton = document.getElementById("rsvp-button");
const attendanceCount = document.getElementById("attendance-count");

const validateForm = (event) => {
  event.preventDefault();

  
  const person = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    hometown: document.getElementById("hometown").value.trim()
  };

  let hasErrors = false;
  const errorMsgs = document.querySelectorAll(".error-msg");

  // Clear old error messages
  errorMsgs.forEach((msg) => (msg.textContent = ""));

  // NAME VALIDATION
  if (person.name.length < 2 || /[0-9]/.test(person.name)) {
    const input = document.getElementById("name");
    input.classList.add("error");
    input.nextElementSibling.textContent = "Invalid name";
    hasErrors = true;
  } else {
    document.getElementById("name").classList.remove("error");
  }

  // EMAIL VALIDATION
  if (!person.email.includes("@")) {
    const input = document.getElementById("email");
    input.classList.add("error");
    input.nextElementSibling.textContent = "Invalid email";
    hasErrors = true;
  } else {
    document.getElementById("email").classList.remove("error");
  }

  // HOMETOWN VALIDATION
  if (person.hometown.length < 2 || /[0-9]/.test(person.hometown)) {
    const input = document.getElementById("hometown");
    input.classList.add("error");
    input.nextElementSibling.textContent = "Invalid hometown";
    hasErrors = true;
  } else {
    document.getElementById("hometown").classList.remove("error");
  }

  
  if (!hasErrors) {
    addParticipant(person);
    toggleModal(person);

    rsvpForm.reset();
  }
};

/* ADD PARTICIPANT */

const addParticipant = (person) => {
  participantCount++;

 
  if (participantCount <= 4) {
    const newP = document.createElement("p");
    newP.textContent = `${person.name} from ${person.hometown} has signed up.`;
    document.querySelector(".rsvp-participants").prepend(newP);
  }


  attendanceCount.innerHTML = `<strong>${participantCount} people are attending this event.</strong>`;
};

rsvpButton.addEventListener("click", validateForm);

/* MODAL */

const toggleModal = (person) => {
  const modal = document.getElementById("success-modal");
  const modalText = document.getElementById("modal-text");

  modal.style.display = "flex";

  modalText.textContent = `Thanks for RSVPing, ${person.name}! We can’t wait to see you at the event!`;

  // Start animation
  intervalId = setInterval(animateImage, 500);

  // Hide modal after 5 seconds
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId); 
  }, 5000);
};

/* IMAGE ANIMATION */

let rotateFactor = 0;
let intervalId;
let modalImage;

document.addEventListener("DOMContentLoaded", () => {
  modalImage = document.getElementById("modal-image");
});

const animateImage = () => {
  rotateFactor = rotateFactor === 0 ? -10 : 0;
  if (modalImage) {
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
  }
};


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".first_section, .second_section, .third_section, .last_section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the section is visible
  );

  sections.forEach(section => observer.observe(section));
});
