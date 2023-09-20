window.onload = function() {
	checkTheme();
}

// Checar se há preferência de tema definido no localStorage e atualizar a página de acordo
function checkTheme() {
	const inLocalStorage = localStorage.getItem('activeTheme') || 'dark-theme';
	updateTheme(inLocalStorage);
}

function updateTheme(themeStored) {
	if (themeStored == 'light-theme') {
		$html.classList.replace('dark-theme', 'light-theme');
		$changeTheme_icon.classList.replace('fa-sun', 'fa-moon');
	} else {
		$html.classList.replace('light-theme', 'dark-theme');
		$changeTheme_icon.classList.replace('fa-moon', 'fa-sun');
	}
}

function saveThemeToLocalStorage(mode) {
	localStorage.setItem('activeTheme', mode);
}

// Seleciona o botão, o ícone que aparece e o html
const $btnTheme = document.querySelector('#changeTheme-btn');
const $changeTheme_icon = document.querySelector('.changeTheme_icon');
const $html = document.querySelector('html');

// Adicionar um "escutador de eventos" de click no botão
$btnTheme.addEventListener('click', changeTheme)

// Mudar o tema e mudar o ícone (alterando as suas classes) e add ao localStorage
 function changeTheme() {
	$html.classList.toggle('light-theme');
	$html.classList.toggle('dark-theme');

	$changeTheme_icon.classList.toggle('fa-sun');
	$changeTheme_icon.classList.toggle('fa-moon');

	saveThemeToLocalStorage($html.classList.value);
}


// Mudar o ícone do elementos details na página sobre;
// Quando aberto: "-"; quando fechado: "+"
const $details = document.getElementsByTagName('details');
const $details_icon = document.querySelectorAll('.section_summary .details_icon');

for (let i = 0; i < $details.length; i++) {
	$details[i].addEventListener('click', function changeDetailsIcon() {
		setTimeout(() => {
			if ($details[i].open) {
				$details_icon[i].classList.replace('fa-plus', 'fa-minus')
			} else {
				$details_icon[i].classList.replace('fa-minus', 'fa-plus')
			}
		}, 80);
	})
}