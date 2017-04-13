import { graphql, print } from 'graphql';
import { schema } from './schema';

export const networkInterface = {
  query({ query, variables, operationName }) {
    // if (query.definitions[0].name.value === 'Error') {
    //   return {errors: [{message: '401'}]};
    // }
    return delay(500).then(() => {
      return graphql(
        schema,
        print(query),
        null,
        null,
        variables,
        operationName,
      );
    });
  },
};

function delay (ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
