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
        <div className='bg-gray-100 py-12 lg:h-screen'>
            <div className='container mx-auto'>
                <Heading classStyle={"text-center mb-5"} text={"Form"} />
                <form className='flex flex-col justify-center items-center max-w-[400px] w-full mx-auto' onSubmit={formSubmitHandler}>
                    <div className='flex flex-col gap-6 max-w-[400px] w-full mx-auto'>
                        <div className='flex flex-col '><label className='text-black font-medium text-lg' htmlFor="">First Name</label><input type="text" className='outline-none p-2 mt-3 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto' value={firstName} required onChange={(e) => setFirstName(e.target.value)} /></div>
                        <div className='flex flex-col '><label className='text-black font-medium text-lg' htmlFor="">Last Name</label><input type="text" className='outline-none p-2 mt-3 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto' value={lastName} required onChange={(e) => setLastName(e.target.value)} /></div>
                        <div className='flex flex-col '><label className='text-black font-medium text-lg' htmlFor="">Email</label><input type="email" className='outline-none p-2 mt-3 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto' value={email} required onChange={(e) => setEmail(e.target.value)} /></div>
                    </div>
                    {/* Submit Button */}
                    <button type='submit' className='bg-blue-400 mt-3 px-4 py-2 rounded-lg text-white'>Submit</button>
                </form>
                    <div className='mt-8 max-w-[400px] mx-auto'>
                        <Heading classStyle={"text-center mb-5"} text={"Search Input"} />
                        <input type="text" placeholder='Search first name from list' className='outline-none p-2 mt-4 border border-black rounded-lg text-gray-500 placeholder:text-gray-500 max-w-[400px] w-full mx-auto"' value={query} onChange={(e) => setQuery(e.target.value)} />
                    </div>
                    <Heading classStyle={"text-center mt-8"} text={"Save Data"} />
                    <div className='flex flex-col gap-6 max-w-[400px] w-full mx-auto mt-5'>
                        <table className='min-w-full border-collapse text-center mx-auto'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                <th className='sm:px-5 px-2 text-nowrap'>First Name</th>
                                <th className='sm:px-5 px-2 text-nowrap'>Last Name</th>
                                <th className='sm:px-5 px-2 text-nowrap'>Email</th>
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
    )
}

export default Assignment