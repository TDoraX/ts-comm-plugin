import { RequestOptions } from './types'
import xhr from './xhr'

function AsyncRequest(config: RequestOptions): void {
  xhr(config)
}

export default AsyncRequest
