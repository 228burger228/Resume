 
const themeToggle=document.getElementById('themeToggle'),themeIcon=themeToggle.querySelector('i');
themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
});

// Scroll Animations
const fadeElements=document.querySelectorAll('.fade-in'),observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{entry.isIntersecting&&entry.target.classList.add('appear')});
},{threshold:.1});
fadeElements.forEach(el=>observer.observe(el));

// Form Submission
document.getElementById('contactForm').addEventListener('submit',e=>{
    e.preventDefault();
    alert('Сообщение отправлено! Спасибо за ваше сообщение.');
    e.target.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const target=document.querySelector(this.getAttribute('href'));
        target&&window.scrollTo({
            top:target.offsetTop-80,
            behavior:'smooth'
        });
    });
});
