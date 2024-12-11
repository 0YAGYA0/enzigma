import React, { useState } from "react";

const Temp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    address: {
      street: "",
      city: "",
      zip: "",
    },
    emergencyContact: {
      name: "",
      phone: "",
    },
    relocation: false,
    education: [
      { school: "", qualification: "", percentage: "", passOutYear: "" },
    ],
    trainings: [{ program: "", contents: "", organizedBy: "", duration: "" }],
    certifications: [{ srNo: "", certification: "", duration: "" }],
    familyMembers: [{ relation: "", occupation: "", location: "" }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");
    if (nameParts.length > 1) {
      // Nested structure (like address or emergencyContact)
      setFormData((prevData) => ({
        ...prevData,
        [nameParts[0]]: {
          ...prevData[nameParts[0]],
          [nameParts[1]]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleArrayChange = (e, arrayName, index) => {
    const { name, value } = e.target;
    const newArray = [...formData[arrayName]];
    newArray[index] = { ...newArray[index], [name]: value };
    setFormData((prevData) => ({
      ...prevData,
      [arrayName]: newArray,
    }));
  };

  const handleAddNew = (arrayName) => {
    const newItem =
      arrayName === "education"
        ? {
            school: "",
            qualification: "",
            percentage: "",
            passOutYear: "",
          }
        : arrayName === "trainings"
        ? { program: "", contents: "", organizedBy: "", duration: "" }
        : arrayName === "certifications"
        ? { srNo: "", certification: "", duration: "" }
        : { relation: "", occupation: "", location: "" };

    setFormData((prevData) => ({
      ...prevData,
      [arrayName]: [...prevData[arrayName], newItem],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto ">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="min-h-screen bg-gradient-to-b bg-gray-100 p-8 from-blue-50 to-blue-100">
          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
                Onboarding Form
              </h1>

              {/* Personal Information */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Personal Information
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      name="name.firstName"
                      type="text"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Middle Name
                    </label>
                    <input
                      name="name.middleName"
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      name="name.lastName"
                      type="text"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <input
                      name="dateOfBirth"
                      type="date"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Age
                    </label>
                    <input
                      name="age"
                      type="number"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                    <select
                      name="gender"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              {/* Address Information */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Permanent Address
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Street
                    </label>
                    <input
                      name="permanentAddress.street"
                      type="text"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      name="permanentAddress.city"
                      type="text"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      name="permanentAddress.state"
                      type="text"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Zip Code
                    </label>
                    <input
                      name="permanentAddress.zipCode"
                      type="text"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      name="permanentAddress.country"
                      type="text"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Emergency Contact */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Emergency Contact
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      name="emergencyContact.name"
                      type="text"
                      value={formData.emergencyContact.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Number
                    </label>
                    <input
                      name="emergencyContact.phone"
                      type="tel"
                      value={formData.emergencyContact.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Education */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Education
                </legend>
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="  px-2">
                      <th className="px-4 py-2 text-sm font-medium border-gray-300 text-gray-700">
                        Degree
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Institution
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Percentage
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Pass Out Year
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.education.map((edu, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="degree"
                            type="text"
                            value={edu.degree}
                            onChange={(e) =>
                              handleArrayChange(e, "education", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="institution"
                            type="text"
                            value={edu.institution}
                            onChange={(e) =>
                              handleArrayChange(e, "education", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="percentage"
                            type="number"
                            value={edu.percentage}
                            onChange={(e) =>
                              handleArrayChange(e, "education", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="passOutYear"
                            type="text"
                            value={edu.passOutYear}
                            onChange={(e) =>
                              handleArrayChange(e, "education", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={() => handleAddNew("education")}
                  className="mt-4 text-blue-500"
                >
                  Add Education
                </button>
              </fieldset>

              {/* Trainings Table */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Training
                </legend>
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="">
                      <th className="px-4 py-2 border text-sm font-medium border-gray-300 text-gray-700 ">
                        Training Program
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Contents
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Organized By
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.trainings.map((train, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="program"
                            type="text"
                            value={train.program}
                            onChange={(e) =>
                              handleArrayChange(e, "trainings", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="contents"
                            type="text"
                            value={train.contents}
                            onChange={(e) =>
                              handleArrayChange(e, "trainings", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="organizedBy"
                            type="text"
                            value={train.organizedBy}
                            onChange={(e) =>
                              handleArrayChange(e, "trainings", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="duration"
                            type="text"
                            value={train.duration}
                            onChange={(e) =>
                              handleArrayChange(e, "trainings", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={() => handleAddNew("trainings")}
                  className="mt-4 text-blue-500"
                >
                  Add Training
                </button>
              </fieldset>

              {/* Certifications Table */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Certifications
                </legend>
                <table className="table-auto w-full border-collapse border text-gray-700 border-gray-300">
                  <thead>
                    <tr className="">
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Certification Number
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Certification Name
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.certifications.map((cert, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="srNo"
                            type="text"
                            value={cert.srNo}
                            onChange={(e) =>
                              handleArrayChange(e, "certifications", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="certification"
                            type="text"
                            value={cert.certification}
                            onChange={(e) =>
                              handleArrayChange(e, "certifications", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="duration"
                            type="text"
                            value={cert.duration}
                            onChange={(e) =>
                              handleArrayChange(e, "certifications", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={() => handleAddNew("certifications")}
                  className="mt-4 text-blue-500"
                >
                  Add Certification
                </button>
              </fieldset>

              {/* Family Members Table */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Family Members
                </legend>
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="">
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Relation
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Occupation
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.familyMembers.map((fam, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="relation"
                            type="text"
                            value={fam.relation}
                            onChange={(e) =>
                              handleArrayChange(e, "familyMembers", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="occupation"
                            type="text"
                            value={fam.occupation}
                            onChange={(e) =>
                              handleArrayChange(e, "familyMembers", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="location"
                            type="text"
                            value={fam.location}
                            onChange={(e) =>
                              handleArrayChange(e, "familyMembers", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={() => handleAddNew("familyMembers")}
                  className="mt-4 text-blue-500"
                >
                  Add Family Member
                </button>
              </fieldset>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="py-2 px-6 bg-gray-900 text-white rounded-md transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-75"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Temp;
