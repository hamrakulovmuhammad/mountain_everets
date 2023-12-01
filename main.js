let questions = document.querySelectorAll(".questions");

questions.forEach(btn=>{
btn.onclick = ()=>{
  questions.forEach(el => el.classList.remove("s"))
  btn.classList.add("s")
}
}) 