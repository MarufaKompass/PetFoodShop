import React from "react";

export default function SideCartInfo({toggleSidebar , isSidebarOpen,setIsSidebarOpen}) {
  return (
    <div>
    
    {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          className="absolute top-4 right-4 text-black"
          onClick={toggleSidebar}
        >
          Close
        </button>
        <div className="p-4">
          <h2 className="text-lg font-bold">Sidebar Content</h2>
          <p>Here you can place your sidebar content.</p>
        </div>
      </div>
    </div>
  );
}
