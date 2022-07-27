// component.tsx
export const component = (name: string) => `
// External imports
import React from 'react';
    
// Component imports
import { ${name}Props } from './types';

// Project imports


export const ${name} = ({}: ${name}Props) => {
  return (<></>);
};

${name}.defaultProps = {};
`;

// types.ts
export const type = (name: string) => `
export interface ${name}Props {
  
}
`;

// index.ts
export const barrel = (name: string, camelCaseName: string) => `
export default ${name} from './${camelCaseName}';
export * from "./types";
`;
