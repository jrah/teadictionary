module.exports = {
  content: [
    [
      'teas',
      {
        page: 'tea/_page',
        permalink: ':slug',
        isPost: false,
        generate: [
          'get',
          'getAll'
        ],
      }
    ]
  ],
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'https://competent-poitras-41420e.netlify.com'
  }
}
