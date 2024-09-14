import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Button, Image } from "antd"
import { DeleteOutlined } from "@ant-design/icons"


function CartPage() {
    const { cartItems, removeItemFromCart } = useContext(CartContext)

    const totalAmount = cartItems.reduce((total, product) => total + product.price * product.quantity, 0)

    const totalQuantity = cartItems.reduce((total, product) => total + product.quantity, 0)

    return (
        <div className="container mx-auto">
            <div className="flex gap-2 my-4">
                <div className="flex  flex-col p-3 flex-grow border justify-center items-center rounded-md">
                    <h1>Amount</h1>
                    <h1 className="font-semibold text-3xl">$ {totalAmount}</h1>
                </div>
                <div className="flex flex-col p-3 flex-grow border justify-center items-center rounded-md">
                    <h1>Quantity</h1>
                    <h1 className="font-semibold text-3xl"> {totalQuantity}</h1>
                </div>
                <div className="flex flex-col p-3 flex-grow border justify-center items-center rounded-md">
                    <h1 className="font-semibold text-3xl">Proceed to Checkout</h1>
                </div>
            </div>

            {
                cartItems.map((data) => {
                    return (
                        <div className="flex p-3 border my-2" key={data.id} >
                            <Image
                                height={100}
                                width={100}
                                src={data.image} className="h-32 w-32 rounded" />
                            <div className="pl-5">
                                <h1 className="text-3xl font-bold my-1">{data.title}</h1>
                                <h1 className="text-2xl font-medium my-1">Price : {data.price} , Quantity : {data.quantity}</h1>

                                <Button
                                    onClick={() => removeItemFromCart(data.id)}
                                    icon={<DeleteOutlined />}
                                    className="my-2"
                                    danger>Remove Item</Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default CartPage