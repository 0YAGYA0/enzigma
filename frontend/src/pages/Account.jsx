// import React, { useState } from "react";

// const Account = () => {
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     password: "********", // Masked password
//   });
//   const [isEditingPassword, setIsEditingPassword] = useState(false);
//   const [newPassword, setNewPassword] = useState("");

//   const handlePasswordChange = () => {
//     if (newPassword.trim().length < 6) {
//       alert("Password must be at least 6 characters long.");
//       return;
//     }
//     setUser({ ...user, password: "********" });
//     setNewPassword("");
//     setIsEditingPassword(false);
//     alert("Password updated successfully!");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* Header */}
//         <div className="bg-indigo-600 text-white px-6 py-4">
//           <h1 className="text-2xl font-semibold">Account Settings</h1>
//           <p className="text-sm opacity-90">
//             Manage your personal information and security
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="p-6 space-y-8">
//           {/* Personal Info Section */}
//           <div>
//             <h2 className="text-lg font-semibold text-gray-700 mb-4">
//               Personal Information
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-500">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   value={user.name}
//                   disabled
//                   className="mt-1 w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-500">
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   value={user.email}
//                   disabled
//                   className="mt-1 w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Security Section */}
//           <div>
//             <h2 className="text-lg font-semibold text-gray-700 mb-4">
//               Security
//             </h2>
//             <div>
//               <label className="block text-sm font-medium text-gray-500 mb-2">
//                 Password
//               </label>
//               {!isEditingPassword ? (
//                 <div className="flex items-center space-x-4">
//                   <input
//                     type="password"
//                     value={user.password}
//                     disabled
//                     className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
//                   />
//                   <button
//                     className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
//                     onClick={() => setIsEditingPassword(true)}
//                   >
//                     Change Password
//                   </button>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   <input
//                     type="password"
//                     placeholder="Enter new password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
//                   />
//                   <div className="flex justify-end space-x-4">
//                     <button
//                       className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
//                       onClick={handlePasswordChange}
//                     >
//                       Save
//                     </button>
//                     <button
//                       className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition"
//                       onClick={() => {
//                         setIsEditingPassword(false);
//                         setNewPassword("");
//                       }}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;

import React, { useState } from "react";

const Account = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "currentPassword123", // For demo purposes
  });

  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handlePasswordChange = () => {
    if (currentPassword !== user.password) {
      alert("Current password is incorrect!");
      return;
    }

    if (newPassword.trim().length < 6) {
      alert("New password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert("New password and confirmation do not match!");
      return;
    }

    setUser({ ...user, password: newPassword });
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setIsEditingPassword(false);
    alert("Password updated successfully!");
  };

  return (
    <div className=" py-2">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 text-white px-6 py-4">
          <h1 className="text-2xl font-semibold">Account Settings</h1>
          <p className="text-sm opacity-90">
            Manage your personal information and security
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-8">
          {/* Personal Info Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  value={user.name}
                  disabled
                  className="mt-1 w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Email
                </label>
                <input
                  type="text"
                  value={user.email}
                  disabled
                  className="mt-1 w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Security
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">
                Password
              </label>
              {!isEditingPassword ? (
                <div className="flex items-center space-x-4">
                  <input
                    type="password"
                    value="********"
                    disabled
                    className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    onClick={() => setIsEditingPassword(true)}
                  >
                    Change Password
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <input
                    type="password"
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <div className="flex justify-end space-x-4">
                    <button
                      className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
                      onClick={handlePasswordChange}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition"
                      onClick={() => {
                        setIsEditingPassword(false);
                        setCurrentPassword("");
                        setNewPassword("");
                        setConfirmNewPassword("");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
