import Navbar from "../components/Navbar";

export default function StudentDashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>Student Dashboard</h1>
        <p>
          Welcome! Here you can view your academic record and generate ZK
          proofs.
        </p>
        <button>View Academic Record</button>
        <button>Generate Proof</button>
      </div>
    </>
  );
}
