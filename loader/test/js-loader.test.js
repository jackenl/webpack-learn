import compiler from './compiler.js';

test('Test for js-loader', async () => {
  const stats = await compiler('example.js', { name: 'jackenl' });
  const output = stats.toJson({ source: true }).modules[0].source;

  expect(output).toBe("export default \"console.log('Hello World!');\\n\"");
});
