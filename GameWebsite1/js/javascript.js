const image1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInRight2");
        }
    })

})
const image2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[1].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[2].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[3].classList.add("fadeInRight");
        }
    })

})

const Txt1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animatedTxt")[0].classList.add("fadeInLeftTxt");
        }
    })

})
image1.observe(document.querySelector(".image1"));
image2.observe(document.querySelector(".image2"));
Txt1.observe(document.querySelector(".Txt1"));