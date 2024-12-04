import React, { useState } from 'react';
import Navbar from './Navbar';

const data = [
  { id: 1, name: 'Mark Otto', email: 'mark@example.com', username: '@mdo', active: true, status: 'Verified', role: 'Admin' },
  { id: 2, name: 'Jacob Thornton', email: 'jacob@example.com', username: '@fat', active: false, status: 'Pending', role: 'Editor' },
  { id: 3, name: 'Larry Bird', email: 'larry@example.com', username: '@twitter', active: true, status: 'Verified', role: 'Viewer' },
  { id: 4, name: 'Anna Smith', email: 'anna@example.com', username: '@anna', active: true, status: 'Verified', role: 'Editor' },
  { id: 5, name: 'John Doe', email: 'john@example.com', username: '@jdoe', active: false, status: 'Pending', role: 'Viewer' },
  { id: 6, name: 'Jane Austin', email: 'jane@example.com', username: '@jaustin', active: true, status: 'Verified', role: 'Admin' },
  { id: 7, name: 'Sam Wilson', email: 'sam@example.com', username: '@swilson', active: false, status: 'Pending', role: 'Editor' },
  { id: 8, name: 'Peter Parker', email: 'peter@example.com', username: '@spidey', active: true, status: 'Verified', role: 'Viewer' },
  { id: 9, name: 'Bruce Wayne', email: 'bruce@example.com', username: '@batman', active: true, status: 'Verified', role: 'Admin' },
  { id: 10, name: 'Clark Kent', email: 'clark@example.com', username: '@superman', active: false, status: 'Pending', role: 'Editor' },
  { id: 11, name: 'Diana Prince', email: 'diana@example.com', username: '@wonderwoman', active: true, status: 'Verified', role: 'Viewer' },
  { id: 12, name: 'Tony Stark', email: 'tony@example.com', username: '@ironman', active: true, status: 'Verified', role: 'Admin' },
  { id: 13, name: 'Steve Rogers', email: 'steve@example.com', username: '@cap', active: false, status: 'Pending', role: 'Editor' },
  { id: 14, name: 'Natasha Romanoff', email: 'natasha@example.com', username: '@blackwidow', active: true, status: 'Verified', role: 'Viewer' },
  { id: 15, name: 'Thor Odinson', email: 'thor@example.com', username: '@godofthunder', active: true, status: 'Verified', role: 'Admin' },
  { id: 16, name: 'Bruce Banner', email: 'bruceb@example.com', username: '@hulk', active: false, status: 'Pending', role: 'Editor' },
  { id: 17, name: 'Wanda Maximoff', email: 'wanda@example.com', username: '@scarletwitch', active: true, status: 'Verified', role: 'Viewer' },
  { id: 18, name: 'Vision', email: 'vision@example.com', username: '@vision', active: true, status: 'Verified', role: 'Admin' },
  { id: 19, name: 'Scott Lang', email: 'scott@example.com', username: '@antman', active: false, status: 'Pending', role: 'Editor' },
  { id: 20, name: 'Hope Pym', email: 'hope@example.com', username: '@wasp', active: true, status: 'Verified', role: 'Viewer' }
];


function Home({ Toggle }) {
  const [users, setUsers] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const [showModal, setShowModal] = useState({ add: false, edit: false, delete: false });
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', username: '', active: false, status: '', role: '' });

  const handleModal = (type, user = null) => {
    setShowModal({ add: type === 'add', edit: type === 'edit', delete: type === 'delete' });
    setCurrentUser(user);
    setFormData(user || { name: '', email: '', username: '', active: false, status: '', role: '' });
  };

  const handleSave = () => {
    if (showModal.add) {
      setUsers([...users, { id: users.length + 1, ...formData }]);
    } else if (showModal.edit) {
      setUsers(users.map((user) => (user.id === currentUser.id ? { ...user, ...formData } : user)));
    }
    setShowModal({ add: false, edit: false, delete: false });
  };

  const handleDelete = () => {
    setUsers(users.filter((user) => user.id !== currentUser.id));
    setShowModal({ add: false, edit: false, delete: false });
  };

  // Filtered and paginated data
  const filteredData = users.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="container">
      <Navbar Toggle={Toggle} />

      <div className="content d-flex justify-content-end align-items-center gap-2 mt-3">
        <input
          type="text"
          className="search-bar form-control w-50"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary mb-3" onClick={() => handleModal('add')}>ADD</button>
      </div>

      <div className="table-responsive bg-white rounded">
        <table className="table caption-top">
          <caption className="text-white fs-4">List of Users</caption>
          <thead>
            <tr>
              <th scope="col">Slno</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Active</th>
              <th scope="col">Status</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{(currentPage - 1) * rowsPerPage + index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.active ? 'Yes' : 'No'}</td>
                  <td>{user.status}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-success me-2" onClick={() => handleModal('edit', user)}>Edit</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleModal('delete', user)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2 text-white">
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div>
          <button
            className="btn btn-primary btn-sm me-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <button
            className="btn btn-primary btn-sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modals */}
      {(showModal.add || showModal.edit) && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{showModal.add ? 'Add User' : 'Edit User'}</h5>
                <button className="btn-close" onClick={() => setShowModal({ add: false, edit: false })}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal({ add: false, edit: false })}>
                  Close
                </button>
                <button className="btn btn-primary" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal.delete && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete User</h5>
                <button className="btn-close" onClick={() => setShowModal({ delete: false })}></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete <strong>{currentUser?.name}</strong>?
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal({ delete: false })}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
