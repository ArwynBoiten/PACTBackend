var template = {
    name: "Auto Verhuur",
    description: "Contract voor het verhuren van auto's",
    roles: [
        {
            name: "Owner",
            fields: [
                "object"
            ]
        },
        {
            name: "Renter",
            fields: [
                "age",
                "licenseType"
            ]
        }
    ],
    fields: [
        {
            name: "age",
            label: "Age",
            type: "number"
        },
        {
            name: "licenseType",
            label: "Rijbewijstype",
            type: "text"
        },
        {
            name: "object",
            label: "Object",
            type: "object",
            fields: [
                    {
                        name: "name",
                        label: "Naam",
                        type: "text"
                    },
                    {
                        name: "kenmerk",
                        label: "Kenmerk",
                        type: "text"
                    },
                    {
                        name: "price",
                        label: "Prijs",
                        type: "number"
                    }
                ]
        }
    ],
    rule_preset: "carRent",
    member_limit: 2
};

exports.template = template;