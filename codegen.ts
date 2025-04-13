import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_URL,
  documents: ['./src/graphql/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/__generated__/output.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
