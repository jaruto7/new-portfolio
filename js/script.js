// Pobierz elementy DOM
const navBlock = document.querySelector('.nav-block');
const burger = document.querySelector(".burger");
const li = document.querySelectorAll('li');
const spnCursor = document.querySelector('.cursor');
const spnText = document.querySelector('.text');
// Utwórz zmienną przechowującą tablicę z wartościami
const txt = [`Welcome`, `I like challenges`, `I'm creative`, `I\'m Front-end Developer`];

const projectsModal = document.querySelectorAll('.gal_item .overlay .icon-right');
const imgModal = document.querySelector('.modal-bg .middle img');

// Zadeklaruj funkcję anonimową która jest aktywna dopiero w momencie kliknięcia w ikonę lupy na hoverze obrazka danego projektu
const clickModal = function () {
 // Pobierz dany obrazek który kliknął użytkownik biorąc jego atrybut
 const getImg = this.querySelector('.gal_item img').getAttribute('src');
 // Odwołaj się do pobranych elementów i podmień ich zawartość atrybutów aby zmienić ścieżki obrazka
 imgModal.src = getImg;
 // Do klasy modala przypisz klasę aby uaktywnić modal
 document.querySelector('.modal-bg').classList.toggle('active');
 // Do klasy diva obejmującego całą treść przypisz klasę aby uaktywnić efekt blur
 document.querySelector('.wrap').classList.toggle('blur');
}

projectsModal.forEach(img => img.addEventListener('click', clickModal));


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

// Nasłuchuj na zdarzenie kliknięcia iterując wszystkie elementy listy
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