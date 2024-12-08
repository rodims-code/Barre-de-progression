window.onload = function(){
    animateSkills()
}
function animateSkills(){
    let skills = document.querySelectorAll('.skills')
    skills.forEach(function(){
        let endValue = parseInt(skills.textContent);
        let duration = 3000;
        let increment = endValue /(duration / 10);
        let current = 0;

        let timer = setInterval(function(){
            if(current >= endValue){
                clearInterval(timer)
            }else{
                current += increment
                skills.textContent = Math.round(current) + "%"
            }
        },10)
    })
}