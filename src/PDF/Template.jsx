import ReactPrint from 'react-to-print';
import { useRef } from 'react';
import Barcode from 'react-barcode';

function PdfTemplate(props) {
    const ref = useRef();

    // Predefined dataset
    const List = [
        { product: 'Laptop', amount: 75000 },
        { product: 'Smartphone', amount: 25000 },
        { product: 'Headphones', amount: 2000 },
        { product: 'Keyboard', amount: 1500 },
        { product: 'Mouse', amount: 1000 },
    ];

    // Calculate the total sum
    const sum = List.reduce((acc, item) => acc + parseInt(item.amount), 0);

    return (
        <>
            <div className="container" ref={ref}>
                <div className="container">
                    <div className="row">
                        <div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4 brcode">
                                        <Barcode value={`4n%${props.InvoiceNumber}+ut%`} width={1} height={50} displayValue={false} />
                                    </div>
                                    <div className="col-md-8 text-right bbc">
                                        <h4 style={{ color: '#325aa8' }}><strong>Company</strong></h4>
                                        <p>(+91) 1234567890</p>
                                        <p>sample@gmail.com</p>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h2 style={{ color: '#325aa8' }}>INVOICE</h2>
                                        <h5>Id: {props.InvoiceNumber}</h5>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th><h5>Products</h5></th>
                                                <th><h5>Amount</h5></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {List.map((items, index) => (
                                                <tr key={index}>
                                                    <td className="col-md-9">{items.product}</td>
                                                    <td className="col-md-3"><i className="fas fa-rupee-sign" aria-hidden="true"></i> ₹ {items.amount}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td className="text-right">
                                                    <p>
                                                        <strong>Total Amount: </strong>
                                                    </p>
                                                    <p>
                                                        <strong>Payable Amount: </strong>
                                                    </p>
                                                </td>
                                                <td>
                                                    <p>
                                                        <strong><i className="fas fa-rupee-sign" aria-hidden="true"></i> ₹ {sum}</strong>
                                                    </p>
                                                    <p>
                                                        <strong><i className="fas fa-rupee-sign" aria-hidden="true"></i> ₹ {sum}</strong>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr style={{ color: '#F81D2D' }}>
                                                <td className="text-right"><h4><strong>Total:</strong></h4></td>
                                                <td className="text-left"><h4><strong><i className="fas fa-rupee-sign" aria-hidden="true"></i> ₹ {sum} </strong></h4></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <p><b>Date :</b> {props.date} </p>
                                        <br />
                                        <p><b>Name</b></p>
                                        <p><b>Contact: (+91) 1234567890</b></p>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>

            <ReactPrint
                trigger={() => <button>Print</button>}
                content={() => ref.current}
                documentTitle={`INVOICE ${props.InvoiceNumber}`}
            />
        </>
    );
}

export default PdfTemplate;
