document.addEventListener("DOMContentLoaded", function () {
    
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

   
    document.getElementById("signin-btn").addEventListener("click", function () {
        scrollToSection("signup");
    });

    
    document.getElementById("search-btn").addEventListener("click", function (event) {
        event.preventDefault(); 

        const selectedSession = document.getElementById("session").value;

        
        const sessionMap = {
            "morning-yoga": "seed",       
            "meditation": "sprout",       
            "breathwork": "tree",         
            "mindfulness": "flourish"    
        };

        if (sessionMap[selectedSession]) {
            scrollToSection(sessionMap[selectedSession]);
        }
    });
});
