import ListGroup from 'react-bootstrap/ListGroup';

function ListedSkills() {
  return (
    <ListGroup>
      <ListGroup.Item><b>Skills</b></ListGroup.Item>
      <ListGroup.Item>HTML, CSS and Bootstrap</ListGroup.Item>
      <ListGroup.Item>Web Development - Javascript, NodeJS, ReactJS</ListGroup.Item>
      <ListGroup.Item>Python Scripting</ListGroup.Item>
      <ListGroup.Item>Version Control With Git</ListGroup.Item>
      <ListGroup.Item>.NET Graphical user interfaces</ListGroup.Item>
      {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
    </ListGroup>
  );
}

export default ListedSkills;