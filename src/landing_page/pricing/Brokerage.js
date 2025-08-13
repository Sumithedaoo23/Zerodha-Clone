import React from "react";

function Brokerage() {
  return (
    <>
      <div>
        <h4 style={{ color: "grey", textAlign: "center" }}>
          <a
            href=""
            style={{
              textDecoration: "none",
              Color: "#2f80ed",
              fontWeight: "normal",
            }}
          >
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </h4>
      </div>
      <div>
        <div className="row p-5 mt-5">
          <h4 style={{ textAlign:'center' }}>Charges explained</h4>
          <div className="col-6 p-5">
            <p style={{ fontSize: "18px", marginLeft: "115px" }}>
              Securities/Commodities transaction tax
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy <br></br>and sell sides when trading equity
              delivery. Charged only on selling side when trading<br></br>{" "}
              intraday or on F&O.
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge.<br></br> Important to keep a tab.
            </p>
            <p style={{ fontSize: "18px", marginLeft: "115px" }}>
              Transaction/Turnover Charges
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore <br></br>w.e.f 01.01.2016. (XC and XD groups
              have been merged into a new group X w.e.f 01.12.2017)
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross<br></br> turnover.
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-<br></br>exclusive scrips from group E, F,
              FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate
              <br></br> basis w.e.f. December 1, 2022.
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross<br></br> turnover.
            </p>
            <p style={{ fontSize: "18px", marginLeft: "115px" }}>
              Call & trade
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including <br></br>auto square off orders.
            </p>
            <p style={{ fontSize: "18px", marginLeft: "115px" }}>
              Stamp charges
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for<br></br> transacting in instruments on the stock
              exchanges and depositories.
            </p>
            <p style={{ fontSize: "18px", marginLeft: "115px" }}>
              NRI brokerage charges
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              ₹100 per order for futures and options.
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </p>
            <p style={{ fontSize: "18px", marginLeft: "115px" }}>
              Account with debit balance
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order <br></br>instead of ₹20 per
              executed order.
            </p>
            <p style={{ fontSize: "18px", marginLeft: "115px" }}>
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              Options - ₹50 per crore + GST traded value (premium value).
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of<br></br> premium for Options.
            </p>
            <p style={{ fontSize: "18px", marginLeft: "115px" }}>
              Margin Trading Facility (MTF)
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied<br></br> from T+1 day until the day MTF
              stocks are sold.
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </p>
            <p style={{ fontSize: "13px", marginLeft: "115px" }}>
              MTF pledge charge: ₹15 + GST per pledge and unpledge request per
              ISIN.
            </p>
          </div>

          <div className="col-6 p-5">
            <p style={{ fontSize: "18px" }}>GST</p>
            <p style={{ fontSize: "13px" }}>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + <br></br>transaction charges)
            </p>
            <p style={{ fontSize: "18px" }}>SEBI Charges</p>
            <p style={{ fontSize: "13px" }}>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the <br></br>markets.
            </p>
            <p style={{ fontSize: "18px" }}>
              DP (Depository participant) charges
            </p>
            <p style={{ fontSize: "13px" }}>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading<br></br> account ledger when stocks are
              sold, irrespective of quantity.
            </p>
            <p style={{ fontSize: "13px" }}>
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction<br></br> on the CDSL fee.
            </p>
            <p style={{ fontSize: "13px" }}>
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL<br></br> fee.
            </p>
            <p style={{ fontSize: "18px" }}>Pledging charges</p>
            <p style={{ fontSize: "13px" }}>
              ₹30 + GST per pledge request per ISIN.
            </p>
            <p style={{ fontSize: "18px" }}>
              AMC (Account maintenance charges)
            </p>
            <p style={{ fontSize: "13px" }}>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn<br></br> more about BSDA,{" "}
              <a href=" ">Click here</a>
            </p>
            <p style={{ fontSize: "13px" }}>
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn<br></br> more about AMC, Click here
            </p>
            <p style={{ fontSize: "18px" }}>Corporate action order charges</p>
            <p style={{ fontSize: "13px" }}>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through <br></br>Console.
            </p>
            <p style={{ fontSize: "18px" }}>Off-market transfer charges</p>
            <p style={{ fontSize: "13px" }}>₹25 per transaction.</p>
            <p style={{ fontSize: "18px" }}>Physical CMR request</p>
            <p style={{ fontSize: "13px" }}>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
            <p style={{ fontSize: "18px" }}>Payment gateway charges</p>
            <p style={{ fontSize: "13px" }}>
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
            <p style={{ fontSize: "18px" }}>Delayed Payment Charges</p>
            <p style={{ fontSize: "13px" }}>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading<br></br> account.{" "}
              <a href="">Learn more.</a>
            </p>
            <p style={{ fontSize: "18px" }}>
              Trading using 3-in-1 account with block functionality
            </p>
            <p style={{ fontSize: "13px" }}>
              Delivery & MTF Brokerage: 0.5% per executed order.
            </p>
            <p style={{ fontSize: "13px" }}>
              Intraday Brokerage: 0.05% per executed order.
            </p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: "18px", marginLeft:'200px' }}>Disclaimer</p>
          <p style={{ fontSize: "13px",marginLeft:'200px' }}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.<br></br>{" "}
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            <br></br> assigned options contracts. Free investments are available
            only for our retail individual clients. Companies, Partnerships,
            Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as
            delivery<br></br> brokerage. A brokerage of 0.25% of the contract
            value will be charged for contracts where physical delivery happens.
            For netted off positions in physically settled contracts, a
            brokerage of 0.1%<br></br> will be charged.
          </p>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
