import { CodegenConfig } from '@graphql-codegen/cli'
import { schema } from "./server/gql/schema";
import { printSchema } from "graphql";

const config: CodegenConfig = {
  schema: printSchema(schema),
  documents: ['gql/**/*.graphql'],
  config: {
    useTypeImports: true,
    preResolveTypes: false
  },
  generates: {
    './gql/schema.graphql': {
      plugins: ['schema-ast'],
    },
    './gql/types.ts': {
      plugins: [
        'typescript',
        'typescript-urql-graphcache'
      ]
    },
    './gql/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.ts',
        extension: '.ts'
      },
      plugins: [
        'typescript-operations',
        'typed-document-node'
      ]
    },
    './gql/introspection.ts': {
      plugins: [
        'urql-introspection'
      ]
    }
  }
}

export default config
