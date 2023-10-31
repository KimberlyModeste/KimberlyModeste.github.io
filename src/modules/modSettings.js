let date = new Date()
let LinkSettings = {
	backgroundColor : "#e5e5fd",
	particleColor: "#59065f",
	particlesOn: true,
	themes: 0,
	isHoliday: false
};

if(date.getMonth() === 9 && date.getDate() === 31)
{
	LinkSettings.backgroundColor = "#E8863D"
	LinkSettings.particleColor= "#34271F"
	LinkSettings.themes = 5
	LinkSettings.isHoliday = true
}



module.exports = {LinkSettings};