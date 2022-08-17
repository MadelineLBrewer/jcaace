
// Expand more services page

document.addEventListener('DOMContentLoaded', () => {
  const expandsMore = document.querySelectorAll('[expand-more]')

  function expand(){
    const showContent = document.getElementById(this.dataset.target)
    if (showContent.classList.contains('expand-active')){
      this.innerHTML= this.dataset.showtext
    } else{
   this.innerHTML=this.dataset.hidetext
    }
    showContent.classList.toggle('expand-active')
  }

  expandsMore.forEach(expandMore => {
    expandMore.addEventListener('click', expand)
  })

})

// Expand more projects page

function leedFunction(){
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("myBtn1");

  if (dots1.style.display === "none"){
    dots1.style.display ="inline";
    btnText1.innerHTML = "LEED Project List";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less";
    moreText1.style.display = "inline";
  }
}

function educationFunction(){
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none"){
    dots2.style.display ="inline";
    btnText2.innerHTML = "Education Project List";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}

function commercialFunction(){
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("myBtn3");

  if (dots3.style.display === "none"){
    dots3.style.display ="inline";
    btnText3.innerHTML = "Commercial Project List";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
  }
}