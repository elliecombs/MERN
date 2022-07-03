const express = require("express");
const faker = require("faker")
const app = express();
const port = 8000;

// we can create a function to return a random / fake "Product"
//CREATEUSER Function "createUser" Object is const newFake
const createUser = () => {
    //Object is newFake
    const newFake = {
        //API accessed from website, name category, function firstName()
        //faker is API website
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.phoneNumber(),
        _id: faker.datatype.uuid()
    };
    return newFake;
};
    
//COMPANY Function
const createCompany = () => {
    //Object is newFake
    const newFake = {
        //API accessed from website, name category, function firstName()
        //faker is API website
        companyName: faker.company.companyName(),
        //Use dictionary for sub bullet points
        companyAddress: {
            street:faker.address.streetName(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        },
        _id: faker.datatype.uuid()
    };
    return newFake;
};

//ROUTES
// req is shorthand for request
// res is shorthand for response
app.get("/api/user/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

//Call both objects or a dictionary(Python)
app.get("/api/user/company", (req, res) => {
    res.json({
        user:createUser(),
        company:createCompany(),
    });
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

