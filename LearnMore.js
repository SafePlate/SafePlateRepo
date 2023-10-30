    <script>
        function toggleAboutText() {
            const aboutText = document.getElementById("about-text");
            const learnMoreButton = document.getElementById("learn-more-button");
            
            if (aboutText.style.display === "none" || aboutText.style.display === "") {
            
                aboutText.style.display = "block";
                learnMoreButton.innerHTML = "Show Less"; 
            } 
            
            else {
                aboutText.style.display = "none";
                learnMoreButton.innerHTML = "Learn More"; 
            }
        }
    </script>
