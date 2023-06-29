import Button from "./Button";
import {
  BsFillCartPlusFill,
  BsPencilFill,
  BsFillTrash3Fill,
} from "react-icons/bs";

export default function Product({
  id,
  name,
  image,
  price,
  setEditedProduct,
  onDeleteProduct,
}) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <section>
        <h2>{name}</h2>
        <p>
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          })}
        </p>
        <div>
          <Button
            variant="tonal"
            onClick={() =>
              setEditedProduct({
                id,
                name,
                image,
                price,
              })
            }
          >
            <BsPencilFill />
          </Button>
          <Button>
            <BsFillCartPlusFill />
          </Button>
          <Button onClick={() => onDeleteProduct(id)}>
            <BsFillTrash3Fill />
          </Button>
        </div>
      </section>
    </div>
  );
}
