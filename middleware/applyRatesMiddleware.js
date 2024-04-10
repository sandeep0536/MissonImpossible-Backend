const price = 349.00;
const axios = require('axios');
const getStatesRates = {
    "US": [
        { isoCode: "AL", name: "Alabama", rate: 0 },
        { isoCode: "AR", name: "Arkansas", rate: 0 },
        { isoCode: "CA", name: "California", rate: 0 },
        { isoCode: "DE", name: "Delaware", rate: 0 },
        { isoCode: "FL", name: "Florida", rate: 0 },
        { isoCode: "GA", name: "Georgia", rate: 0 },
        { isoCode: "IL", name: "Illinois", rate: 0 },
        { isoCode: "IA", name: "Iowa", rate: 0 },
        { isoCode: "KS", name: "Kansas", rate: 0 },
        { isoCode: "ME", name: "Maine", rate: 0 },
        { isoCode: "MA", name: "Massachusetts", rate: 0 },
        { isoCode: "MI", name: "Michigan", rate: 0 },
        { isoCode: "MN", name: "Minnesota", rate: 0 },
        { isoCode: "MO", name: "Missouri", rate: 0 },
        { isoCode: "MT", name: "Montana", rate: 0 },
        { isoCode: "NV", name: "Nevada", rate: 0 },
        { isoCode: "NH", name: "New Hampshire", rate: 0 },
        { isoCode: "NY", name: "New York", rate: 0 },
        { isoCode: "NC", name: "North Carolina", rate: 0 },
        { isoCode: "ND", name: "North Dakota", rate: 0 },
        { isoCode: "OK", name: "Oklahoma", rate: 0 },
        { isoCode: "OR", name: "Oregon", rate: 0 },
        { isoCode: "RI", name: "Rhode Island", rate: 0 },
        { isoCode: "SC", name: "South Carolina", rate: 0 },
        { isoCode: "UT", name: "Utah", rate: 0 },
        { isoCode: "VA", name: "Virginia", rate: 0 },
        { isoCode: "WA", name: "Washington D.C.", rate: 0 }
    ],
    "CA": [{
            name: "Alberta",
            isoCode: "AB",
            rate: 5
        },
        {
            name: "British Columbia",
            isoCode: "BC",
            rate: 12
        },
        {
            name: "Manitoba",
            isoCode: "MB",
            rate: 12
        },
        {
            name: "New Brunswick",
            isoCode: "NB",
            rate: 12
        },
        {
            name: "Newfoundland and Labrador",
            isoCode: "NL",
            rate: 12
        },
        {
            name: "Northwest Territories",
            isoCode: "NT",
            rate: 5
        },
        {
            name: "Nova Scotia",
            isoCode: "NS",
            rate: 15
        },
        {
            name: "Nunavut",
            isoCode: "NU",
            rate: 5
        },
        {
            name: "Ontario",
            isoCode: "ON",
            rate: 13
        },
        {
            name: "Prince Edward Island",
            isoCode: "PE",
            rate: 15
        },
        {
            name: "Quebec",
            isoCode: "QC",
            rate: 9.976
        },
        {
            name: "Saskatchewan",
            isoCode: "SK",
            rate: 5
        },
        {
            name: "Yukon",
            isoCode: "YT",
            rate: 5
        }
    ]

}

