"use client"

import { Plus, LayoutGrid, Shield, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import "./Sidebar.css"

export default function Sidebar({ userName, credits, totalCredits, usedCredits, onCreateNew }) {
  const navigate = useNavigate()
  const progressPercentage = (usedCredits / totalCredits) * 100

  const handleLogout = () => {
    navigate("/")
  }

  const isDisabled = credits === 0

  return (
    <aside className="sidebar-dash">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">✨</div>
          <span>StudyGenie</span>
        </div>
      </div>

      <button
        className="create-btn"
        onClick={onCreateNew}
        disabled={isDisabled}
        title={isDisabled ? "No credits available" : "Create a new study plan"}
      >
        <Plus size={20} />
        Create New
      </button>

      <nav className="sidebar-nav">
        <div className="nav-item active">
          <LayoutGrid size={20} />
          <span>Dashboard</span>
        </div>
        <div className="nav-item">
          <Shield size={20} />
          <span>Upgrade</span>
        </div>
      </nav>

      <div className="credits-section">
        <h3>Available Credits</h3>
        <div className="credits-display">{credits}</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p className="credits-text">
          {usedCredits} Out of {totalCredits} Credits used
        </p>
        {credits === 0 ? (
          <p className="credits-warning">No credits available. Upgrade to create more.</p>
        ) : (
          <a href="#" className="upgrade-link">
            Upgrade to create more
          </a>
        )}
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        <LogOut size={18} />
        Logout
      </button>

      <div className="sidebar-footer">
        <div className="user-initial">{userName.charAt(0)}</div>
      </div>
    </aside>
  )
}
