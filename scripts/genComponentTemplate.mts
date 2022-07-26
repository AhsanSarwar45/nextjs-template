// component.tsx
export const component = (name: string) => `
import React from 'react';
    
import { ${name}Props } from './types';
    
export const ${name} = ({}: ${name}Props) => {
  return (<></>);
};
`;

// types.ts
export const type = (name: string) => `
export interface ${name}Props {
  
}
`;

// index.ts
export const barrel = (name: string, camelCaseName: string) => `
export { ${name} } from './${camelCaseName}';
export type { ${name}Props } from './types';
`;
