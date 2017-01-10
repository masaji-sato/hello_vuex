const _comments = [
    {'title': 'iPad 4 Mini', 'message': 'message desu.'},
    {'title': 'Install', 'message': '$ npm install eslint-loader --save-dev'},
    {'title': 'Usage', 'message': 'In your webpack configuration'}
]

export default {
  // コメント取得
  getComments (cb) {
    setTimeout(() => cb(_comments), 500)
  },
  // コメント投稿
  addComment (comment, cb) {
    _comments.unshift(comment)
    setTimeout(() => {
      // いったんかならず成功
      cb(comment)
    }, 500)
  }
}
