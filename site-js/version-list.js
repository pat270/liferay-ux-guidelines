var clayVersions = [
	'Select Version',
	'2.10.0',
	'2.9.0',
	'2.8.3',
	'2.7.0',
	'2.6.0',
	'2.5.1',
	'2.3.4',
	'2.1.12',
	'2.0.3',
	'2.0.0-rc.11',
	'2.0.0-rc.10',
	'2.0.0-rc.4',
	'2.0.0-rc.3',
	'2.0.0-rc.2',
	'2.0.0-rc.1',
	'2.0.0-rc.0',
	'2.0.0-beta.8',
	'2.0.0-beta.6',
	'2.0.0-beta.5',
	'2.0.0-beta.4',
	'2.0.0-beta.3',
	'2.0.0-beta.2',
	'2.0.0-beta.1',
	'2.0.0-alpha.11',
	'2.0.0-alpha.10',
	'2.0.0-alpha.9',
	'2.0.0-alpha.8',
	'2.0.0-alpha.7',
	'2.0.0-alpha.6',
	'2.0.0-alpha.5',
	'2.0.0-alpha.4',
];

document.addEventListener('DOMContentLoaded', function(event) {
	var clayVersionList = document.getElementById('clayVersionList');

	for (var i = 0; i < clayVersions.length; i++) {
		var optionEl = document.createElement('option');
		var optionElText = document.createTextNode(clayVersions[i]);

		optionEl.appendChild(optionElText);
		clayVersionList.appendChild(optionEl);
	}

	clayVersionList.addEventListener('change', function(event) {
		var selectedText = this.options[this.options.selectedIndex].text;

		window.location.href = './v' + selectedText;
	});
});