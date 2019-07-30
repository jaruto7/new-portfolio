// Pobierz elementy DOM
const navBlock = document.querySelector('.nav-block');
const burger = document.querySelector('.burger');
const li = document.querySelectorAll('aside .nav');
const spnCursor = document.querySelector('.cursor');
const spnText = document.querySelector('.text');
const zoomButton = document.querySelectorAll('.gallery-item .zoom-button');
const rightModalIcons = document.querySelectorAll('.right');
const iconX = document.querySelectorAll('.modal .top .fas');
const imgModal = document.querySelector('.img-modal');
// const projectRightIcons = document.querySelectorAll('.projectRightIcons');
// Utwórz zmienną przechowującą tablicę z wartościami
const txt = [`Welcome`, `I like challenges`, `I'm creative`, `I\'m Front-end Developer`];

// Zadeklarowanie zmiennych dla elementów menu nawigacji
const navigationItem = document.querySelectorAll('.nav-link--js');
const navigationSections = document.querySelectorAll('.navigation-section');

// Deklaracja funkcji która dodaje smooth behavior i odsuwa kliknięty element nagłówka krawędzi okna sekcji dodając górny offset
function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}

// navigationItem.forEach(nav => nav.addEventListener('click', () => {
//   scrollIt(navigationSections);
// }))

navigationItem[0].addEventListener('click', () => {
  scrollIt(navigationSections[0]);
});

navigationItem[1].addEventListener('click', () => {
  scrollIt(navigationSections[1]);
});

navigationItem[2].addEventListener('click', () => {
  scrollIt(navigationSections[2]);
});



// Zadeklaruj funkcję anonimową która jest aktywna dopiero w momencie kliknięcia w ikonę lupy na hoverze obrazka danego projektu
const clickModal = function () {
 // Pobierz dany obrazek który kliknął użytkownik biorąc jego atrybut dataset
 const getImg = this.dataset.img;
//  console.log(this.dataset.img);

 // Odwołaj się do pobranych elementów i podmień ich zawartość atrybutów aby zmienić ścieżki obrazka
 imgModal.src = getImg;

 // Do klasy modala przypisz klasę aby uaktywnić modal
 document.querySelector('.modal-bg').classList.toggle('active');
 // Do klasy diva obejmującego całą treść przypisz klasę aby uaktywnić efekt blur
 document.querySelector('.wrap').classList.toggle('blur');
}

// Zadeklaruj funkcję która zamknie modal i wyłączy blur
const closeModal = () => {
 // console.log('works');
 // Przełączaj klasy po kliknięciu w ikonę
 document.querySelector('.modal-bg').classList.toggle('active');
 document.querySelector('.wrap').classList.toggle('blur');
}

// const clickRightIcon = function () {
//  const getHref = document.querySelector('.modal-bg a');
//  console.log(getHref);
// projectRightIcons.href = getHref;
// }

// rightModalIcons.forEach(rightIcon => rightIcon.addEventListener('click', clickRightIcon));

// Zdarzenie odpowiedzialne za kliknięcie modala
zoomButton.forEach(img => img.addEventListener('click', clickModal));
// Zamknij modal
iconX.forEach(icon => icon.addEventListener('click', closeModal));


// Nasłuchuj na zdarzenie kliknięcia w hamburger
burger.addEventListener("click", function () {
 // Przełączaj klasę aby wyświetlić menu burgera
 burger.classList.toggle("active");
})
// Nasłuchiwanie na zdarzenie scrolla aby pojawił się pasek przy nawigacji menu
document.addEventListener('scroll', function () {

 if (window.scrollY > 50) {
  navBlock.classList.add('active');
 } else {
  navBlock.classList.remove('active');
 }
 // console.log(window.scrollY);
})

// Nasłuchuj na zdarzenie kliknięcia burgera iterując wszystkie elementy listy
li.forEach(li => li.addEventListener("click", function () {
 // Zamknij menu burgera 
 burger.classList.toggle("active");
}))

// Parametry do zmiany
const time = 500;

// Pierwsze słowo
let activeText = 0;
// Pierwsza litera słowa
let activeLetter = -15;

// Implementacja
// Zadeklaruj funkcję która dodające zawartość tablicy
const addLetter = () => {
 // Jeśli pierwsza litera słowa jest większa lub równa zero, wyświetl zawartość tablicy
 if (activeLetter >= 0) {
  spnText.textContent += txt[activeText][activeLetter];
 }
 // Inkrementuj litery słowa za każdym razem gdy funkcja się wykona
 activeLetter++;
 // Jeśli litery słowa są równe długości słów, inkrementuj słowo aby przejść do kolejnego
 if (activeLetter === txt[activeText].length) {
  activeText++;
  // Sprawdź czy słowo jest równe zawartości i jest tym samym typem długości całej tablicy
  if (activeText === txt.length) {
   // Ustaw wartość słowa aby zaczynało się od początku
   activeText = 0;
  }
  // Zwróć metodę która wykonuje się tylko raz
  return setTimeout(() => {
   // Ustaw wartość litery słowa
   activeLetter = -15;
   // Wyczyść aktualne słowo aby kolejne słowo zostało wyświetlone
   spnText.textContent = '';
   // Ponownie wywołaj funkcję gdyż return zakończył działanie poprzedniej funkcji
   addLetter();
  }, 2000)
 }

 // Ustaw czas funkcji która wykona się przynajmniej raz
 setTimeout(addLetter, 100);
}

// Wywołaj funkcję która dodaje zawartość tablicy
addLetter();

// Zadeklaruj funkcję anonimową która doda lub usunie klasę odpowiedzialną za animację kursora
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}

// Ustaw interwał czasowy który będzie się wykonywał non-stop dla animacji kursora
setInterval(cursorAnimation, time);