// Modal
function openModal(title, desc, link){
    document.getElementById('modalTitle').textContent=title;
    document.getElementById('modalDesc').textContent=desc;
    document.getElementById('modalLink').href=link;
    document.getElementById('modalBg').style.display='flex';
}
function closeModal(){ document.getElementById('modalBg').style.display='none'; }

// Search filter
const searchInput=document.getElementById('searchInput');
const projectCards=document.querySelectorAll('.project-card');
searchInput.addEventListener('keyup', function(){
    const value=this.value.toLowerCase();
    projectCards.forEach(card=>{
        const title=card.dataset.title.toLowerCase();
        card.style.display=title.includes(value)?'block':'none';
    });
});

// Cursor sparkles
document.addEventListener('mousemove', function(e){
    const sparkle=document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left=e.pageX+'px';
    sparkle.style.top=e.pageY+'px';
    document.body.appendChild(sparkle);
    setTimeout(()=>sparkle.remove(),1000);
});

// Scroll reveal
const sections=document.querySelectorAll('section');
sections.forEach(sec=>sec.classList.add('hidden-section'));
window.addEventListener('scroll', ()=>{
    sections.forEach(sec=>{
        const rect=sec.getBoundingClientRect();
        if(rect.top<window.innerHeight-100){ sec.classList.add('show-section'); }
    });
});

// Floating stars background
const numStars=50;
for(let i=0;i<numStars;i++){
    const star=document.createElement('div');
    star.classList.add('floating-star');
    star.style.top=Math.random()*window.innerHeight+'px';
    star.style.left=Math.random()*window.innerWidth+'px';
    star.style.animationDelay=Math.random()*20+'s';
    star.style.width=(2+Math.random()*3)+'px';
    star.style.height=star.style.width;
    document.body.appendChild(star);
}
window.addEventListener('resize', ()=>{
    document.querySelectorAll('.floating-star').forEach(star=>{
        star.style.top=Math.random()*window.innerHeight+'px';
        star.style.left=Math.random()*window.innerWidth+'px';
    });
});
