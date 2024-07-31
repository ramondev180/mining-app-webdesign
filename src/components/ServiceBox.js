function ServiceBox({icon}) {
    return (
        <>
            <div className="service-box d-flex align-items-center text-white">
                <div className="p-3">
                    <img src={icon}  width="64px"/>
                </div>
                <div>
                    <h4>Instant Payouts</h4>
                    <p className="mt-3">Withdraw your bitcoin at any time, No minimum payout for premium users.</p>
                </div>
            </div>
        </>
    );
}

export default ServiceBox;
