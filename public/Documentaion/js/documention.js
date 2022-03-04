window.onload = () => {

    declareEvents();
}

const requests = [{
        body: `without body request`,
        request: '',
        data: `
[
{
"_id": "621cdaab1d4d8d0e23199fc0",
"company": "Mercedes-Benz",
"model": "G-class",
"year": 2018,
"category": "SUV",
"price": 850000,
"color": "Black",
"info": "2018 Mercedes-Benz G-class is a suv car and was released in 2018 by the make Mercedes-Benz. 2018 Mercedes-Benz G-class has 5 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/mercedes/mercedes-benz-g-class_4266_8.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cc6772565d72393dabc36",
"__v": 0
},
{
"_id": "621cdccb1d4d8d0e23199fc2",
"company": "BMW",
"model": "i8 Spider",
"year": 2018,
"category": "SUPERCAR",
"price": 700000,
"color": "Orange-Black",
"info": "2018 BMW I8 Roadster is a coupe car and was released in 2018 by the make BMW. 2018 BMW I8 Roadster has 2 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/bmw/bmw-i8-roadster_4154_1.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cc6772565d72393dabc36",
"__v": 0
},
{
"_id": "621cddd11d4d8d0e23199fc4",
"company": "Mazda 3",
"model": "SkyActiv",
"year": 2019,
"category": "SEDAN",
"price": 89000,
"color": "Orange-Black",
"info": "Mazda 3 SkyActiv-G 2.0 122 is a 2019 Hatchback model with 6 speed manual transmission. With a power of 90 KW you can reach 0-100km h in just 10,4 seconds and a maximum speed of 197 km/h with an urban consumption of 6,4 l/100km. The engine has a capacity of 1998 cc with 4, in line cylinders and 4 valves per cylinders. Also this model has a weight of with coil springs front suspension and a coil springs rear suspension.",
"img_url": "https://www.cars-data.com/webp/mazda/mazda-3_4249_5.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cc6772565d72393dabc36",
"__v": 0
},
{
"_id": "621cdf231d4d8d0e23199fc6",
"company": "Rolls-Royce",
"model": "Dawn",
"year": 2016,
"category": "CABRIOLET",
"price": 3000000,
"color": "SkyBlue",
"info": "2016 Rolls-Royce Dawn is a convertible car and was released in 2016 by the make Rolls-Royce. 2016 Rolls-Royce Dawn has 2 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/rolls-royce/rolls-royce-dawn_3646_13.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cc6772565d72393dabc36",
"__v": 0
},
{
"_id": "621ce1a61d4d8d0e23199fc9",
"company": "Subaru",
"model": "Impreza 2.0R AWD",
"year": 2005,
"category": "SEDAN",
"price": 10000,
"color": "Gray",
"info": "Subaru Impreza 2.0R AWD is a 2005 Sedan model with 5 speed manual transmission. With a power of 118 KW you can reach 0-100km h in just 8,8 seconds and a maximum speed of 210 km/h with an urban consumption of 12,5 l/100km. The engine has a capacity of 1994 cc with 4, boxer cylinders and 4 valves per cylinders. Also this model has a weight of with coil springs front suspension and a coil springs rear suspension.",
"img_url": "https://www.cars-data.com/webp/subaru/subaru-impreza_2445_2.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cd8731d4d8d0e23199fbd",
"__v": 0
},
{
"_id": "621ce2651d4d8d0e23199fcb",
"company": "Bugatti",
"model": "Veyron",
"year": 2005,
"category": "SUPERCAR",
"price": 1000000,
"color": "White",
"info": "2005 Bugatti Veyron is a coupe car and was released in 2005 by the make Bugatti. 2005 Bugatti Veyron has 2 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/bugatti/bugatti-veyron_325_10.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cd8731d4d8d0e23199fbd",
"__v": 0
},
{
"_id": "621ce2e61d4d8d0e23199fcd",
"company": "Lamborghini",
"model": "Aventador",
"year": 2017,
"category": "SUPERCAR",
"price": 900000,
"color": "Blue",
"info": "2017 Lamborghini Aventador Roadster is a convertible car and was released in 2017 by the make Lamborghini. 2017 Lamborghini Aventador Roadster has 2 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/lamborghini/lamborghini-aventador-roadster_4230_1.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cd8731d4d8d0e23199fbd",
"__v": 0
},
{
"_id": "621ce3601d4d8d0e23199fcf",
"company": "Audi",
"model": "TT",
"year": 2019,
"category": "CABRIOLET",
"price": 280000,
"color": "Yellow",
"info": "Audi TT Roadster 45 TFSI is a 2019 Convertible model with 6 speed manual transmission. With a power of 180 KW you can reach 0-100km h in just 6,1 seconds and a maximum speed of 250 km/h with an urban consumption of 8,6 l/100km. The engine has a capacity of 1984 cc with 4, in line cylinders and 4 valves per cylinders. Also this model has a weight of with coil springs front suspension and a coil springs rear suspension.",
"img_url": "https://www.cars-data.com/webp/audi/audi-tt-roadster_4139_1.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cd8731d4d8d0e23199fbd",
"__v": 0
},
{
"_id": "621ce4251d4d8d0e23199fd3",
"company": "BMW",
"model": "X7",
"year": 2019,
"category": "SUV",
"price": 700000,
"color": "Black",
"info": "BMW X7 XDrive40i is a 2019 SUV model with 8 speed automatic. With a power of 250 KW you can reach 0-100km h in just 6,1 seconds and a maximum speed of 245 km/h with an urban consumption of 10,5 l/100km. The engine has a capacity of 2998 cc with 6, in line cylinders and 4 valves per cylinders. Also this model has a weight of with air suspension front suspension and a air suspension rear suspension.",
"img_url": "https://www.cars-data.com/webp/bmw/bmw-x7_4160_1.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cd8161d4d8d0e23199fbb",
"__v": 0
},
{
"_id": "621ce4941d4d8d0e23199fd5",
"company": "Jeep",
"model": "Wrangler",
"year": 2019,
"category": "SUV",
"price": 250000,
"color": "Red Black",
"info": "Jeep Wrangler Unlimited 2.0T Sahara is a 2019 SUV model with 8 speed automatic. With a power of 200 KW you can reach 0-100km h in just - seconds and a maximum speed of 180 km/h with an urban consumption of 11,0 l/100km. The engine has a capacity of 1995 cc with 4, in line cylinders and 4 valves per cylinders. Also this model has a weight of with coil springs front suspension and a coil springs rear suspension.",
"img_url": "https://www.cars-data.com/webp/jeep/jeep-wrangler-unlimited_4215_1.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cd8161d4d8d0e23199fbb",
"__v": 0
}
]
    `,
        response: 200
    },
    {
        body: 'without body request',
        request: '/prices?min=10000&max=100000',
        data: `
[
    {
    "_id": "621cddd11d4d8d0e23199fc4",
    "company": "Mazda 3",
    "model": "SkyActiv",
    "year": 2019,
    "category": "SEDAN",
    "price": 89000,
    "color": "Orange-Black",
    "info": "Mazda 3 SkyActiv-G 2.0 122 is a 2019 Hatchback model with 6 speed manual transmission. With a power of 90 KW you can reach 0-100km h in just 10,4 seconds and a maximum speed of 197 km/h with an urban consumption of 6,4 l/100km. The engine has a capacity of 1998 cc with 4, in line cylinders and 4 valves per cylinders. Also this model has a weight of with coil springs front suspension and a coil springs rear suspension.",
    "img_url": "https://www.cars-data.com/webp/mazda/mazda-3_4249_5.webp",
    "date_created": "2022-02-28T14:08:50.758Z",
    "user_id": "621cc6772565d72393dabc36",
    "__v": 0
    },
    {
    "_id": "621ce1a61d4d8d0e23199fc9",
    "company": "Subaru",
    "model": "Impreza 2.0R AWD",
    "year": 2005,
    "category": "SEDAN",
    "price": 10000,
    "color": "Gray",
    "info": "Subaru Impreza 2.0R AWD is a 2005 Sedan model with 5 speed manual transmission. With a power of 118 KW you can reach 0-100km h in just 8,8 seconds and a maximum speed of 210 km/h with an urban consumption of 12,5 l/100km. The engine has a capacity of 1994 cc with 4, boxer cylinders and 4 valves per cylinders. Also this model has a weight of with coil springs front suspension and a coil springs rear suspension.",
    "img_url": "https://www.cars-data.com/webp/subaru/subaru-impreza_2445_2.webp",
    "date_created": "2022-02-28T14:08:50.758Z",
    "user_id": "621cd8731d4d8d0e23199fbd",
    "__v": 0
    }
    ]    `,
        response: 200

    },
    {
        body: 'without body request',
        request: '?page=2&perPage=3',
        data: `
[
    {
    "_id": "621cdf231d4d8d0e23199fc6",
    "company": "Rolls-Royce",
    "model": "Dawn",
    "year": 2016,
    "category": "CABRIOLET",
    "price": 3000000,
    "color": "SkyBlue",
    "info": "2016 Rolls-Royce Dawn is a convertible car and was released in 2016 by the make Rolls-Royce. 2016 Rolls-Royce Dawn has 2 doors, pertrol or diesel engines. Review all the trims available.",
    "img_url": "https://www.cars-data.com/webp/rolls-royce/rolls-royce-dawn_3646_13.webp",
    "date_created": "2022-02-28T14:08:50.758Z",
    "user_id": "621cc6772565d72393dabc36",
    "__v": 0
    },
    {
    "_id": "621ce1a61d4d8d0e23199fc9",
    "company": "Subaru",
    "model": "Impreza 2.0R AWD",
    "year": 2005,
    "category": "SEDAN",
    "price": 10000,
    "color": "Gray",
    "info": "Subaru Impreza 2.0R AWD is a 2005 Sedan model with 5 speed manual transmission. With a power of 118 KW you can reach 0-100km h in just 8,8 seconds and a maximum speed of 210 km/h with an urban consumption of 12,5 l/100km. The engine has a capacity of 1994 cc with 4, boxer cylinders and 4 valves per cylinders. Also this model has a weight of with coil springs front suspension and a coil springs rear suspension.",
    "img_url": "https://www.cars-data.com/webp/subaru/subaru-impreza_2445_2.webp",
    "date_created": "2022-02-28T14:08:50.758Z",
    "user_id": "621cd8731d4d8d0e23199fbd",
    "__v": 0
    },
    {
    "_id": "621ce2651d4d8d0e23199fcb",
    "company": "Bugatti",
    "model": "Veyron",
    "year": 2005,
    "category": "SUPERCAR",
    "price": 1000000,
    "color": "White",
    "info": "2005 Bugatti Veyron is a coupe car and was released in 2005 by the make Bugatti. 2005 Bugatti Veyron has 2 doors, pertrol or diesel engines. Review all the trims available.",
    "img_url": "https://www.cars-data.com/webp/bugatti/bugatti-veyron_325_10.webp",
    "date_created": "2022-02-28T14:08:50.758Z",
    "user_id": "621cd8731d4d8d0e23199fbd",
    "__v": 0
    }
    ]   `,
        response: 200


    },
    {
        body: 'without body request',
        request: '/search?s=doors',
        data: `
[
{
"_id": "621cdaab1d4d8d0e23199fc0",
"company": "Mercedes-Benz",
"model": "G-class",
"year": 2018,
"category": "SUV",
"price": 850000,
"color": "Black",
"info": "2018 Mercedes-Benz G-class is a suv car and was released in 2018 by the make Mercedes-Benz. 2018 Mercedes-Benz G-class has 5 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/mercedes/mercedes-benz-g-class_4266_8.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cc6772565d72393dabc36",
"__v": 0
},
{
"_id": "621cdccb1d4d8d0e23199fc2",
"company": "BMW",
"model": "i8 Spider",
"year": 2018,
"category": "SUPERCAR",
"price": 700000,
"color": "Orange-Black",
"info": "2018 BMW I8 Roadster is a coupe car and was released in 2018 by the make BMW. 2018 BMW I8 Roadster has 2 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/bmw/bmw-i8-roadster_4154_1.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cc6772565d72393dabc36",
"__v": 0
},
{
"_id": "621cdf231d4d8d0e23199fc6",
"company": "Rolls-Royce",
"model": "Dawn",
"year": 2016,
"category": "CABRIOLET",
"price": 3000000,
"color": "SkyBlue",
"info": "2016 Rolls-Royce Dawn is a convertible car and was released in 2016 by the make Rolls-Royce. 2016 Rolls-Royce Dawn has 2 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/rolls-royce/rolls-royce-dawn_3646_13.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cc6772565d72393dabc36",
"__v": 0
},
{
"_id": "621ce2651d4d8d0e23199fcb",
"company": "Bugatti",
"model": "Veyron",
"year": 2005,
"category": "SUPERCAR",
"price": 1000000,
"color": "White",
"info": "2005 Bugatti Veyron is a coupe car and was released in 2005 by the make Bugatti. 2005 Bugatti Veyron has 2 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/bugatti/bugatti-veyron_325_10.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cd8731d4d8d0e23199fbd",
"__v": 0
},
{
"_id": "621ce2e61d4d8d0e23199fcd",
"company": "Lamborghini",
"model": "Aventador",
"year": 2017,
"category": "SUPERCAR",
"price": 900000,
"color": "Blue",
"info": "2017 Lamborghini Aventador Roadster is a convertible car and was released in 2017 by the make Lamborghini. 2017 Lamborghini Aventador Roadster has 2 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/lamborghini/lamborghini-aventador-roadster_4230_1.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cd8731d4d8d0e23199fbd",
"__v": 0
},
{
"_id": "621ce53e1d4d8d0e23199fd7",
"company": "Lexus",
"model": "SC",
"year": 2001,
"category": "CABRIOLET",
"price": 250000,
"color": "Gray",
"info": "2001 Lexus SC is a convertible car and was released in 2001 by the make Lexus. 2001 Lexus SC has 2 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/lexus/lexus-sc_1297_8.webp",
"date_created": "2022-02-28T14:08:50.758Z",
"user_id": "621cd8161d4d8d0e23199fbb",
"__v": 0
}
]`,
        response: 200

    },
    {
        body: 'without body request',
        request: '/cat/supercars',
        data: `
[
    {
    "_id": "621cdccb1d4d8d0e23199fc2",
    "company": "BMW",
    "model": "i8 Spider",
    "year": 2018,
    "category": "SUPERCAR",
    "price": 700000,
    "color": "Orange-Black",
    "info": "2018 BMW I8 Roadster is a coupe car and was released in 2018 by the make BMW. 2018 BMW I8 Roadster has 2 doors, pertrol or diesel engines. Review all the trims available.",
    "img_url": "https://www.cars-data.com/webp/bmw/bmw-i8-roadster_4154_1.webp",
    "date_created": "2022-02-28T14:08:50.758Z",
    "user_id": "621cc6772565d72393dabc36",
    "__v": 0
    },
    {
    "_id": "621ce2651d4d8d0e23199fcb",
    "company": "Bugatti",
    "model": "Veyron",
    "year": 2005,
    "category": "SUPERCAR",
    "price": 1000000,
    "color": "White",
    "info": "2005 Bugatti Veyron is a coupe car and was released in 2005 by the make Bugatti. 2005 Bugatti Veyron has 2 doors, pertrol or diesel engines. Review all the trims available.",
    "img_url": "https://www.cars-data.com/webp/bugatti/bugatti-veyron_325_10.webp",
    "date_created": "2022-02-28T14:08:50.758Z",
    "user_id": "621cd8731d4d8d0e23199fbd",
    "__v": 0
    },
    {
    "_id": "621ce2e61d4d8d0e23199fcd",
    "company": "Lamborghini",
    "model": "Aventador",
    "year": 2017,
    "category": "SUPERCAR",
    "price": 900000,
    "color": "Blue",
    "info": "2017 Lamborghini Aventador Roadster is a convertible car and was released in 2017 by the make Lamborghini. 2017 Lamborghini Aventador Roadster has 2 doors, pertrol or diesel engines. Review all the trims available.",
    "img_url": "https://www.cars-data.com/webp/lamborghini/lamborghini-aventador-roadster_4230_1.webp",
    "date_created": "2022-02-28T14:08:50.758Z",
    "user_id": "621cd8731d4d8d0e23199fbd",
    "__v": 0
    },
    {
    "_id": "621ce79b1d4d8d0e23199fdf",
    "company": "Porsche",
    "model": "911",
    "year": 2019,
    "category": "SUPERCAR",
    "price": 1000000,
    "color": "Gray",
    "info": "Porsche 911 Carrera 4S Coupe is a 2019 Coupe model with 8 speed automatic with double clutch. With a power of 331 KW you can reach 0-100km h in just 3,8 seconds and a maximum speed of 306 km/h with an urban consumption of 13,1 l/100km. The engine has a capacity of 2981 cc with 6, boxer cylinders and 4 valves per cylinders. Also this model has a weight of with coil springs front suspension and a coil springs rear suspension.",
    "img_url": "https://www.cars-data.com/webp/porsche/porsche-911-coupe_4302_38.webp",
    "date_created": "2022-02-28T14:08:50.758Z",
    "user_id": "621cd8161d4d8d0e23199fbb",
    "__v": 0
    }
    ]`,
        response: 200

    },
    {
        body: `
{
"company": "Bugatti",
"model": "Veyron",
"year": 2005,
"category": "SUPERCAR",
"price": 1000000,
"color": "White",
"info": "2005 Bugatti Veyron is a coupe car and was released in 2005 by the make Bugatti. 2005 Bugatti Veyron has 2 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/bugatti/bugatti-veyron_325_10.webp"
}`,
        request: '/cars',
        data: `
{
"company": "Bugatti",
"model": "Veyron",
"year": 2005,
"category": "SUPERCAR",
"price": 1000000,
"color": "White",
"info": "2005 Bugatti Veyron is a coupe car and was released in 2005 by the make Bugatti. 2005 Bugatti Veyron has 2 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/bugatti/bugatti-veyron_325_10.webp",
"date_created": "2022-03-04T14:50:25.396Z",
"_id": "622238126e942fecdede64da",
"user_id": "621cc6772565d72393dabc36",
"__v": 0
}
`,
        response: 201

    },
    {
        body: `
{
"company": "Mercedes-Benz",
"model": "G-class",
"year": 2018,
"category": "SUV",
"price": 850000,
"color": "Black",
"info": "2018 Mercedes-Benz G-class is a suv car and was released in 2018 by the make Mercedes-Benz. 2018 Mercedes-Benz G-class has 5 doors, pertrol or diesel engines. Review all the trims available.",
"img_url": "https://www.cars-data.com/webp/mercedes/mercedes-benz-g-class_4266_8.webp"
}`,
        request: '/cars/:idCar',
        data: `
{
"acknowledged": true,
"modifiedCount": 1,
"upsertedId": null,
"upsertedCount": 0,
"matchedCount": 1
}`,
        response: 200

    },
    {
        body: 'without body request',
        request: '/cars/:idCar',
        data: `
{
"deletedCount": 1
}`,
        response: 200
    }


]

const declareEvents = () => {
    let i = 1;
    requests.forEach((item) => {
        document.querySelector(`#id_get${i++}`).addEventListener('click', () => {
            document.querySelector('#id_req').innerHTML = item.request
            document.querySelector('#id_res').innerHTML = item.response
            document.querySelector('#id_example').innerHTML = item.body
            document.querySelector('#id_output').innerHTML = item.data
        })

    });
}