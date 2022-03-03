import { Form } from "antd";

export default function CardknoxPaymentForm() {
  const [form] = Form.useForm();
  //latest stable version(https://cdn.cardknox.com/ifields/versions.htm): 2.12.2201.2101
  //ifield token: ifields_otterzdev6abe2e569091466f8581c4003a6b
  return (
    <form id="payment-form" method="POST">
      <iframe
        data-ifields-id="ach"
        data-ifields-placeholder="Checking Account Number"
        src="https://cdn.cardknox.com/ifields/2.12.2201.2101/ifield.htm"
      ></iframe>
      <input data-ifields-id="ach-token" type="hidden"></input>
      <iframe
        data-ifields-id="card-number"
        data-ifields-placeholder="Card Number"
        src="https://cdn.cardknox.com/ifields/2.12.2201.2101/ifield.htm"
      ></iframe>
      <input
        data-ifields-id="card-number-token"
        name="xCardNum"
        type="hidden"
      ></input>
      <iframe
        data-ifields-id="cvv"
        data-ifields-placeholder="CVV"
        src="https://cdn.cardknox.com/ifields/2.12.2201.2101/ifield.htm"
      ></iframe>
      <input data-ifields-id="cvv-token" name="xCVV" type="hidden"></input>
      <br />
      <input id="amount" name="xAmount" placeholder="Amount"></input>
      <br />
      <input
        id="month"
        name="xMonth"
        placeholder="Month"
      ></input>
      <br />
      <input
        id="year"
        name="xYear"
        placeholder="Year"
      ></input>
      <br />
      <input id="submit-btn" type="submit" value="Submit"></input>
      <br />
      <input id="clear-btn" type="button" value="Clear"></input>
      <br />
      <label id="transaction-status"></label>
      <br />
      <label data-ifields-id="card-data-error"></label>
      <br />
      <div>
        <label>ACH Token: </label>
        <label id="ach-token"></label>
        <br />
        <label>Card Token: </label>
        <label id="card-token"></label>
        <br />
        <label>CVV Token: </label>
        <label id="cvv-token"></label>
      </div>
      <br />
      <br />
    </form>
  );
}
