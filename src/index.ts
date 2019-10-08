import { RequestOptions } from './types'
import { buildURL } from './helpers/url'
import xhr from './xhr'

function AsyncRequest(config: RequestOptions): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: RequestOptions): void {
  config.url = transformUrl(config)
}

function transformUrl(config: RequestOptions): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default AsyncRequest
