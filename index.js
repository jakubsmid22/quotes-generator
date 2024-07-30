const loadingPage = document.getElementById("loading");
const loadingText = "Loading...";

const displayLoadingText = () => {
  let index = 0;

  const addLetter = () => {
    if (index < loadingText.length) {
      loadingPage.textContent += loadingText[index];
      index++;
      setTimeout(addLetter, 100);
    } else {
      loadingPage.textContent = "";
      index = 0;
      addLetter();
    }
  };

  addLetter();
};

displayLoadingText();

const generateQuote = () => {
  fetch("https://api.api-ninjas.com/v1/quotes", {
    method: "GET",
    headers: {
      "X-Api-Key": "", // API Ninjas KEY
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const { author, quote } = data[0];
      document.getElementById("author").textContent = author;
      document.getElementById("quote").textContent = quote;
    })
    .catch((err) => console.log(err))
    .finally(() => loadingPage.classList.add("opacity-0"));
};

generateQuote();

setInterval(generateQuote, 5000)