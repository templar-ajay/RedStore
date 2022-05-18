class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <div class="navbar">
        <div class="logo">
            <a href="../index.html"><img src="images/logo.png" width="125px"></a>
        </div>
     
    <nav>
        <ul id="menu-items">

            <li><a href="index.html">Home</a></li>
            <li><a href="html/products.html">Products</a></li>
            <li><a href="html/portfolio.html">Dev Portfolio</a></li>
            <li><a href="mailto:ajay.kumar@talentelgia.in">E-Mail</a></li>
            <li><a href="html/account.html">Account</a></li>
        </ul>
    </nav>
    <a href="html/cart.html"><img src="images/cart.png" width="30px" height="30px"></a>
    <img src="images/menu.png" class="menu-icon" onclick="toggleMenu()">
        </div>
        `
    }
}
customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1st">
                    <h3>Download Our App</h3>
                    <p>Download our App on Android and iOS</p>
                    <div class="app-logo">
                        <img src="images/app-store.png">
                        <img src="images/play-store.png">
                    </div>
                </div>
                <div class="footer-col-2nd">
                    <img src="images/logo-white.png">
                    <p>Our Purpose is to Sustainably make the Pleasure and
                        Benefits of Sports Accessible to as the Many
                    </p>
                </div>
                <div class="footer-col-3rd">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div class="footer-col-4th">
                    <h3>Connect With Us on</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <hr>
            <p class="copyright">Source - Easy Tutorials YT -
                reMade by Ajay Kumar 
            </p>
        </div>
    </div>
        `
    }
}
customElements.define('my-footer',MyFooter)
