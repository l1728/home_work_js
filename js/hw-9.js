
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
console.log(window.sessionStorage);
sessionStorage.setItem("user-id", "123");
sessionStorage.setItem("tickets", JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 }));
console.log(sessionStorage);

const userId = sessionStorage.getItem("user-id");
console.log(userId);

const tickets = JSON.parse(sessionStorage.getItem("tickets"));
console.log(tickets);

sessionStorage.removeItem("tickets");
console.log(sessionStorage);

sessionStorage.clear();
console.log(sessionStorage);