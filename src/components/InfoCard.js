import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InfoCard() {
  return (
    <div className='card'>

    <Card className="text-center">
      {/* <Card.Header></Card.Header> */}
      <Card.Body>
        <Card.Title>Welcome to my Website!</Card.Title>
        <Card.Text>
          As a budding software developer, I am always looking for ways to learn and imporve my skills, staying on top of the latest technologies and best practices in my field. Whether it be online courses, workshops or on-the-job training, I am always eager to expand my knowledge and learn from others. 
        </Card.Text>
        <Button variant="primary" href="contact">Reach out</Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
    </div>
  );
}

export default InfoCard;