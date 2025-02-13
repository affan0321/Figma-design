import './Content.css';

function Contents() {
    return (
        <div style={{ marginTop: "70px", height: "750px" }} className="containers">
            <div className='div10'>
                <h4>What We Are <span>Offering</span></h4>
                <h1 style={{ fontSize: "48px" }}><span>Services </span>We Can Offer You!</h1>
            </div>
            <div className='div8 containers1'>
                <div>
                    <div class="bottom-border gradient">Website Design & Development</div>
                    <div class="bottom-border gradient">Mobile Application Development</div>
                    <div class="bottom-border gradient">AI / Custom Software Solutions</div>
                    <div class="bottom-border gradient">Animations</div>
                    <div class="bottom-border gradient">Pay Per Click (PPC)</div>
                    <div class="bottom-border gradient">Search Engine Optimization</div>
                    <div class="bottom-border gradient">Online Reputation Management</div>
                    <div class="bottom-border gradient">Social Media Marketing</div>
                    <div class="bottom-border gradient">Logo & Brand Guide</div>
                    <div class="bottom-border gradient">Character Development / Illustration</div>
                </div>
                <div className='div11'>
                    <h1 style={{ marginBottom: "20px" }}>Web Application</h1>
                    <h4 style={{ marginBottom: "20px" }}>
                        Rely on Innovatech 360 to build consumer and enterprise-facing  web and mobile applications that offer rich experiences to customers, improve productivity for internal employees, and help you set up the technology infrastructure necessary to succeed in today’s fast-moving world.
                    </h4>
                    <ul style={{ marginBottom: "10px", paddingLeft: "15px" }}>
                        <li>Website Applications</li>
                        <li>eCommerce Websites</li>
                        <li>Mobile Applications</li>
                        <li>Wordpress Development</li>
                        <li>Website Integrations</li>
                    </ul>
                    <button style={{ color: "#fff" }} className='btn1'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Contents;