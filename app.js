const logo = document.querySelectorAll("#logo path");

let i = 0;
logo.forEach(() => {
  console.log(logo[i].getTotalLength());
  i++;
});
