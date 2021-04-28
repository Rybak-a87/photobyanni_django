const { resolve } = require('path')

module.exports = {
    base: '/photo-portfolio/',
    build: {
      // base: '/photo-portfolio/',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
            nested1: resolve(__dirname, './html/about.html'),
            nested2: resolve(__dirname, './html/services.html'),
        nested3: resolve(__dirname, './html/contacts.html'),
      }
    }
  }
}