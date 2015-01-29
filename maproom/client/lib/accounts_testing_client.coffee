(->
  Meteor.loginAnonymously = (fn) ->
    Meteor.call "login",
      anonymous: true
    , (err, result) ->
      throw err  if err
      Accounts._makeClientLoggedIn result.id, result.token
      fn and fn()

)()