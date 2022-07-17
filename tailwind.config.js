module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      colors:
      {
        'light-cyan':'hsl(193, 38%, 86%)',
        'neon-green':'hsl(150, 100%, 66%)',
        'grayish-blue':'hsl(217, 19%, 38%)',
        'dark-grayish-blue':'hsl(217, 19%, 24%)',
        'dark-blue':'hsl(218, 23%, 16%)'
      },
      boxShadow:
          {
            'green-button':'0 0 20px 4px rgb(81 255 167)'
          }
    },
  },
  plugins: [],
}
