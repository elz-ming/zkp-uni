"use client"; // Required for event handling

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const router = useRouter();

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("No MetaMask wallet installed! Please install MetaMask.");
      return;
    }

    try {
      setIsConnecting(true); // Show loading state
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address); // Set connected wallet address
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      alert("Failed to connect wallet. Please try again.");
    } finally {
      setIsConnecting(false); // Remove loading state
    }
  };

  const handleLogin = () => {
    if (!selectedRole) {
      alert("Please select a role.");
      return;
    }
    if (!walletAddress) {
      alert("Please connect your MetaMask wallet.");
      return;
    }

    // Navigate to the corresponding dashboard
    switch (selectedRole) {
      case "student":
        router.push("/student");
        break;
      case "university":
        router.push("/university");
        break;
      case "employer":
        router.push("/employer");
        break;
      default:
        alert("Invalid role.");
    }
  };

  return (
    <div className="login-container">
      <div className="wallet-section">
        <button
          onClick={connectWallet}
          className="wallet-button"
          disabled={isConnecting}
        >
          {isConnecting
            ? "Connecting..."
            : walletAddress
            ? "Wallet Connected"
            : "Connect Wallet"}
        </button>
        <p className="wallet-status">
          {walletAddress
            ? `Connected Address: ${walletAddress}`
            : "Wallet not connected"}
        </p>
      </div>

      <div className="role-selection">
        <h2>Select Your Role</h2>
        <select
          onChange={(e) => setSelectedRole(e.target.value)}
          defaultValue=""
          className="dropdown"
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="university">University Professor</option>
          <option value="employer">Employer</option>
        </select>
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
}
