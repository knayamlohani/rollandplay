module.exports = {
	verbose: true,
	roots: [
		"./web/src/__tests__"
	],
	transformIgnorePatterns: ["/node_modules/(?!vue-awesome)"],
	moduleNameMapper: {
		"\\.(css|less|sass|scss)$": "identity-obj-proxy"
	}

}
