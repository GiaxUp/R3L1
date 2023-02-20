// Questo elenco di preferiti deve essere salvato interamente nel Redux Store, e renderizzato sotto forma di lista in una pagina separata (es. su una rotta /favourites).
// Permetti all’utente anche di rimuovere un’azienda dalla lista dei preferiti.

import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillHouseDoorFill, BsTrashFill } from "react-icons/bs";

const Favourite = () => {
  const favcontent = useSelector((state) => state.fav.content);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={12}>
        <h2>Favourite companies</h2>
        <Link to={"/"}>
          <Button variant="danger">
            <BsFillHouseDoorFill />
          </Button>
        </Link>
      </Col>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {favcontent.map((data, i) => (
            <li key={i} className="my-4">
              <Button
                className="mr-2"
                variant="danger"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_FAV", payload: i });
                }}>
                <BsTrashFill />
              </Button>
              <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </li>
          ))}
        </ul>
      </Col>
      {/* <Row>
        <Col sm={12} className="font-weight-bold mb-3 ml-4">
          TOTAL: {favcontent.reduce((acc, currentValue) => acc + parseFloat(currentValue.price), 0)}€
        </Col>
      </Row> */}
    </Row>
  );
};

export default Favourite;
