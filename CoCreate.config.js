export default {
	organization_id: "",
	key: "",
	host: "",
	sources: [
		{
			array: "files",
			object: {
				name: "index.html",
				path: "/docs/workflow",
				pathname: "/docs/workflow/index.html",
				src: "{{./docs/index.html}}",
				host: ["CoCreateJS.com", "general.CoCreateJS.com"],
				directory: "workflow",
				"content-type": "{{content-type}}",
				public: "true"
			}
		}
	]
};
