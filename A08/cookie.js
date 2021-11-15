function setCookie(cname, cvalue, exdays) { // ฟังก์ชัน set คุกกี้
    const d = new Date(); // กำหนดตัวแปร d เก็บวันเวลา
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000); //กำหนดเวลาในการเก็บคุกกี้
    let expires = "expires=" + d.toGMTString(); // กำหนดตัวแปร expires เก็บจำนวนวันจนกว่าคุกกี้จะหมดอายุ
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // สร้างคุกกี้และเก็บการตั้งค่าต่างๆ
}

function getCookie(cname) { // ฟังก์ชัน get คุกกี้
    let name = cname + "="; // ตั้งค่าชื่อคุกกี้
    let decodedCookie = decodeURIComponent(document.cookie); // ถอดรหัสคุกกี้เพื่อจัดการกรณีมีอักขระพิเศษ
    let ca = decodedCookie.split(";"); // กำหนด ca เก็บค่าหลังจากแยกรหัสคุกกี้จาก ; ออกเป็นอาร์เรย์แล้ว
    for (let i = 0; i < ca.length; i++) { // วนลูป ca
        let c = ca[i]; // กำหนด c เป็น ca ที่ index = i
        while (c.charAt(0) == " ") { // ตรวจสอบข้อมูล c ตัวแรก 
            c = c.substring(1); // ถ้าว่างเปล่า (" ") ให้คืนค่า 1
        }
        if (c.indexOf(name) == 0) { // ตรวจสอบเงื่อนไขว่าค่า index แรกที่พบ name ใน c แต่ละครั้ง
            return c.substring(name.length, c.length); // ถ้า index = 0 คืนค่า length ของ name และ c
        }
    }
    return "";
}

function checkCookie() { //เราสร้างฟังก์ชันที่ตรวจสอบว่ามีการตั้งค่าคุกกี้หรือไม่
    let user = getCookie("username"); //get ชื่อผู้ใช้
    if (user != "") {
        alert("Welcome Back!" + " " + user); //จะแสดงชื่อผู้ใช้ที่กรอกมา
    } else {
        user = prompt("Enter your name:", ""); //ถ้าหากไม่ได้ตั้งค่า cookie ก็จะถามชื่อ user 
        if (user != "" && user != null) { //ถ้าทำการกรอกเข้ามาแล้ว
            setCookie("username", user, 365); //จะ set cookie เป็นชื่อของผู้ใช้ เป็นระยะเวลา 356 วัน
        }
    }
}

window.onload = checkCookie();

export class CookieUtil {
    static get(name) {
        console.log(`all cookies: ${document.cookie}`);
        let cookieName = `${encodeURIComponent(name)}=`,
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        console.log(`cookieName = ${cookieName}`);
        console.log(`cookieStart = ${cookieStart}`);

        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(';', cookieStart);
            console.log(`cookieEnd = ${cookieEnd}`);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(
                document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
            );
            console.log(`cookieValue = ${cookieValue}`);
        }

        return cookieValue;
    }

    static set(name, value, expires) {
        let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

        if (expires instanceof Date) {
            cookieText += `; expires=${expires.toUTCString()}`;
            // cookieText += `; expires=${expires}`;
        }

        console.log(`cookieText = ${cookieText}`);
        document.cookie = cookieText;
    }

    static unset(name) {
        CookieUtil.set(name, '', new Date(0));
    }
}
