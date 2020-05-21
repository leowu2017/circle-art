const canvas = document.querySelector('canvas');
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

window.addEventListener('resize', () => {
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
});

window.addEventListener("mousedown", function(e) {
	const rect = canvas.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;
				
	const circleNo = 3 + Math.floor(Math.random() * 33);
	const minRadius = 5 + Math.floor(Math.random() * 16);
	const maxRadius = 30 + Math.floor(Math.random() * 101);
	for (let idx = 0; idx < circleNo; idx++) {
		const radius = minRadius + Math.floor(Math.random() * (maxRadius - minRadius + 1));
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI);
		const color = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
		ctx.strokeStyle = color;
		ctx.stroke();
	}
});