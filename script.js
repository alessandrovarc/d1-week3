class User {
    constructor (_firstName,_lastName,_age,_location) {
        this.firstName=_firstName,
        this.lastName=_lastName,
        this.age=_age,
        this.location=_location
        
    }
}

const x = new User ('pippo', 'disney', 5, 'america')
const y = new User ('pluto', 'disney', 3, 'america')

if( x.age > y.age || x.age < y.age) {
    console.log('x è più vecchio di y')
}