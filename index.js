const openBtn  = document.getElementById("openmodel");
const closeBtn = document.getElementById("closemodel");
const model    = document.getElementById("model");

openmodel.addEventListener("click", () =>
    {
        model.classList.add("open");
    });
closemodel.addEventListener("click", () =>
    {
        model.classList.remove("open");
    });
const openBtn2  = document.getElementById("openmodel2");
const closeBtn2 = document.getElementById("closemodel2");
const model2   = document.getElementById("model2");

openmodel2.addEventListener("click", () =>
    {
        model2.classList.add("open");
    });
closemodel2.addEventListener("click", () =>
    {
        model2.classList.remove("open");
    });