// import React, { useState } from "react";
// import Heading from "../common/Heading";

// const Assignment = () => {
//     const [formData, setFormData] = useState([{
//         firstName: "",
//         lastName: "",
//         email: ""
// }]);
//     const [users, setUsers] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevState) => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleAddUser = (e) => {
//         e.preventDefault();
//         if (formData.firstName && formData.lastName && formData.email) {
//             setUsers((prevUsers) => [...prevUsers, formData]);
//             setFormData({ firstName: "", lastName: "", email: "" });
//         }
//     };

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const filterUsers = users.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="bg-gray-100 py-12 h-screen">
//             <div className="container mx-auto">
//                 <Heading classStyle={"text-center mt-8"} text={"Form"} />
//                 <form
//                     onSubmit={handleAddUser}
//                     className="flex flex-col justify-center items-center max-w-[400px] w-full mx-auto"
//                 >
//                     <input
//                         value={formData.firstName} onChange={handleChange} required className="outline-none p-2 mt-3 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto" type="text" placeholder="First Name" name="firstName"
//                     />
//                     <input value={formData.lastName} onChange={handleChange} required className="outline-none p-2 mt-3 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto" type="text" placeholder="Last Name" name="lastName"
//                     />
//                     <input value={formData.email} onChange={handleChange} required className="outline-none p-2 mt-3 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto" type="email" placeholder="Email" name="email"
//                     />
//                     <button type="submit" className="bg-blue-400 mt-3 px-4 py-2 rounded-lg text-white">Add</button>
//                 </form>
//                 <div className="mt-8">
//                     <Heading classStyle={"text-center"} text={"Save Data"} />
//                     <div className="mt-4">
//                         {filterUsers.length > 0 ? (
//                             <table className="min-w-full border-collapse text-center mx-auto">
//                                 <thead>
//                                     <tr>
//                                         <th className="border p-2">First Name</th>
//                                         <th className="border p-2">Last Name</th>
//                                         <th className="border p-2">Email</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {filterUsers.map((user, index) => (
//                                         <tr key={index}>
//                                             <td className="border p-2">{user.firstName}</td>
//                                             <td className="border p-2">{user.lastName}</td>
//                                             <td className="border p-2">{user.email}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         ) : (
//                             <p className="text-center text-gray-500">No Data Found.</p>
//                         )}
//                     </div>
//                 </div>
//                 <div className="mt-8 max-w-[400px] mx-auto">
//                     <Heading classStyle={"text-center"} text={"Search Input"} />
//                     <input value={searchTerm} onChange={handleSearch} className="outline-none p-2 mt-4 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto" type="search" placeholder="Search"
//                     />
//                     {searchTerm && filterUsers.length > 0 && (
//                         <p className="text-center text-xl text-green-600">"{searchTerm}" found in the list!</p>
//                     )}
//                     {searchTerm && filterUsers.length === 0 && (
//                         <p className="text-center text-xl text-red-600">"{searchTerm}" is not in the list.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Assignment;

import { useState } from 'react'
import TableRow from './TableRow'
import Heading from "../common/Heading";

const Assignment = () => {
    const [studentData, setStudentData] = useState([])

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    // Query State
    const [query, setQuery] = useState('')

    function formSubmitHandler(e) {
        e.preventDefault()
        setStudentData([...studentData, { firstName: firstName.toLowerCase(), lastName: lastName.toLowerCase(), email: email.toLowerCase() }])
        // Clean state
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    function doesObjectContain(student) {
        const { firstName, lastName, email } = student;
        return [firstName, lastName, email].some(item => item.toLowerCase().includes(query))
    }

    return (
        <div className='bg-gray-100 py-12 h-screen'>
            <div className='container mx-auto'>
                <Heading classStyle={"text-center mb-5"} text={"Form"} />
                <form className='flex flex-col justify-center items-center max-w-[400px] w-full mx-auto' onSubmit={formSubmitHandler}>
                    <div className='flex flex-col gap-6 max-w-[400px] w-full mx-auto'>
                        <div className='flex flex-col '><label htmlFor="">First Name</label><input type="text" className='outline-none p-2 mt-3 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto' value={firstName} required onChange={(e) => setFirstName(e.target.value)} /></div>
                        <div className='flex flex-col '><label htmlFor="">Last Name</label><input type="text" className='outline-none p-2 mt-3 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto' value={lastName} required onChange={(e) => setLastName(e.target.value)} /></div>
                        <div className='flex flex-col '><label htmlFor="">Email</label><input type="email" className='outline-none p-2 mt-3 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto' value={email} required onChange={(e) => setEmail(e.target.value)} /></div>
                    </div>
                    {/* Submit Button */}
                    <button type='submit' className='bg-blue-400 mt-3 px-4 py-2 rounded-lg text-white'>Submit</button>
                </form>
                <div>
                    <div className='mt-8 max-w-[400px] mx-auto'>
                        <Heading classStyle={"text-center mb-5"} text={"Search Input"} />
                        <input type="text" placeholder='Search first name from list' className='outline-none p-2 mt-4 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto"' value={query} onChange={(e) => setQuery(e.target.value)} />
                    </div>
                    <Heading classStyle={"text-center mt-8"} text={"Save Data"} />
                    <div className='flex flex-col gap-6 max-w-[400px] w-full mx-auto mt-5'>
                        <table className='min-w-full border-collapse text-center mx-auto'>
                            <thead>
                                <tr>
                                    <th className='pl-5'>#</th>
                                    <th className='px-5'>First Name</th>
                                    <th className='px-5'>Last Name</th>
                                    <th className='px-5'>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentData.filter(doesObjectContain).map(function (student, index) {
                                    return <TableRow key={index} index={index} student={student} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assignment