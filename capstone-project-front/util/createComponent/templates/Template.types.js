module.exports = (componentName) => ({
	content: `// Component generated with util/vox-create-component.js
export type ${componentName}Props = {};
`,
	extension: `.types.tsx`,
});
