import { urlUtils } from '../dist'

const url = 'https://www.baidu.com?q=1&topic=api'
const subUrl = 'q=URLUtils.searchParams&topic=api'


test('urlSearchParam test', () => {
  const topic = urlUtils.urlSearchParam(subUrl, "topic")
  expect(topic).not.toBeNull();
  expect(topic).toEqual("api")

  const q = urlUtils.urlSearchParam(url, "q")
  expect(q).toEqual("1")
})

test('parseUrlParams test', () => {
  const paramsString1 = "q=1&topic=api"
  const params1 = urlUtils.parseUrlParams(paramsString1)
  expect(params1).toEqual({q: '1', topic: "api"})

  const paramsString2 = "https://www.baidu.com?q=1&topic=api"
  const params2 = urlUtils.parseUrlParams(paramsString2)
  expect(params2).toEqual({ q: '1', topic: "api" })
})
