import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE, ADD, DECRISE } from "../redux/actions/action";

function CardsDetails() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const dispatch = useDispatch();

  const history = useNavigate();

  const getData = useSelector((state) => state.cartReducer.carts);

  const compare = () => {
    let comparedata = getData.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  // Add data
  const Send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const remove = (id) => {
    // console.log(getData);
    dispatch(REMOVE(id));
    history("/");
  };

  const decrise = (iteam) => {
    dispatch(DECRISE(iteam));
  };

  useEffect(() => {
    compare();
  }, [id]);
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((element) => {
              return (
                <>
                  <div className="items_img">
                    <img src={element.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant </strong> : {element.rname}
                          </p>
                          <p>
                            <strong>Price </strong> : ₹ {element.price}
                          </p>
                          <p>
                            <strong>Dishes </strong> : {element.address}
                          </p>
                          <p>
                            <strong>Total </strong> : ₹{" "}
                            {element.price * element.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                element.qnty <= 1
                                  ? () => remove(element.id)
                                  : () => decrise(element)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{element.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => Send(element)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating : </strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {element.rating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review : </strong>{" "}
                            <span>{element.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove :</strong>{" "}
                            <i
                              className="fas fa-trash"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => remove(element.id)}
                            ></i>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default CardsDetails;
