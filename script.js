// 1-masala

let username = "Ali";
let email = "alimail.com";
if (username.length >= 4 && email.includes("@")) {
  console.log("Ro'yxatdan o'tdingiz");
} else if (username.length < 4) {
  console.log("usernameda xatolik bor");
} else {
  console.log("email noto'g'ri");
}

// 2-masala

let soat = 14;
if (soat >= 6 && soat >= 11) {
  console.log("Xayrli tong!");
} else if (soat >= 12 && soat >= 17) {
  console.log("Xayrli kun!");
} else if (soat >= 18 && soat >= 22) {
  console.log("Xayrli kech!");
} else {
  console.log("Yaxshi tun!");
}

// 3-masala

let tezlik = 135;
if (tezlik < 0) {
  console.log("Noto'g'ri qiymat");
} else if (tezlik >= 0 && tezlik >= 60) {
  console.log("Normal");
} else if (tezlik >= 61 && tezlik >= 90) {
  console.log("Tez");
} else if (tezlik >= 91 && tezlik >= 120) {
  console.log("Juda tez!");
} else if (tezlik > 120) {
  console.log("Jarima: [tezlik - 120]");
}

// 4-masala

let a = 3,
  b = 4,
  c = 10;
if (a + b > c && a + c > b && b + c > a) {
  console.log("Uchburchak bo'la oladi");
} else {
  console.log("Bu tomonlar uchburchak hosil qilmaydi");
}

// 5-masala

let oy = 6;
if (oy === 1 || oy === 3 || oy === 5 || oy === 7 || oy === 8 || oy === 10|| oy === 12) {
  console.log("31 kunlik oylar");
} else if (oy === 4 || oy === 6 || oy === 9 || oy === 11) {
    console.log("30 kunlik oylar");
} else if (oy === 2) {
    console.log("28 kunlik oy");
}

// 6-maasala

// let yosh = 14;
// let otaBilanMI = true;
// let chiptaBor = false;
// if ()

// 7-masala

let son = -7;
if (son > 0) {
    console.log("Musbat son");
} else if (son < 0) {
    console.log("Manfiy son");
} else if (son % 2 === 0) {
    console.log("Musbat juft");
} else {
    console.log("Musbat toq");
}

// 8-masala

// let balans = 500000;
// let chiqarmoqchi = 300000;
// let kunlikLimit = 200000;
// if (chiqa)

// 9-masala

let temp = 35;
let namlik = 80;
if (temp > 30 && namlik > 70) {
    console.log("Og'ir iqlim");
} else if (temp >30 && namlik <= 70) {
    console.log("Issiq lekin quruq");
} else if (temp <= 30 && namlik > 70) {
    console.log("Salqin lekin nam");
} else {
    console.log("Qulay iqlim");
}