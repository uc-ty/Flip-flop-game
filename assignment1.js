document.addEventListener("DOMContentLoaded", () => {
  let seriesOfTwo = document.querySelector("#series2");
  let seriesOfThree = document.querySelector("#series3");
  let seriesOfFour = document.querySelector("#series4");
  // image option
  
  let imgArray = [
    {
      name: "Angular",
      img: "image/Angular.png",
    },

    {
      name: "Bootstrap",
      img: "image/Bootstrap.png",
    },
    {
      name: "C++",
      img: "image/C++.png",
    },

    {
      name: "CSharp",
      img: "image/CSharp.png",
    },
    {
      name: "CSS3",
      img: "image/CSS3.png",
    },

    {
      name: "HTML5",
      img: "image/HTML5.png",
    },
    {
      name: "Java",
      img: "image/Java.png",
    },

    {
      name: "Javasccript",
      img: "image/Javascript.png",
    },
    {
      name: "Kotlin",
      img: "image/Kotlin.png",
    },

    {
      name: "React",
      img: "image/React.png",
    },
    {
      name: "Svelte",
      img: "image/Svelte.png",
    },

    {
      name: "Vue",
      img: "image/Vue.png",
    },
  ];

  checkedSeriesTwo = () => {
    seriesOfTwo.checked = true;
    seriesOfTwo.disabled = true;
    seriesOfThree.disabled = true;
    seriesOfFour.disabled = true;
    series();
  };

  checkedSeriesThree = () => {
    seriesOfThree.checked = true;
    seriesOfTwo.disabled = true;
    seriesOfThree.disabled = true;
    seriesOfFour.disabled = true;
    series();
  };

  checkedSeriesFour = () => {
    seriesOfFour.checked = true;
    seriesOfTwo.disabled = true;
    seriesOfThree.disabled = true;
    seriesOfFour.disabled = true;
    series();
  };

  function radioReset() {
    seriesOfTwo.checked = false;
    seriesOfThree.checked = false;
    seriesOfFour.checked = false;
    seriesOfTwo.disabled = false;
    seriesOfThree.disabled = false;
    seriesOfFour.disabled = false;
  }

  let duplicateImg;
  function checkSeries() {
    if (seriesOfTwo.checked) {
      duplicateImg = [...imgArray, ...imgArray];
    } else if (seriesOfThree.checked) {
      let img = imgArray.slice(0, 8);
      duplicateImg = [...img, ...img, ...img];
    } else if (seriesOfFour.checked) {
      let img = imgArray.slice(0, 6);
      duplicateImg = [...img, ...img, ...img, ...img];
    }
  }

  function shuffleCard() {
    duplicateImg.sort(() => 0.5 - Math.random());
  }

  let grid = document.querySelector("#grid");
  let resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let interval;

  // create grid

  function createGrid() {
    grid.innerHTML = "";

    for (let i = 0; i < 24; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "image/test.png");
      card.className = "frontImg";
      card.setAttribute("data-id", i);
      grid.appendChild(card);
    }
  }

  //check matches of card
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    let optionOneId = cardsChosenId[0];
    let optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "image/test.png");
      cards[optionTwoId].setAttribute("src", "image/test.png");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "image/test.png");
      cards[optionTwoId].setAttribute("src", "image/test.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.innerHTML = cardsWon.length;
    if (cardsWon.length === duplicateImg.length / 2) {
      resultDisplay.innerHTML = "Congratulations! You found them all!";
      clearInterval(interval);
    }
  }

  function checkForMatch3() {
    let cards = document.querySelectorAll("img");
    let optionOneId = cardsChosenId[0];
    let optionTwoId = cardsChosenId[1];
    let optionThreeId = cardsChosenId[2];

    if (optionOneId == optionTwoId && optionTwoId == optionThreeId) {
      cards[optionOneId].setAttribute("src", "image/test.png");
      cards[optionTwoId].setAttribute("src", "image/test.png");
      cards[optionThreeId].setAttribute("src", "image/test.png");
    } else if (
      cardsChosen[0] === cardsChosen[1] &&
      cardsChosen[1] === cardsChosen[2]
    ) {
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cards[optionThreeId].removeEventListener("click", flipCard);

      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "image/test.png");
      cards[optionTwoId].setAttribute("src", "image/test.png");
      cards[optionThreeId].setAttribute("src", "image/test.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.innerHTML = cardsWon.length;
    if (cardsWon.length === duplicateImg.length / 3) {
      resultDisplay.innerHTML = "Congratulations! You found them all!";
      clearInterval(interval);
    }
  }

  function checkForMatch4() {
    let cards = document.querySelectorAll("img");
    let optionOneId = cardsChosenId[0];
    let optionTwoId = cardsChosenId[1];
    let optionThreeId = cardsChosenId[2];
    let optionFourId = cardsChosenId[3];

    if (
      optionOneId == optionTwoId &&
      optionTwoId == optionThreeId &&
      optionThreeId == optionFourId
    ) {
      cards[optionOneId].setAttribute("src", "image/test.png");
      cards[optionTwoId].setAttribute("src", "image/test.png");
      cards[optionOneId].setAttribute("src", "image/test.png");
      cards[optionTwoId].setAttribute("src", "image/test.png");
    } else if (
      cardsChosen[0] === cardsChosen[1] &&
      cardsChosen[1] === cardsChosen[2] &&
      cardsChosen[2] === cardsChosen[3]
    ) {
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cards[optionThreeId].removeEventListener("click", flipCard);
      cards[optionFourId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "image/test.png");
      cards[optionTwoId].setAttribute("src", "image/test.png");
      cards[optionThreeId].setAttribute("src", "image/test.png");
      cards[optionFourId].setAttribute("src", "image/test.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.innerHTML = cardsWon.length;
    if (cardsWon.length === duplicateImg.length / 4) {
      resultDisplay.innerHTML = "Congratulations! You found them all!";
      clearInterval(interval);
    }
  }

  //flip the card

  function flipCard() {
    let imgId = this.getAttribute("data-id");
    cardsChosen.push(duplicateImg[imgId].name);
    cardsChosenId.push(imgId);
    this.setAttribute("src", duplicateImg[imgId].img);
    if (cardsChosen.length === 2 && seriesOfTwo.checked) {
      setTimeout(checkForMatch, 500);
      return;
    }
    if (cardsChosen.length === 3 && seriesOfThree.checked) {
      setTimeout(checkForMatch3, 800);
      return;
    }
    if (cardsChosen.length === 4 && seriesOfFour.checked) {
      setTimeout(checkForMatch4, 1000);
      return;
    }
  }

  function flipAllCard() {
    let imageElements = document.getElementsByClassName("frontImg");
    Array.from(imageElements).forEach((ele, index) => {
      ele.setAttribute("src", duplicateImg[index].img);
    });
  }

  let showBtn = document.querySelector("#show");
  showBtn.addEventListener(
    "click",
    (showButton = () => {
      flipAllCard();
      stopTimer();
    })
  );

  let myInterval;
  function series() {
    checkSeries();
    shuffleCard();
    resultDisplay.innerHTML = "0";
    cardsWon = [];
    let imageElements = document.getElementsByClassName("frontImg");
    Array.from(imageElements).forEach((ele) => {
      ele.addEventListener("click", flipCard);
    });
    startTimer();
  }
  let timer;
  function startTimer() {
    timer = document.querySelector("#timer");
    let second = 60;
    myInterval = setInterval(function () {
      timer.value = second -= 1;
      if (second < 0) {
        clearInterval(interval);
        alert("Game Over");
        flipAllCard();
        timer.value = 60;
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(myInterval);
    timer.value = 60;
  }

  newGame = document.querySelector("#new_game");
  newGame.addEventListener(
    "click",
    (newGame = () => {
      createGrid();
      radioReset();
      cardsChosen = [];
      cardsChosenId = [];
      duplicateImg = [];
      stopTimer();
    })
  );

  createGrid();
});

function help() {
  alert(
    "* Click to Start New Game \n* Select The series of the Game\n* Match the Image \n* Click the Show button for showing the image\n* You have only 60 second to complete the game"
  );
}
