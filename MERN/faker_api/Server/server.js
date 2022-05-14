const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api", (req, res) => {
    res.json({message: "Hello"});
});

class User {
    constructor(){
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneFormats();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        this._id = faker.random.numeric();
    }
}

class Company {
    constructor(){
        this._id = faker.random.numeric();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        };
    }
}

const users = [];
const companies = [];

app.post("/api/users/new", (req, res) => {
    const newUser = new User();
    users.push(newUser)
    res.json(newUser)
});

app.post("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    companies.push(newCompany)
    res.json(newCompany)
});

app.post("/api/users/companies/", (req, res) => {
    const newUser = new User();
    users.push(newUser)
    const newCompany = new Company();
    companies.push(newCompany)
    res.json({newUser, newCompany})
})

app.listen( port, () => console.log(`Listening on port: ${port}`));