const banner = document.querySelector(".canvas");
const navbar = document.querySelector(".navbar ")
window.onscroll = () => {
  this.scrollY > 10
    ? banner.classList.add("hidden") | navbar.classList.add("sticky")
    : banner.classList.remove("hidden") | navbar.classList.remove("sticky");
};
function SubForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/TI9POZvvjpBfQW1t/",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      alert("Form Data Submitted");
      $("#myForm")[0].reset();
    },
    error: function () {
      alert("There was an error :(");
    },
  });
}

