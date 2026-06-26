
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>

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