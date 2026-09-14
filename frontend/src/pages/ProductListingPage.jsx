import React, { useState, useEffect } from 'react';
import { ProductCard } from "../components/ProductCard";

const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) throw new Error("Failed to fetch");
  const data = await response.json();
  return data.products;
};


const ProductCardSkeleton = () => (
  <div style={{
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #f3f4f6',
    boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
    overflow: 'hidden',
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  }}>
    <div style={{ height: '192px', backgroundColor: '#f3f4f6', width: '100%' }} />
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ height: '16px', backgroundColor: '#f3f4f6', borderRadius: '4px', width: '25%' }} />
      <div style={{ height: '24px', backgroundColor: '#f3f4f6', borderRadius: '4px', width: '75%' }} />
      <div style={{ height: '16px', backgroundColor: '#f3f4f6', borderRadius: '4px', width: '50%' }} />
      <div style={{ paddingTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ height: '32px', backgroundColor: '#f3f4f6', borderRadius: '4px', width: '33%' }} />
        <div style={{ height: '40px', backgroundColor: '#f3f4f6', borderRadius: '12px', width: '40%' }} />
      </div>
    </div>
  </div>
);

export default function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const fetchProductsData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        throw new Error("Invalid data format received");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
  };

  // Injecting CSS for Hover Effects and Animations that inline styles can't handle
  const globalStyles = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: .5; }
    }
    
    /* Card Hover Effect */
    .product-card-hover:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
    }
    
    /* Image Zoom Effect */
    .product-card-hover:hover .product-img-hover {
      transform: scale(1.05);
    }

    /* Responsive Grid */
    .product-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }
    @media (min-width: 640px) {
      .product-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 1024px) {
      .product-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (min-width: 1280px) {
      .product-grid { grid-template-columns: repeat(4, 1fr); }
    }
  `;

  return (
    <>
      <style>{globalStyles}</style>
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        
        {/* Main Content */}
        <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#111827', margin: 0 }}>Featured Products</h2>
            <p style={{ marginTop: '8px', color: '#6b7280' }}>Discover our latest collection of premium items.</p>
          </div>

          {/* Error State */}
          {error && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 0', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: '#fff1f2', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <svg width="32" height="32" fill="none" stroke="#e11d48" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Unable to load products</h3>
              <p style={{ color: '#6b7280', maxWidth: '400px', marginBottom: '24px' }}>{error}</p>
              <button
                onClick={fetchProductsData}
                style={{
                  display: 'inline-flex', alignItems: 'center', padding: '12px 24px',
                  border: 'none', fontSize: '14px', fontWeight: '600', borderRadius: '12px',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: 'white',
                  backgroundColor: '#4f46e5', cursor: 'pointer'
                }}
              >
                Try Again
              </button>
            </div>
          )}

          {/* Loading State */}
          {isLoading && !error && (
            <div className="product-grid">
              {Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          )}

          {/* Product Grid */}
          {!isLoading && !error && products.length > 0 && (
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart} 
                />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && products.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ color: '#6b7280', fontSize: '18px' }}>No products found.</p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}