module.exports = (componentName) => ({
  content: `// Component generated with util/create-component.js
import styled from "styled-components";

/**
 * Components
 */
export const ${componentName}Wrapper = styled.div${"``"};
`,
  extension: `.styled.tsx`,
});
