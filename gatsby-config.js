module.exports = {
    plugins: [
        {
      resolve: 'gatsby-source-buzzsprout',
      options: {
        // You will need to generate an access token and get the podcast ID from your account
        // https://github.com/Buzzsprout/buzzsprout-api#authentication
        token: '6e72fd1f22bbb78e9ca9875fa08970e4',
        podcastId: '1544806',
        
      },
    },
    ]
}