const countries = [
    {
        "IsoCode": "AU",
        "select": "AU",
        "rate": 0,
        "country": "Australia"
    },
    {
        "IsoCode": "AD",
        "select": "AD",
        "rate": 0,
        "country": "Andorra"
    },
    {
        "IsoCode": "AG",
        "select": "AG",
        "rate": 0,
        "country": "Antigua and Barbuda"
    },
    {
        "IsoCode": "AI",
        "select": "AI",
        "rate": 0,
        "country": "Anguilla"
    },
    {
        "IsoCode": "AR",
        "select": "AR",
        "rate": 0,
        "country": "Argentina"
    },
    {
        "IsoCode": "AW",
        "select": "AW",
        "rate": 0,
        "country": "Aruba (Netherlands)"
    },
    {
        "IsoCode": "AT",
        "select": "AT",
        "rate": 20,
        "country": "Austria"
    },
    {
        "IsoCode": "BS",
        "select": "BS",
        "rate": 0,
        "country": "Bahamas"
    },
    {
        "IsoCode": "BD",
        "select": "BD",
        "rate": 0,
        "country": "Bangladesh"
    },
    {
        "IsoCode": "BH",
        "select": "BH",
        "rate": 0,
        "country": "Bahrain"
    },
    {
        "IsoCode": "BG",
        "select": "BG",
        "rate": 20,
        "country": "Bulgaria"
    },
    {
        "IsoCode": "VG",
        "select": "VG",
        "rate": 0,
        "country": "British Virgin Islands"
    },
    {
        "IsoCode": "BE",
        "select": "BE",
        "rate": 21,
        "country": "Belgium"
    },
    {
        "IsoCode": "WZ",
        "select": "WZ",
        "rate": 0,
        "country": "Belize"
    },
    {
        "IsoCode": "BM",
        "select": "BM",
        "rate": 0,
        "country": "Bermuda"
    },
    {
        "IsoCode": "BR",
        "select": "BR",
        "rate": 0,
        "country": "Brazil"
    },
    {
        "IsoCode": "BN",
        "select": "BN",
        "rate": 0,
        "country": "Brunei"
    },
    {
        "IsoCode": "KM",
        "select": "KM",
        "rate": 0,
        "country": "Comoros"
    },
    {
        "IsoCode": "CR",
        "select": "CR",
        "rate": 0,
        "country": "Costa Rica"
    },
    {
        "IsoCode": "CZ",
        "select": "CZ",
        "rate": 21,
        "country": "Czech Republic"
    },
    {
        "IsoCode": "CW",
        "select": "CW",
        "rate": 0,
        "country": "Curacao"
    },
    {
        "IsoCode": "HR",
        "select": "HR",
        "rate": 25,
        "country": "Croatia"
    },
    {
        "IsoCode": "CK",
        "select": "CK",
        "rate": 0,
        "country": "Cook Islands (NZ)"
    },
    {
        "IsoCode": "KY",
        "select": "KY",
        "rate": 0,
        "country": "Cayman Islands (UK)"
    },
    {
        "IsoCode": "CW",
        "select": "CW",
        "rate": 0,
        "country": "Curacao (Netherlands)"
    },
    {
        "IsoCode": "DK",
        "select": "DK",
        "rate": 25,
        "country": "Denmark"
    },
    {
        "IsoCode": "DM",
        "select": "DM",
        "rate": 0,
        "country": "Dominica"
    },
    {
        "IsoCode": "DO",
        "select": "DO",
        "rate": 0,
        "country": "Dominican Republic"
    },
    {
        "IsoCode": "ET",
        "select": "ET",
        "rate": 0,
        "country": "Ethiopia"
    },
    {
        "IsoCode": "EE",
        "select": "EE",
        "rate": 20,
        "country": "Estonia"
    },
    {
        "IsoCode": "EG",
        "select": "EG",
        "rate": 0,
        "country": "Egypt"
    },
    {
        "IsoCode": "FJ",
        "select": "FJ",
        "rate": 0,
        "country": "Fiji"
    },
    {
        "IsoCode": "FK",
        "select": "FK",
        "rate": 0,
        "country": "Falkland Islands (UK)"
    },
    {
        "IsoCode": "FO",
        "select": "FO",
        "rate": 0,
        "country": "Faroe Islands (Denmark)"
    },
    {
        "IsoCode": "FM",
        "select": "FM",
        "rate": 0,
        "country": "Federated States of Micronesia"
    },
    {
        "IsoCode": "FR",
        "select": "FR",
        "rate": 20,
        "country": "France"
    },
    {
        "IsoCode": "FI",
        "select": "FI",
        "rate": 24,
        "country": "Finland"
    },
    {
        "IsoCode": "PF",
        "select": "PF",
        "rate": 0,
        "country": "French Polynesia (France)"
    },
    {
        "IsoCode": "GD",
        "select": "GD",
        "rate": 0,
        "country": "Grenada"
    },
    {
        "IsoCode": "GL",
        "select": "GL",
        "rate": 0,
        "country": "Greenland (Denmark)"
    },
    {
        "IsoCode": "GY",
        "select": "GY",
        "rate": 0,
        "country": "Guyana"
    },
    {
        "IsoCode": "GH",
        "select": "GH",
        "rate": 0,
        "country": "Ghana"
    },
    {
        "IsoCode": "GR",
        "select": "GR",
        "rate": 24,
        "country": "Greece"
    },
    {
        "IsoCode": "GI",
        "select": "GI",
        "rate": 0,
        "country": "Gibraltar (UK)"
    },
    {
        "IsoCode": "DE",
        "select": "DE",
        "rate": 19,
        "country": "Germany"
    },
    {
        "IsoCode": "GG",
        "select": "GG",
        "rate": 0,
        "country": "Guernsey"
    },
    {
        "IsoCode": "HU",
        "select": "HU",
        "rate": 27,
        "country": "Hungary"
    },
    {
        "IsoCode": "HN",
        "select": "HN",
        "rate": 0,
        "country": "Honduras"
    },
    {
        "IsoCode": "IN",
        "select": "IN",
        "rate": 18,
        "country": "India"
    },
    {
        "IsoCode": "IE",
        "select": "IE",
        "rate": 23,
        "country": "Ireland"
    },
    {
        "IsoCode": "IM",
        "select": "IM",
        "rate": 0,
        "country": "Isle of Man"
    },
    {
        "IsoCode": "IL",
        "select": "IL",
        "rate": 0,
        "country": "Israel"
    },
    {
        "IsoCode": "IT",
        "select": "IT",
        "rate": 22,
        "country": "Italy"
    },
    {
        "IsoCode": "JP",
        "select": "JP",
        "rate": 0,
        "country": "Japan"
    },
    {
        "IsoCode": "JE",
        "select": "JE",
        "rate": 0,
        "country": "Jersey"
    },
    {
        "IsoCode": "KE",
        "select": "KE",
        "rate": 0,
        "country": "Kenya"
    },
    {
        "IsoCode": "KW",
        "select": "KW",
        "rate": 0,
        "country": "Kuwait"
    },
    {
        "IsoCode": "LA",
        "select": "LA",
        "rate": 0,
        "country": "Laos"
    },
    {
        "IsoCode": "LV",
        "select": "LV",
        "rate": 21,
        "country": "Latvia"
    },
    {
        "IsoCode": "LT",
        "select": "LT",
        "rate": 21,
        "country": "Lithuania"
    },
    {
        "IsoCode": "LU",
        "select": "LU",
        "rate": 17,
        "country": "Luxembourg"
    },
    {
        "IsoCode": "MY",
        "select": "MY",
        "rate": 0,
        "country": "Malaysia"
    },
    {
        "IsoCode": "MT",
        "select": "MT",
        "rate": 18,
        "country": "Malta"
    },
    {
        "IsoCode": "MX",
        "select": "MX",
        "rate": 0,
        "country": "Mexico"
    },
    {
        "IsoCode": "MA",
        "select": "MA",
        "rate": 0,
        "country": "Marshall Islands"
    },
    {
        "IsoCode": "MC",
        "select": "MC",
        "rate": 20,
        "country": "Monaco"
    },
    {
        "IsoCode": "MN",
        "select": "MN",
        "rate": 0,
        "country": "Mongolia"
    },
    {
        "IsoCode": "FQ",
        "select": "FQ",
        "rate": 0,
        "country": "New Caledonia"
    },
    {
        "IsoCode": "NL",
        "select": "NL",
        "rate": 21,
        "country": "Netherlands"
    },
    {
        "IsoCode": "NG",
        "select": "NG",
        "rate": 0,
        "country": "Nigeria"
    },
    {
        "IsoCode": "NU",
        "select": "NU",
        "rate": 0,
        "country": "Niue"
    },
    {
        "IsoCode": "NZ",
        "select": "NZ",
        "rate": 0,
        "country": "New Zealand"
    },
    {
        "IsoCode": "MP",
        "select": "MP",
        "rate": 0,
        "country": "Northern Mariana Islands (USA)"
    },
    {
        "IsoCode": "NO",
        "select": "NO",
        "rate": 0,
        "country": "Norway"
    },
    {
        "IsoCode": "OM",
        "select": "OM",
        "rate": 0,
        "country": "OMAN"
    },
    {
        "IsoCode": "PK",
        "select": "PK",
        "rate": 0,
        "country": "Pakistan"
    },
    {
        "IsoCode": "PL",
        "select": "PL",
        "rate": 23,
        "country": "Poland"
    },
    {
        "IsoCode": "PW",
        "select": "PW",
        "rate": 0,
        "country": "Palau"
    },
    {
        "IsoCode": "PT",
        "select": "PT",
        "rate": 23,
        "country": "Portugal"
    },
    {
        "IsoCode": "PN",
        "select": "PN",
        "rate": 0,
        "country": "Pitcairn Islands"
    },
    {
        "IsoCode": "QA",
        "select": "QA",
        "rate": 0,
        "country": "Qatar"
    },
    {
        "IsoCode": "RO",
        "select": "RO",
        "rate": 19,
        "country": "Romania"
    },
    {
        "IsoCode": "PM",
        "select": "PM",
        "rate": 0,
        "country": "Saint Pierre and Miquelon"
    },
    {
        "IsoCode": "VC",
        "select": "VC",
        "rate": 0,
        "country": "Saint Vincent and the Grenadines"
    },
    {
        "IsoCode": "KN",
        "select": "KN",
        "rate": 0,
        "country": "Saint Kitts and Nevis"
    },
    {
        "IsoCode": "LC",
        "select": "LC",
        "rate": 0,
        "country": "Saint Lucia"
    },
    {
        "IsoCode": "WS",
        "select": "WS",
        "rate": 0,
        "country": "Samoa"
    },
    {
        "IsoCode": "RS",
        "select": "RS",
        "rate": 0,
        "country": "Serbia"
    },
    {
        "IsoCode": "LK",
        "select": "LK",
        "rate": 0,
        "country": "Sri Lanka"
    },
    {
        "IsoCode": "SA",
        "select": "SA",
        "rate": 0,
        "country": "Saudi Arabia"
    },
    {
        "IsoCode": "ZA",
        "select": "ZA",
        "rate": 0,
        "country": "South Africa"
    },
    {
        "IsoCode": "SB",
        "select": "SB",
        "rate": 0,
        "country": "Solomon Islands"
    },
    {
        "IsoCode": "ES",
        "select": "ES",
        "rate": 21,
        "country": "Spain"
    },
    {
        "IsoCode": "SK",
        "select": "SK",
        "rate": 20,
        "country": "Slovakia"
    },
    {
        "IsoCode": "SI",
        "select": "SI",
        "rate": 22,
        "country": "Slovenia"
    },
    {
        "IsoCode": "SJ",
        "select": "SJ",
        "rate": 0,
        "country": "Svalbard and Jan Mayen"
    },
    {
        "IsoCode": "SE",
        "select": "SE",
        "rate": 25,
        "country": "Sweden"
    },
    {
        "IsoCode": "TL",
        "select": "TL",
        "rate": 0,
        "country": "Timor-Leste"
    },
    {
        "IsoCode": "TT",
        "select": "TT",
        "rate": 0,
        "country": "Trinidad and Tobago"
    },
    {
        "IsoCode": "TH",
        "select": "TH",
        "rate": 0,
        "country": "Thailand"
    },
    {
        "IsoCode": "TO",
        "select": "TO",
        "rate": 0,
        "country": "Tonga"
    },
    {
        "IsoCode": "TR",
        "select": "TR",
        "rate": 0,
        "country": "Turkey"
    },
    {
        "IsoCode": "TC",
        "select": "TC",
        "rate": 0,
        "country": "Turks and Caicos Islands (UK)"
    },
    {
        "IsoCode": "AE",
        "select": "AE",
        "rate": 5,
        "country": "United Arab Emirates"
    },
    {
        "IsoCode": "GB",
        "select": "GB",
        "rate": 0,
        "country": "United Kingdom"
    },
    {
        "IsoCode": "VI",
        "select": "VI",
        "rate": 0,
        "country": "United States Virgin Islands (USA)"
    },
    {
        "IsoCode": "US",
        "select": "US",
        "rate": null,
        "country": "United States"
    },
    {
        "IsoCode": "CA",
        "select": "CA",
        "rate": null,
        "country": "Canada"
    },

]


