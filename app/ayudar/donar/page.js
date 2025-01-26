export default function Donate() {
    return (
      <div style={{ position: "relative", overflow: "hidden", height: "1200px", width: "100%" }}>
        <iframe
          title="Donation form powered by Zeffy"
          style={{ position: "absolute", border: 0, top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%" }}
          src="https://www.zeffy.com/embed/donation-form/57ca7f10-b049-41ee-b3a4-736f5e3d0ace"
          allowPaymentRequest
          allowTransparency="true"
        ></iframe>
      </div>
    );
  }
  