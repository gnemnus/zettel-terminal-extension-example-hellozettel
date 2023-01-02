// This example hellozettel app will display a welcome message every time a user turns on the app.
import {
	ExtensionScope,
	WindowWithExtensionFunction,
} from "@zettelproject/terminal-extension-api";
void((window as WindowWithExtensionFunction).extensionFunction = function(api) {
	// TODO 
	this.while("activated", function({
		activatedApi
	}) {
		this.while("pagePanelRendered", function({
			pagePanelRenderedApi
		}) {
			if (!this.scopes.includes(ExtensionScope.Page)) return;
			this.register(pagePanelRenderedApi.registry.quickAction({
				title: "Demo!",
				onClick() {
					activatedApi.access.showMessage("Hello Zettel!", "This is my first app", {
						variant: "success"
					});
				},
			}));
		});
	});
});
