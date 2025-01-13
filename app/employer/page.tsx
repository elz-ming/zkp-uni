import Navbar from "../components/Navbar";

export default function EmployerDashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>Employer Dashboard</h1>
        <p>
          Welcome, Employer. Here you can verify student degrees and view module
          details.
        </p>
        <button>Verify Degree</button>
        <button>Request Module Information</button>
      </div>
    </>
  );
}
