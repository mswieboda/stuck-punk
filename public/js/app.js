$(document).foundation()


$(document).ready(function() {
	console.log(">>> jQuery ready!!!")
	var THEMES = ["tm-lime", "tm-red"]

	var setTheme = function(theme) {
		var themeClass = _.includes(THEMES, theme) ? theme : _.first(THEMES)
		console.log(">>> setTheme ", themeClass)

		_.forEach(THEMES, function(tclass) {
			console.log(">>> setTheme removeClass", themeClass)
			$("#body").removeClass(tclass)
		})

		console.log(">>> setTheme addClass", themeClass)
		
		$("#body").addClass(themeClass)
	}

	var loadInitialTheme = function() {
		console.log(">>> loadInitialTheme")
		setTheme(Cookies.get('theme'))
	}

	loadInitialTheme()

	$("#tm-buttons > button").click(function() {
		var theme = $(this).val()
		console.log(">>> tm-buttons > button click", $(this).text(), theme)
		setTheme(theme)
	})
})

