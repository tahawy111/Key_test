let box = document.querySelectorAll(".box");
document.addEventListener("keydown", (e) => {
  //   console.log(
  //     document.querySelector(`.box[data-key="${e.key.toUpperCase()}"]`)
  //   );
    document
      .querySelector(`.box[data-key="${e.key.toUpperCase()}"]`)
      .classList.add("active");
    console.log(e.key.toUpperCase());
//   if (e.key.toUpperCase() == "CONTROL") {
//     alert("انت دوست علي الـ Control")
//   }
});
