(() => {
	const ELEM = '.hackAnimation',
	speed = 10,
	allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ,.;:-_?!',
	getDOM = (v) => document.querySelectorAll(v),
	decryptChar = (elm, chars, textArr) => {
		if (textArr[decryptIndex] === elm.innerHTML) {
			elm.outerHTML = textArr[decryptIndex];
			decryptIndex++;
			return;
		}
		elm.innerHTML = chars[charIndex % chars.length];
		charIndex++;
	};
	let charIndex=0, decryptIndex=0;
	if (getDOM(ELEM).length === 0) return;
	let text = getDOM(ELEM)[0].innerHTML,
	textArr = text.split(''),
	arr = "",
	j = 0,
	chars = allChars.split('');
	textArr.forEach(() => {
		arr += '<span>0</span>';
	});
	getDOM(ELEM)[0].innerHTML = arr;

	let intId = setInterval( ()=>{
		let firstChar = getDOM(ELEM+'>span');
		if (firstChar.length === 0){
			clearInterval(intId);
			return;
		}
		decryptChar(firstChar[0], chars, textArr);
	}, speed);
})();