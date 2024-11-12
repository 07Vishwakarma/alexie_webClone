const t = gsap.timeline();

t.from(".fourth div.two span ",{
    y:"-100%",
    duration:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".fourth div.two span",
        scroller:"body",
        // markers:true,
        scrub:.5
    }
})
t.from(".fourth div.three span ",{
    y:"-100%",
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".fourth div.three span",
        scroller:"body",
        // markers:true,
        scrub:.5
    }
})
t.from(".fourth div.four span ",{
    y:"-100%",
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".fourth div.four span",
        scroller:"body",
        scrub:.5
    }
})

gsap.from(".second .awards h1",{
    opacity:0,
    y:"30%",
    duration:.4,
    stagger:0.1,
    scrollTrigger:{
        trigger:".second .awards h1",
        scroller:"body",
        scrub:0.5,
        start:"top 90%",
        end:"top 40%"
    }
})
gsap.from(".third .masterwork h1",{
    opacity:0,
    y:"30%",
    duration:.4,
    stagger:0.1,
    scrollTrigger:{
        trigger:".third .masterwork h1",
        scroller:"body",
        scrub:0.5,
        start:"top 90%",
        end:"top 40%"
    }
})
gsap.from(".fifth .heading h1",{
    opacity:0,
    y:"30%",
    duration:.4,
    stagger:0.1,
    scrollTrigger:{
        trigger:".fifth .heading h1",
        scroller:"body",
        scrub:0.5,
        // markers:true,
        start:"top 90%",
        end:"top 40%"
    }
})
gsap.from(".eight .contact h1",{
    opacity:0,
    y:"30%",
    duration:.4,
    stagger:0.1,
    scrollTrigger:{
        trigger:".eight .contact h1",
        scroller:"body",
        scrub:0.5,
        // markers:true,
        start:"top 90%",
        end:"top 40%"
    }
    
})


t.to(" .sixth-one ",{
    // opacity:0,
    scrollTrigger:{
        trigger:".sixth-one ",
        scroller:"body",
        // markers:true,
        start:"top 10%",
        end:"top -10%",
        pin:true,
        scrub:true
    }
})
gsap.to(" .sixth-two  ",{
    // opacity:0,
    scrollTrigger:{
        trigger:".sixth-two ",
        scroller:"body",
        // markers:true,
        start:"top 5%",
        end:"top -20%",
        pin:true,
        scrub:true
    }
})
t.to(".sixth-three ",{
    // opacity:0,
    scrollTrigger:{
        trigger:".sixth-three ",
        scroller:"body",
        // markers:true,

        start:"top 10%",
        end:"top -30%",
        pin:true,
        scrub:true
    }
})