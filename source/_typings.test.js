import { execCommand } from '../files/execCommand'

jest.setTimeout(3 * 60 * 1000)

test('typings are correct', async () => {
  expect(await execCommand(`yarn consume-typings`)).toBeTrue()  
})
