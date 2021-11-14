// ddddddddddddddt.checked = false;

// function clickHandler() {
//     if (this.checked) {
//         document.body.classList.remove("light");
//         document.body.classList.add("dark");
//     } else {
//         document.body.classList.add("light");
//         document.body.classList.remove("dark");
//     }
// }

const localStorageTheme = localStorage.getItem("theme");

function checkTheme() {
    if (localStorageTheme === "dark") {
        document.body.classList.add(localStorageTheme);
        const themeSwitch = document.getElementById("theme");
        themeSwitch.checked = true;
    } else {
        document.body.classList.add(localStorageTheme);
        const themeSwitch = document.getElementById("theme");
        themeSwitch.checked = false;
    }
}

window.onload = checkTheme(), checkCookie();

let t = document.getElementById("theme");
t.addEventListener("click", () => { // สร้างฟังก์ชันการทำงานใน switch หลังจากคลิกไปแล้ว
    // clickHandler;

    // if (localStorageTheme === "light" || t.innerText = "Switch Dark Mode") {
    if (t.innerText === "Switch Dark Mode") { //ใช้ if เปรียบเทียบว่าข้อความในปุ่ม theme ตอนคลิก ตรงกับ Switch Dark Mode
        t.className = "btnindark"; //เปลี่ยนสีปุ่มตามที่กำหนดใน class btnindark
        t.innerText = "Switch Light Mode"; //เปลี่ยนข้อความในปุ่มเป็น Switch Light Mode
        localStorage.setItem("theme", "dark"); //เซ็ตข้อมูลไปเก็บใน LS ว่าเป็น theme dark
        // } else if (localStorageTheme === "dark" || t.innerText = "Switch Light Mode") {
        // t.className = "btninwhite";
        // t.innerText = "Switch Dark Mode";
        // localStorage.setItem("theme", "light");

    } else { // กรณี t.innerText ไม่ตรงกับ "Switch Dark Mode"
        t.className = "btninwhite"; //เปลี่ยนสีปุ่มตามที่กำหนดใน class btninwhite
        t.innerText = "Switch Dark Mode"; //เปลี่ยนข้อความในปุ่มเป็น Switch Dark Mode
        localStorage.setItem("theme", "light"); //เซ็ตข้อมูลไปเก็บใน LS ว่าเป็น theme light
    }
});

function theme() { //สร้างฟังก์ชันสำหรับกำหนด css ของ theme สลับไปมาเมื่อที่คลิ๊กที่ปุ่มเปลี่ยน theme
    let element = document.body;
    element.classList.toggle("switchMode");
}