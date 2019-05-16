function localStorageAvailable() {
	var lsTest = 'lsTest';
	try {
		localStorage.setItem(lsTest, lsTest);
		localStorage.removeItem(lsTest);
		return true;
	}
	catch(e) {
		return false;
	}
}

var clayVersions = [
	'Select Version',
	'2.14.2',
	'2.14.0',
	'2.13.0',
	'2.12.1',
	'2.11.1',
	'2.10.0',
	'2.9.0',
	'2.8.3',
	'2.7.0',
	'2.6.0',
	'2.5.1',
	'2.3.4',
	'2.1.12',
	'2.0.3',
];

document.addEventListener('DOMContentLoaded', function(event) {
	var clayVersionList = document.getElementById('clayVersionList');

	for (var i = 0; i < clayVersions.length; i++) {
		var optionEl = document.createElement('option');
		var optionElText = document.createTextNode(clayVersions[i]);
		var additionalText = '';

		optionEl.setAttribute('data-version', clayVersions[i]);

		if (clayVersions[i] === '2.1.12') {
			additionalText =  ' (7.1.0 GA1)';
		}
		else if (clayVersions[i] === '2.3.4') {
			additionalText =  ' (7.1.1 GA2)';
		}
		else if (clayVersions[i] === '2.4.1') {
			additionalText =  ' (7.1.2 GA3)';
		}
		else if (clayVersions[i] === '2.9.0') {
			additionalText = ' (7.1.3 GA4)';
		}
		else if (clayVersions[i] === '2.14.0') {
			additionalText = ' (7.2.0 B3)';
		}

		optionElText.nodeValue = clayVersions[i] + additionalText;

		optionEl.appendChild(optionElText);
		clayVersionList.appendChild(optionEl);
	}

	clayVersionList.addEventListener('change', function(event) {
		var version = this.options[this.options.selectedIndex].getAttribute('data-version');

		if (localStorageAvailable()) {
			localStorage.setItem('nate.lexiconHref', window.location.origin + '/lexicon/v' + version + '/css/site/site-atlas-font-awesome.css');
		}

		window.location.href = './v' + version;
	});
});