exports.ifRatesApplied = async (req, res, next) => {
    try {
        const { body } = req;
        console.log("body is ", req.body)
        if (body.state != "" && (body.country === "CA" || body.country === "US")) {

            if (body.orderType == "presale") {
                getStatesRates[body.country].forEach(function(element, index) {
                    if (element.isoCode === body.state) {
                        if (body.environment == 'test') {
                            console.log(" in states test ")
                            let totalPrice = (10 + ((10 * element.rate) / 100)) * body.quantity;
                            console.log("ttalprice ", totalPrice)
                            totalPrice = totalPrice + ((totalPrice * 6.95) / 100);
                            console.log("ttalprice ", totalPrice)
                            totalPrice = totalPrice - 10;
                            const total = Math.round(totalPrice * 100) / 100;
                            body.source_amount = total;
                            console.log("total ", total)
                            next();

                        } else {
                            // let totalPrice = ((price * element.rate) / 100);
                            // totalPrice = totalPrice + ((totalPrice * 6.95) / 100);
                            //let totalPrice = ((price * 6.95) / 100);
                            let totalPrice = 0;
                            console.log("ttalprice ", totalPrice)
                            const total = Math.round(totalPrice * 100) / 100;
                            body.source_amount = total;
                            next();

                        }
                    }
                });
            } else {
                getStatesRates[body.country].forEach(function(element, index) {
                    if (element.isoCode === body.state) {
                        if (body.environment == 'test') {
                            console.log(" in states test ")
                            let totalPrice = (10 + ((10 * element.rate) / 100)) * body.quantity;
                            console.log("ttalprice ", totalPrice)
                            totalPrice = totalPrice + ((totalPrice * 6.95) / 100);
                            console.log("ttalprice ", totalPrice)
                            const total = Math.round(totalPrice * 100) / 100;
                            body.source_amount = total;
                            console.log("total ", total)
                            next();

                        } else {
                            let totalPrice = (price + ((price * element.rate) / 100)) * body.quantity;
                            totalPrice = totalPrice + ((totalPrice * 6.95) / 100);
                            const total = Math.round(totalPrice * 100) / 100;
                            body.source_amount = total;
                            next();

                        }
                    }
                });
            }


        } else {
            console.log("in else")
            const userCurrency = body.sourceCurrency;

            if (userCurrency == "USD") {

                if (body.orderType == "presale") {
                    countries.forEach(function(element, index) {
                        if (element.IsoCode === body.country) {

                            if (body.environment == 'test') {
                                let totalPrice = (10 + ((10 * element.rate) / 100)) * body.quantity;
                                console.log("ttalprice ", totalPrice)
                                totalPrice = totalPrice + ((totalPrice * 6.95) / 100);
                                console.log("ttalprice ", totalPrice)
                                totalPrice = totalPrice - 10;
                                const total = Math.round(totalPrice * 100) / 100;
                                body.source_amount = total;
                                console.log("total ", total)
                                next();
                            } else {
                                console.log("huhyugygyg")
                                // let totalPrice = ((price * element.rate) / 100);
                                // totalPrice = totalPrice + ((totalPrice * 6.95) / 100);
                                //let totalPrice = ((price * 6.95) / 100);
                                let totalPrice = 0;
                                console.log("ttalprice ", totalPrice)
                                const total = Math.round(totalPrice * 100) / 100;
                                body.source_amount = total;
                                next();
                            }
                        }
                    });
                } else {
                    countries.forEach(function(element, index) {
                        if (element.IsoCode === body.country) {

                            if (body.environment == 'test') {
                                let totalPrice = (10 + ((10 * element.rate) / 100)) * body.quantity;
                                console.log("ttalprice ", totalPrice)
                                totalPrice = totalPrice + ((totalPrice * 6.95) / 100);
                                console.log("ttalprice ", totalPrice)
                                const total = Math.round(totalPrice * 100) / 100;
                                body.source_amount = total;
                                next();
                            } else {
                                let totalPrice = (price + ((price * element.rate) / 100)) * body.quantity;
                                totalPrice = totalPrice + ((totalPrice * 6.95) / 100);
                                console.log("ttalprice ", totalPrice)
                                const total = Math.round(totalPrice * 100) / 100;
                                body.source_amount = total;
                                next();
                            }
                        }
                    });
                }




            } else {
                return res.json({ status: false, message: "source currency should be USD" })
            }
        }
    } catch (e) {
        console.log(e)
        return res.json({ status: false, message: "something went wrong" })
        //next(e);
    }
}