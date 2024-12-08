import mongoose, { Schema } from "mongoose";

const detailSchema = new Schema({

    name:{
        firstName: {
        type: String,
        required: true,
        },

        middleName: {
        type: String,
        },

        lastName: {
        type: String,
        required: true,
        },
    },

    permanentAddress: {
        street: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            required: true,
        },

        state: {
            type: String,
            required: true,
        },

        zipCode: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            required: true,
        },
    },

    currentAddress: {
        street: {
            type: String,
        },

        city: {
            type: String,
        },

        state: {
            type: String,
        },

        zipCode: {
            type: String,
        },

        country: {
            type: String,
        },
    },

    dateOfBirth: {
        type: Date,
    },

    age: {
        type: Number,
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },

    passport: {
        type: String,
    },

    mobile: {
        type: String,
        required: true,
    },

    panNo: {
        type: String,
    },

    visa: {
        type: String,
    },

    email: {
        type: String,
        required: true,
    },

    emergencyContact: {
        name: {
            type: String,
            required: true,
        },

        number: {
            type: String,
            required: true,
        },
    },


    availableForRelocation: {
        type: Boolean,
        default: false,
    },


    educationQualifications: [
    {
        srNo: {
            type: Number,
        },
        institution: {
            type: String,
        },
        qualification: {
            type: String,
        },
        percentageOrCGPA: {
            type: String,
        },
        passOutYear: {
            type: Number,
        },
    },
    ],


    trainings: [
        {
            program: {
                type: String,
            },
            contents: {
                type: String,
            },
            organizedBy: {
                type: String,
            },
            duration: {
                type: String,
            },
        },
    ],


    certifications: [
        {
            srNo: {
                type: Number,
            },
            certification: {
                type: String,
            },
            duration: {
                type: String,
            },
        },
    ],


    familyDetails: [
        {
            relation: {
                type: String,
            },
            occupation: {
                type: String,
            },
            residentLocation: {
                type: String,
            },
        },
    ],


    references: [
        {
            name: {
                type: String,
            },
            designation: {
                type: String,
            },
            contactNo: {
                type: String,
            },
        },
    ],
    });

export const Detail = mongoose.model("Detail", detailSchema);
