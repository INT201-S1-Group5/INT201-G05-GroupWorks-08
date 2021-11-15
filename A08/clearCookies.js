function deleteAllCookies() { //ลบตัว cookie ออก โดยตั้งค่าให้อายุของ cookie น้อยกว่าเวลาปัจจุบัน
    document.cookie = "total= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
}