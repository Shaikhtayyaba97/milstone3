(() => {
    
    function generateResume(event: Event): void {
      event.preventDefault();
  
     
      const nameInput = document.getElementById("name") as HTMLInputElement;
      const emailInput = document.getElementById("email") as HTMLInputElement;
      const educationInput = document.getElementById("education") as HTMLInputElement;
      const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
      const skillsInput = document.getElementById("skills") as HTMLInputElement;
  
      const name = nameInput.value;
      const email = emailInput.value;
      const education = educationInput.value;
      const experience = experienceInput.value;
      const skills = skillsInput.value.split(',').map(skill => skill.trim()).join(', ');
  
     
      const resumePreview = document.getElementById("resumePreview")!;
      resumePreview.innerHTML = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
  
        <h3>Education</h3>
        <p>${education}</p>
  
        <h3>Work Experience</h3>
        <p>${experience}</p>
  
        <h3>Skills</h3>
        <p>${skills}</p>
      `;
    }
  
    const resumeForm = document.getElementById("resumeForm");
    if (resumeForm) {
      resumeForm.addEventListener("submit", generateResume);
    }
  })();