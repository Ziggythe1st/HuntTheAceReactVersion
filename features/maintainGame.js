/* <div class="card">
        <div class="card-inner">
         <div class="card-front">
            <img src="images/-JackClubs.ping" alt="" class="card-img">
          </div>
          <div class="card-back">
            <img src="images/card-back-Blue.png" alt="" class="card-img">
          </div>
        </div>
      </div> */

// Define the card objects with an ID and image path
const cardObjectDefinitions = [
  { id: 1, imagePath: "/card-KingHearts.png" },
  { id: 2, imagePath: "/card-JackClubs.png" },
  { id: 3, imagePath: "/card-QueenDiamonds.png" },
  { id: 4, imagePath: "/card-AceSpades.png" },
];

const cardBackImgPath = "/card-back-Blue.png";

export function createCards() {
  if (document.querySelectorAll(".card").length > 0) return;

  cardObjectDefinitions.forEach((cardItem) => {
    createCard(cardItem);
  });
}

function createCard(cardItem) {
  //create div element place holders that make up card
  const cardElem = createElement("div");
  const cardInnerElem = createElement("div");
  const cardFrontElem = createElement("div");
  const cardBackElem = createElement("div");

  //create front and back image elements for a card
  const cardFrontImg = createElement("img");
  const cardBackImg = createElement("img");

  //add class and Id to card element
  addClassToElement(cardElem, "card");
  addIdToElement(cardElem, cardItem.id);

  //add class to inner card element
  addClassToElement(cardInnerElem, "card-inner");

  //add class to front card element
  addClassToElement(cardFrontElem, "card-front");

  //add class to back card element
  addClassToElement(cardBackElem, "card-back");

  //add src attribute and appropriate vaule to image element - back of card
  addSrcToImageElem(cardBackImg, cardBackImgPath);

  //add src attribute and appropriate value to image element - front of card
  addSrcToImageElem(cardFrontImg, cardItem.imagePath);

  //assign class to back image element of back of card
  addClassToElement(cardBackImg, "card-img");

  //assign class to back image element of front of card
  addClassToElement(cardFrontImg, "card-img");

  //add front image element as child element to front of card
  addChildElement(cardFrontElem, cardFrontImg);

  //add back image element as child element to back of card
  addChildElement(cardBackElem, cardBackImg);

  //add front card element as child to inner card element
  addChildElement(cardInnerElem, cardFrontElem);

  //add back card element as child to inner card element
  addChildElement(cardInnerElem, cardBackElem);

  //add inner card element to card element
  addChildElement(cardElem, cardInnerElem);

  //add card element as child element to appropriate grid cell
  addCardToGridCell(cardElem);
}

function createElement(elemType) {
  return document.createElement(elemType);
}

function addClassToElement(elem, className) {
  elem.classList.add(className);
}

function addIdToElement(elem, id) {
  elem.id = id;
}

function addSrcToImageElem(imgElem, src) {
  imgElem.src = src;
}

function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem);
}

function addCardToGridCell(card) {
  const cardPositionClassName = mapCardIdToGridCell(card);

  const cardPosElem = document.querySelector(cardPositionClassName);

  addChildElement(cardPosElem, card);
}

function mapCardIdToGridCell(card) {
  if (card.id == 1) {
    return ".card-pos-a";
  } else if (card.id == 2) {
    return ".card-pos-b";
  } else if (card.id == 3) {
    return ".card-pos-c";
  } else if (card.id == 4) {
    return ".card-pos-d";
  }
}


// The ID of the ace card (used to determine a "win")
const aceId = 4;

// Array to store card elements
let cards = [];

// Get references to HTML elements
const playGameButtonElem = document.getElementById("playGame");
const cardContainerElem = document.querySelector(".card-container");

// Grid layout for arranging cards
const collapsedGridAreaTemplate = '"a a" "a a"';
const cardCollectionCellClass = ".card-pos-a";

// Number of cards
const numCards = cardObjectDefinitions.length;

// Store card positions
let cardPositions = [];

// Game state variables
let gameInProgress = false;
let shufflingInProgress = false;
let cardsRevealed = false;

// Elements for updating game status
const currentGameStatusElem = document.querySelector(".current-status");
const scoreContainerElem = document.querySelector(".header-score-container");
const scoreElem = document.querySelector(".score");
const roundContainerElem = document.querySelector(".header-round-container");
const roundElem = document.querySelector(".round");

// Colors used for status updates
const winColor = "green";
const loseColor = "red";
const primaryColor = "black";