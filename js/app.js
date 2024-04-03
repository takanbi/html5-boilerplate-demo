gsap.registerPlugin(GSDevTools);
$(function () {
  GSDevTools.create();
  let content = document.getElementById("content");
  let demoBox = document.getElementById("demoBox");
  let titleSpans = document.querySelectorAll("#content > h1 > span");
  let para = document.querySelector("section.montserrat");
  console.log(para);
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

  function Step004() {
    let tl = gsap.timeline({
      id: "Step004",
    });
    tl.fromTo(
      para,
      { opacity: 0, y: 300 },
      { y: 0, opacity: 1, duration: 2 },
      "+=4"
    );
  }
  function Step005() {
    let tl = gsap.timeline({
      id: "Step005",
    });
    gsap.to(para, { clearProps: true }, "-=1");
  }
  function Master() {
    let master = gsap.timeline();
    master
      .add(Step001())
      .add(Step002())
      .add(Step003())
      .add(Step004())
      .add(Step005());
  }

  // Step004()
  window.addEventListener("load", (event) => {
    // console.log("page is fully loaded");
    Master();
  });

  $("section.monserrat").on("mouseenter", () => {
    this.css("transform", "scale(2)");
  });
});
