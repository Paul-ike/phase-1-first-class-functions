const receivesAFunction = greeting => greeting()

receivesAFunction(() => "Hi!")

const returnsANamedFunction = () => receivesAFunction

const returnsAnAnonymousFunction = () => () => 'Bananas!'