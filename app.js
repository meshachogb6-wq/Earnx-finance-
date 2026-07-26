// ================================
// EarnX-Finance Landing Page
// app.js
// ================================

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Animated Counter

function animateCounter(id, endValue, duration){

    const element = document.getElementById(id);

    if(!element) return;

    let start = 0;

    const increment = endValue / (duration / 20);

    const timer = setInterval(()=>{

        start += increment;

        if(start >= endValue){

            start = endValue;

            clearInterval(timer);

        }

        if(id === "paid"){

            element.innerText =
            "₦" + (start / 1000000).toFixed(1) + "M";

        }

        else{

            element.innerText =
            Math.floor(start).toLocaleString() + "+";

        }

    },20);

}

animateCounter("users",25847,2500);

animateCounter("online",3215,2000);

animateCounter("withdrawals",12547,2500);

animateCounter("paid",18500000,3000);


// Fade Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(

".feature-card,.testimonial-card,.step,.faq-item,.stat-card"

).forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// Button Click Animation

document.querySelectorAll("a").forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(.96)";

        setTimeout(()=>{

            button.style.transform="scale(1)";

        },150);

    });

});


// Navbar Shadow

window.addEventListener("scroll",()=>{

    const nav=document.querySelector(".navbar");

    if(window.scrollY>40){

        nav.style.boxShadow="0 10px 25px rgba(0,0,0,.35)";

    }

    else{

        nav.style.boxShadow="none";

    }

});


// Current Year in Footer (optional)

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${year} EarnX-Finance. All Rights Reserved.`;

}

console.log("EarnX-Finance Loaded Successfully");
