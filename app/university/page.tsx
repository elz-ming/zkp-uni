import Navbar from "../components/Navbar";

export default function UniversityDashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>University Dashboard</h1>
        <p>
          Welcome, Professor. Here you can manage student credits and verify
          proof requests.
        </p>
        <button>Add Student Credits</button>
        <button>View Proof Requests</button>
      </div>
    </>
  );
}
