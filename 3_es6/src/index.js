//Mengimpor modul
import greetings from './greetings'

let data = [{name: 'Iwan', city: 'Cirebon'}, {name: 'Akhmad', city: 'Bekasi'}, {name: 'Echie', city: 'Pekanbaru'}];

document.write('<div class="content dashedBox">')
//Penggunaan fat arrow
data.map(item => {
	document.write(greetings(item.name, item.city));
});
document.write('</div>')