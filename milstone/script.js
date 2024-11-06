(function () {
   
    function generateResume(event) {
        event.preventDefault();
       
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var educationInput = document.getElementById("education");
        var experienceInput = document.getElementById("experience");
        var skillsInput = document.getElementById("skills");
        var name = nameInput.value;
        var email = emailInput.value;
        var education = educationInput.value;
        var experience = experienceInput.value;
        var skills = skillsInput.value.split(',').map(function (skill) { return skill.trim(); }).join(', ');
       
        var resumePreview = document.getElementById("resumePreview");
        resumePreview.innerHTML = "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n  \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n  \n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n  \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n      ");
    }
    
    var resumeForm = document.getElementById("resumeForm");
    if (resumeForm) {
        resumeForm.addEventListener("submit", generateResume);
    }
})();
