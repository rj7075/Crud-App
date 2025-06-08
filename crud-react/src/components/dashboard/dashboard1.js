import { useState, useEffect } from "react";
import { Col, Row, Table, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://crud-app-3-02ct.onrender.com/api/user");
      const data = await response.json();
      setUsers(data);
      console.log("user Deleted Successfully");
    } catch (error) {
      console.log("error while deleteing users :", error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdate = (userId) => {
    navigate(`/user/${userId}`);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`https://crud-app-3-02ct.onrender.com/api/user/${userId}`, {
        method: "DELETE",
      });
      console.log(response);
      if (response.ok) {
        fetchUsers();
      }
    } catch (error) {
      console.log("error while fetching usrs:", error.message);
    }
  };
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center">DashBoard Conponent</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Button
                        variant="dark"
                        onClick={(userId) => handleUpdate(user._id)}
                      >
                        Update
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={(userId) => handleDelete(user._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DashBoard;
