require("colors");
const fs = require("fs");
const templates = require("./templates");

const componentFolder = process.argv[2];
const componentName = process.argv[3];

if (!["page", "component", "ui"].includes(componentFolder)) {
	console.error("Please choose one folder name: ui, page or component".red);
	process.exit(1);
}

if (!componentName || !/^[A-Z][A-Za-z]*$/.test(componentName)) {
	console.error("Please supply a valid component name".red);
	console.error("The component name need to be in".red, "PascalCase".yellow);
	process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);
console.log("Creating Component Templates with folder: " + componentFolder);

const componentDirectory = `./src/${componentFolder}/${componentName}`;

if (fs.existsSync(componentDirectory)) {
	console.error(`Component ${componentName} already exists.`.red);
	process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

console.log("generatedTemplates: ", generatedTemplates);

generatedTemplates.forEach((template) => {
	console.log("template: ", template);
	fs.writeFileSync(
		`${componentDirectory}/${componentName}${template.extension}`,
		template.content
	);
});

console.log(
	"Successfully created component under: " + componentDirectory.green
);
