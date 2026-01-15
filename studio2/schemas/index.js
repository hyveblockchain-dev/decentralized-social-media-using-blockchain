import post from './postSchema'
import tweet from './tweetSchema'
import user from './userSchema'

export const schemaTypes = [post, tweet, user]

// ✅ Provide default export too (Rollup expects this if you import default)
export default schemaTypes
