export enum QuestionIds {
    Confirm = 0,
    FirstName = 1,
    LastName = 2,
    Dob = 3,
    VehicleMake = 4,
    VehicleModel = 5,
    VehicleAge = 6
}

export default {
    [QuestionIds.Confirm]: {
        id: 0,
        name: "confirm",
        translations: {
            text: "questions.confirm.text",
            hint: "questions.confirm.hint"
        }
    },
    [QuestionIds.FirstName]: {
        id: 1,
        name: "firstName",
        translations: {
            text: "questions.first_name.text",
            hint: "questions.first_name.hint"
        }
    },
    [QuestionIds.LastName]: {
        id: 2,
        name: "lastName",
        translations: {
            text: "questions.last_name.text",
            hint: "questions.last_name.hint"
        }
    },
    [QuestionIds.Dob]: {
        id: 3,
        name: "dob",
        text: "What is your date of birth?",
        hint: "Please enter your date of birth in the format DD MM YYYY."
    },
    [QuestionIds.VehicleMake]: {
        id: 4,
        name: "vehicleMake",
        text: "What make is your car?",
        hint: "Please enter the make of your car."
    },
    [QuestionIds.VehicleModel]: {
        id: 5,
        name: "vehiclemodel",
        text: "What model is your car?",
        hint: "Please enter the model of your car."
    },
    [QuestionIds.VehicleAge]: {
        id: 6,
        name: "vehicleAgeYears",
        text: "How old is your car?",
        hint: "Please enter the age of your car."
    }
}