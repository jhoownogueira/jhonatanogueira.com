
document.addEventListener('keypress', function(e) {
    
    if(e.key === 'Enter') {
        const languages = document.getElementById('tech');
        languages.classList.add('active');
    }

})