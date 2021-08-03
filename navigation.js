let curIndex = 1;

// creates an eventlistener at a given location
function navigation() {
  document.querySelector("#next").addEventListener("click", () => {
    curIndex++;
    console.log(fetchByProvider(`netflix`, `${curIndex}`));
    console.log("righht");
  });

  document.querySelector("#back").addEventListener("click", () => {
    if (curIndex > 1) {
      curIndex--;
      console.log(fetchByProvider(`netflix`, `${curIndex}`));
      console.log("left");
    }
  });
}
