import { connect } from 'https://denopkg.com/keroxp/deno-redis/redis.ts'

export const redis = connect({
  hostname: '127.0.0.1',
  port: 6379
})
