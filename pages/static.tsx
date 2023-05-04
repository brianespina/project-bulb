export default function Static() {
    return <main className="h-screen">
        <header className="container m-auto">
            <div className="top-header flex justify-between">
                <div className="header-search">test</div>
                <div className="logo">logo</div>
                <div className="account">account</div>
            </div>
            <ul className="main-menu flex justify-between">
                <li><a href="#">Jewelry & Accesories</a></li>
                <li><a href="#">Clothing & Shoes</a></li>
                <li><a href="#">Home & Living</a></li>
                <li><a href="#">Wedding & Party</a></li>
                <li><a href="#">Toys & Party</a></li>
                <li><a href="#">Art & Collectibles</a></li>
                <li><a href="#">Craft Supplies & Tools</a></li>
            </ul>
        </header>
        <section className="hero-section">
            <div className="content">
               <div className="title">Collections</div> 
               <div className="content">You Can Explore ans Shop Many Different Collection From Various Brands Here.</div>
               <div className="buttons">
                    <button>0 Shop Now</button>
               </div>
            </div>
        </section>
       <section className="brands">
            <div className="brand-logo">logo</div> 
            <div className="brand-logo">logo</div> 
            <div className="brand-logo">logo</div> 
            <div className="brand-logo">logo</div> 
            <div className="brand-logo">logo</div> 
       </section>
       <section className="featured">
            <div className="image-lg">Explore New And Popular Styles</div>
            <div className="image-md">image</div>
            <div className="image-md">image</div>
            <div className="image-md">image</div>
            <div className="image-md">image</div>
        </section>
        <section className="product-section">
            <h2 className="title">Product Title</h2>
            <div className="filters">
                <div className="categories">
                    <button>Product</button>
                    <button>T-Shirt</button>
                    <button>Hoodies</button>
                    <button>Jacket</button> 
                </div>
           </div>
           <div className="product-list">
                <div className="product">
                    <div className="image">image</div>
                    <div className="title">title</div>
                    <div className="details">
                        <div className="category">category</div>
                        <div className="price">234</div>
                    </div>
                </div>
                   <div className="product">
                    <div className="image">image</div>
                    <div className="title">title</div>
                    <div className="details">
                        <div className="category">category</div>
                        <div className="price">234</div>
                    </div>
                </div><div className="product">
                    <div className="image">image</div>
                    <div className="title">title</div>
                    <div className="details">
                        <div className="category">category</div>
                        <div className="price">234</div>
                    </div>
                </div><div className="product">
                    <div className="image">image</div>
                    <div className="title">title</div>
                    <div className="details">
                        <div className="category">category</div>
                        <div className="price">234</div>
                    </div>
                </div>
           </div>
        </section>
    </main>
}   
