/* const colors = ['#087BB8','#2E8E00','#321A81','#FF81A3']; */
const colors = ['#087BB8', '#2E8E00', '#321A81', '#FF81A3'];

export const colorize = (string) => {
	let charArr = string.split('');

	let html = charArr
		.map((char, idx) => {
			return char == ' ' ? ' ' : `<span style="color:${colors[idx % colors.length]}">${char}</span>`;
		})
		.join('');

	return html;
};
