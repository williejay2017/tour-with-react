const steps = [
    {
        id: 'Tour Test',
        options: {
            title: 'Test',
            text:  'This is a test of tour guide',
            attachTo: '.test bottom',
            buttons: [
                {
                  type: 'back',
                  text: 'Back'
                }, {
                  type: 'next',
                  text: 'Next'
                }
              ]
        }
    }
]

export default steps;