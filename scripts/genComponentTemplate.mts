// component.tsx
export const component = (name: string) => `
// External imports
import React from 'react';
    
// Component imports
import { ${name}Props } from './types';

// Project imports


const ${name} = (props: ${name}Props) => {
  return (<></>);
};

${name}.defaultProps = {};

export default ${name};
`;

// types.ts
export const type = (name: string) => `
export interface ${name}Props {
  
}
`;

// index.ts
export const barrel = (name: string, camelCaseName: string) => `
import ${name} from './${camelCaseName}';

export * from './${camelCaseName}';
export * from "./types";

export default ${name};

`;
