let userDetails = {
    userName: "nancy1234",
    name: "Nancy",
    age: 22,
    contact: {
        primaryContact: 9988776655,
        secondaryContact:9900223344
    },
    status: function () {
        return this.name;
    }
}

console.log(userDetails.status());