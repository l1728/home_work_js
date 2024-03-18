
// localStorage.setItem("ui-theme", "light");

// const settings = {
//     theme: "dark",
//     isAuthenticated: true,
//     options: [1, 2, 3]
// };

// localStorage.setItem("settings", JSON.stringify(settings));


// const saveTheme = localStorage.getItem("ui-theme");
// console.log(saveTheme);

// const savedItem = localStorage.getItem("key-that-does-not-exist");
// console.log(savedItem);

// const savedSetting = localStorage.getItem("settings");
// console.log(savedSetting);

// const parsedSetting = JSON.parse(savedSetting);
// console.log(parsedSetting);

// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme"));

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme"));

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");
// console.log(localStorage);
// localStorage.clear();
// console.log(localStorage);
// console.log(window.sessionStorage);
// sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem("tickets", JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 }));
// console.log(sessionStorage);

// const userId = sessionStorage.getItem("user-id");
// console.log(userId);

// const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets);

// sessionStorage.removeItem("tickets");
// console.log(sessionStorage);

// sessionStorage.clear();
// console.log(sessionStorage);




//Кейс: Форма з повідомленням

//  <form class="feedback-form">
//       <textarea name="message"></textarea>
//       <button type="submit">Send feedback</button>
//     </form>


const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;//збережене повідомлення з локального сховища
const localStorageKey = "goit-example-message"; //використовуємо локальне сховище, щоб при перезавантаженні сторінки зберігалося введене повідомлення

textarea.value = localStorage.getItem(localStorageKey) ?? "";//встановлення збереженого повідомлення з локального сховища його початковим значенням для текстового поля під час завантаження сторінки

form.addEventListener("input", (evt) => {//Щоразу, коли змінюється значення поля, тобто відбувається подія "input", ми:
//використовуємо делегування подій
//ловимо подію на формі
//використовуємо властивість target для запису поточного значення поля в локальне сховище
       localStorage.setItem(localStorageKey, evt.target.value); //зберігаємо поточне значення текстового поля під час введення
});
form.addEventListener("submit", evt => {
    evt.preventDefault();
    console.log(evt.target.elements.message.value); //під час сабміту форми будемо виводити в консоль значення текстового поля
    localStorage.removeItem(localStorageKey);//Під час сабміту форми будемо очищати збережене значення методом removeItem
    form.reset(); //очищаємо форму
});