// import React, { useState } from "react";

// const GetData = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const formData = new FormData(e.currentTarget);
//     const payload = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       mobile: formData.get("mobile"),
//     };

//     try {
//       const url = "https://skw-backend.onrender.com/adduser";
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add data");
//       }

//       const result = await response.json();
//       console.log("result data", result);
//       e.target.reset();
//     } catch (error) {
//       console.error("Error:", error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form className="mt-5 px-5" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" required />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" name="email" required />
//         </div>
//         <div>
//           <label htmlFor="mobile">Mobile:</label>
//           <input type="number" name="mobile" required />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : "Submit"}
//         </button>
//         {error && <div style={{ color: "red" }}>{error}</div>}
//       </form>
//     </div>
//   );
// };

// export default GetData;

import React, { useState } from "react";

const GetData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    setError(null)
    setLoading(true)
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
    };
    try {
      const url = "http://localhost:4000/addData";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("failed to add data");
      }
      const result = await response.json();
      e.target.reset();
      if (result) {
        console.log("respose data", result);
      }
    } catch (error) {
      console.log(error, "error...");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form className="mt-5 px-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input type="number" name="mobile" required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
};

export default GetData;
