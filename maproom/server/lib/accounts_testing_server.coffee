# handler to login anonymously
Accounts.registerLoginHandler (options) ->
    return `undefined`  unless options.anonymous # don't handle

    # ok; if they are logging in, this means they don't have
    # a user yet. Create one. We don't need to ever find it again.
    user = services: {}
    options = _.clone(options)
    options.generateLoginToken = true
    Accounts.insertUserDoc options, user
