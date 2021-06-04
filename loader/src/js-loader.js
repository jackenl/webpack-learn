import { getOptions } from 'loader-utils'
import { validate } from 'schema-utils'

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    }
  }
}

export default function (source) {
  const options = getOptions(this);

  validate(schema, options, {
    name: 'jacken',
  });

  return `export default ${JSON.stringify(source)}`;
}
