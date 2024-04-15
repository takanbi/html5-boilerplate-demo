// gsap.registerPlugin(GSDevTools, SplitText, TextPlugin, ScrollTrigger, DrawSVGPlugin);
gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(GSDevTools, TextPlugin, SplitText);
// gsap.registerPlugin(GSDevTools, TextPlugin, SplitText);
// gsap.registerPlugin(GSDevTools, TextPlugin, SplitText);
$(function () {
  // GSDevTools.create();
  let content = document.getElementById("content");
  let demoBox = document.getElementById("demoBox");
  let titleSpans = document.querySelectorAll("#content > h1 > span");
  let para = document.querySelector("section.montserrat");
  let sect6 = document.getElementById("section6");
  let section6Divs = document.querySelectorAll(".section-6Divs");
  console.log(section6Divs);
  function Step001() {
    let tl = gsap.timeline({
      id: "Step001",
    });
    tl.fromTo(demoBox, { opacity: 0 }, { opacity: 1, duration: 2 });
  }
  function Step002() {
    let tl = gsap.timeline({
      id: "Step002",
    });
    tl.fromTo(demoBox, { opacity: 1 }, { opacity: 0, duration: 2 }, "+=4");
  }
  function Step003() {
    let tl = gsap.timeline({
      id: "Step003",
    });
    tl.from(
      titleSpans,
      {
        opacity: 0,
        y: -100,
        x: 50,
        duration: 0.5,
        stagger: 0.3,
        ease: "bounce.out",
      },
      "+=6"
    );
  }

  // function Step004() {
  //   // gsap.set(para, {
  //   //   autoAlpha: 0,
  //   //   y: 300
  //   // })
  //   let tl = gsap.timeline({
  //     id: "Step004",
  //   });
  //   tl.fromTo(
  //     para,
  //     { opacity: 0, y: 300 },
  //     { y: 0, opacity: 1, duration: 2 },"+=4"
  //   );
  // }

  function Step004() {
    gsap.set(para, {
      y: 300,
      autoAlpha: 0
    })
    let tl = gsap.timeline({
      id: "Step004"
    })
    tl.to(para, {autoAlpha: 1, y:0, duration: 2}, "+=4")
  }
  // function Step005() {
  //   let tl = gsap.timeline({
  //     id: "Step005",
  //   });
  //   gsap.to(para, { clearProps: true }, "+=1");
  // }

  function Step006() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sect6,
        marker: true,
        markers: {startColor: "red", endColor: "green", fontSize: "18px", fontWeight: "bold", indent: 20},
        start: "top 300px",
        end: "bottom 600px",
        ease: "power1.inOut",
        // pin: true,
        scrub: 1
      }
    })
    tl.fromTo(section6Divs, {y: 200, opacity: 0}, {y: 0, opacity: 1, duration: 3, stagger: 0.6})
  }
  function Master() {
    let master = gsap.timeline();
    master
      .add(Step001())
      .add(Step002())
      .add(Step003())
      .add(Step004())
      // .add(Step005());
      .add(Step006())
  }

  // Step004()
  window.addEventListener("load", (event) => {
    // console.log("page is fully loaded");
    Master();
  });

  $("section.monserrat").on("mouseenter", () => {
    this.css("transform", "scale(2)");
  });
//text plugin
gsap.to("p#one", {
  // text: {
  //   value: "This is some text",
  //   delimiter: " "
  // }
  text: "typewriter effect with GSAP 3",
  ease: "power1.in",
  duration: 2,
  repeat: 10,
  yoyo: true,
  repeatDelay: 0.4
})

//split text letters
let split1;
let animation1 = gsap.timeline({
  id: "animation1",
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.3
})
function init1() {
  gsap.set("#container3", {
    autoAlpha: 1
  })
  split1 = new SplitText("p#two", {
    type: "chars"
  })
  animation1.from(split1.chars, {
    opacity: 0,
    y: 50,
    ease: "back(4)",
    stagger: 0.05
  })
  // GSDevTools.create({
  //   animation1: "animation1"
  // })
}
window.addEventListener("load", init1)
//split text words
let split2;
let animation2 = gsap.timeline({
  id: "animation2"
})
function init2() {
  split2 = new SplitText("p#three", {
    type: "words"
  })
  gsap.set("#container4", {
    autoAlpha: 1
  })
  animation2.from(split2.words, {
    duration: 3,
    opacity: 0,
    rotation: -40,
    scale: 0.4,
    stagger: 0.1,
    ease: "back",
    repeat: -1
  })
  // GSDevTools.create({
  //   animation2: "animation2"
  // })
}
window.addEventListener("load", init2)
//split text line
let split3;
let animation3 = gsap.timeline({
  id: "animation3",
  repeat: -1,
  repeatDelay: 3
})
function init3() {
  split3 = new SplitText("p#four", {
    type: "lines"
  })
  gsap.set("#container5", {
    autoAlpha: 1
  })
  animation3.from(split3.lines, {
    opacity: 0,
    rotationX: -90,
    rotationY: -80,
    stagger: 0.4,
    transformOrigin: "50% 50% -200"
  })
  // GSDevTools.create({
  //   animation3: "animation3"
  // })
}
window.addEventListener("load", init3)
//jQuery ends here
});
