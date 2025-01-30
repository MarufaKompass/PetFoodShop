import React from "react";
import avatar from "../../assets/images/avatar.jpg";

export default function Profile() {
  const user = {
    name: "Asikur Rahim",
    email: "asikur.rahim@example.com",
    avatar: avatar,
    joinDate: "January 2023",
    orders: [
      { id: "1234", date: "2023-05-15", total: "1290.99", status: "Delivered" },
      { id: "5678", date: "2023-06-02", total: "790.99", status: "Processing" },
    ],
  };

  return (
    <div>
      <div className="min-h-screen bg-base-200 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">User Profile</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* User Info Card */}
            <div className="md:col-span-1">
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="rounded-full w-32 h-32"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="font-lato text-[18px] font-bold text-heading">
                    {user.name}
                  </h2>
                  <p className="font-lato text-[14px] font-medium text-heading">
                    {user.email}
                  </p>
                  <p className="font-lato text-[14px] font-medium text-heading">
                    Member since {user.joinDate}
                  </p>
                  <div className="card-actions mt-4">
                    <button className="btn btn-primary font-lato text-[14px] font-bold text-heading">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order History and Settings */}
            <div className="md:col-span-2">
              <div className="card bg-base-100 shadow-xl mb-6">
                <div className="card-body">
                  <h2 className="font-lato text-[18px] font-bold text-heading mb-4">
                    Order History
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="table w-full font-lato text-[16px] font-medium text-heading">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Total</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.orders.map((order) => (
                          <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.total} ৳</td>
                            <td>{order.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="font-lato text-[16px] font-bold text-heading mb-4">
                    Account Settings
                  </h2>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="font-lato text-[15px] font-medium text-heading">
                        Receive email notifications
                      </span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        defaultChecked
                      />
                    </label>
                  </div>
                  <div className="form-control mt-4">
                    <label className="label cursor-pointer">
                      <span className="font-lato text-[15px] font-medium text-heading">
                        Two-factor authentication
                      </span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                      />
                    </label>
                  </div>
                  <div className="card-actions justify-end mt-6">
                    <button className="btn btn-primary font-lato text-[15px] font-bold text-heading">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
