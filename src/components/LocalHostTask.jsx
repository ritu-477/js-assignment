import { useState, useEffect } from "react";

const LocalHostTask = () => {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", address: ""
    });
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("userTableData")) || [];
        setTableData(storedData);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).every(value => value.trim() !== "")) {
            const newData = [...tableData, formData];
            setTableData(newData);
            localStorage.setItem("userTableData", JSON.stringify(newData));
            setFormData({
                firstName: "", lastName: "", email: "", address: ""
            });
        } else {
            alert("Please fill in all fields.");
        }
    };

    const handleDelete = (index) => {
        const updatedData = tableData.filter((_, i) => i !== index);
        setTableData(updatedData);
        localStorage.setItem("userTableData", JSON.stringify(updatedData));
    };

    return (
        <div className="min-h-screen bg-black py-8">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">User Data</h2>
                <form onSubmit={handleSubmit}>
                    {["firstName", "lastName", "email", "address"].map((field, index) => (
                        <div key={index} className="mb-4">
                            <label className="block mb-2 capitalize text-gray-600">
                                {field.replace("firstName", "First Name").replace("lastName", "Last Name").replace("email", "Email").replace("address", "Address")}
                            </label>
                            <input
                                type={field === "email" ? "email" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md border border-gray-300"
                                required
                            />
                        </div>
                    ))}
                    <div className="flex">
                        <button
                            type="submit"
                            className="flex mx-auto text-center items-center justify-center bg-blue-500 text-black border-black border w-44 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            {tableData.length > 0 && (
                <div className="mt-10 bg-white p-3 rounded-xl shadow-lg max-w-2xl mx-auto w-full">
                    <h3 className="text-xl font-semibold mb-4">User Data Storage</h3>
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2 text-nowrap">First Name</th>
                                <th className="border p-2 text-nowrap">Last Name</th>
                                <th className="border p-2">Email</th>
                                <th className="border p-2">Address</th>
                                <th className="border p-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border p-2">{data.firstName}</td>
                                    <td className="border p-2">{data.lastName}</td>
                                    <td className="border p-2">{data.email}</td>
                                    <td className="border p-2">{data.address}</td>
                                    <td className="border p-2">
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default LocalHostTask;
