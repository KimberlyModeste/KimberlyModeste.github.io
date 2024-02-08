let date = new Date()
let LinkSettings = {
	backgroundColor : "#e5e5fd",
	particleColor: "#59065f",
	particlesOn: true,
	themes: 0,
	isHoliday: false,
};

let tg = new Date(date.getFullYear(), 10, 1)
tg.setDate(tg.getDay() !== 4 ? (tg.getDate()+1 + ((8 - tg.getDate())% 7))+21 : tg.getDate()+21)

if (date.getMonth() === 1 && date.getDate() === 14)
{
	LinkSettings.backgroundColor = "#ffc5e6"
	LinkSettings.particleColor= "#ffffff";
	LinkSettings.themes = 5;
	LinkSettings.isHoliday = true;
}
else if (date.getMonth() === 9 && date.getDate() <= 31)
{
	LinkSettings.backgroundColor = "#E8863D";
	LinkSettings.particleColor= "#34271F";
	LinkSettings.themes = 5;
	LinkSettings.isHoliday = true;
}
else if (date.getMonth() === 10 && date.getDate() <= tg.getDate()){
	LinkSettings.backgroundColor = "#FBE6A7";
	LinkSettings.particleColor= "#AB4428";
	LinkSettings.themes = 5;
	LinkSettings.isHoliday = true;

}
else if (date.getMonth() === 11){
	LinkSettings.backgroundColor = "#3FD485";
	LinkSettings.particleColor= "#D6001C";
	LinkSettings.themes = 5;
	LinkSettings.isHoliday = true;

}

module.exports = {LinkSettings};