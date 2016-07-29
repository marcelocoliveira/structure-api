describe('Unit', function() {

  describe('Lib', function() {
    describe('Database', function() {
      require('./lib/database/driver')
    })
  })

  describe('Models', function() {
    require('./models/root')
    require('./models/auth')
    require('./models/document')
    require('./models/organization')
    require('./models/taxonomy')
    require('./models/template')
    require('./models/user')
  })

  describe('Services', function() {
    require('./services/password')
  })

  describe('Controllers', function() {
    require('./controllers/taxonomies')
    require('./controllers/templates')
    require('./controllers/users')
  })
})
