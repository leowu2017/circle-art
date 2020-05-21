const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, 400, 400);

addEventListener("mousedown", function(e) {
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