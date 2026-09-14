import React, { useState } from 'react';
import { StarRating } from './StarRating';

// Helper styles for hover effects (since inline styles can't do :hover)
const buttonBaseStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '10px 20px',
  borderRadius: '12px',
  fontWeight: '600',
  fontSize: '14px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

export const ProductCard = ({ product, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    onAddToCart(product);
    setIsAdding(false);
  };

  return (
    <div 
      className="product-card-hover" // Used for CSS hover effect defined below
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #f3f4f6',
        boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Image Container */}
      <div style={{ position: 'relative', height: '210px', overflow: 'hidden', backgroundColor: '#f9fafb' }}>
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.5s ease',
          }}
          className="product-img-hover"
          loading="lazy"
        />
        {product.discountPercentage > 0 && (
          <span style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: '#fff1f2',
            color: '#e11d48',
            fontSize: '12px',
            fontWeight: '700',
            padding: '4px 10px',
            borderRadius: '999px',
            border: '1px solid #ffe4e6'
          }}>
            -{Math.round(product.discountPercentage)}%
          </span>
        )}
      </div>

      {/* Content Container */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Category */}
        <span style={{
          fontSize: '12px',
          fontWeight: '600',
          color: '#6366f1', // Indigo-500
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '4px'
        }}>
          {product.category}
        </span>

        {/* Product Name */}
        <h3 style={{
          color: '#111827',
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '1.25',
          marginBottom: '8px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {product.title}
        </h3>

        {/* Rating */}
        <div style={{ marginBottom: '16px' }}>
          <StarRating rating={product.rating} />
        </div>

        {/* Bottom Section: Price & Button */}
        <div style={{
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingTop: '16px',
          borderTop: '1px solid #f9fafb'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '500' }}>Price</span>
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#111827' }}>
              ${product.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            style={{
              ...buttonBaseStyle,
              backgroundColor: isAdding ? '#e0e7ff' : '#4f46e5', // Indigo-100 vs Indigo-600
              color: isAdding ? '#818cf8' : '#ffffff',
              cursor: isAdding ? 'not-allowed' : 'pointer',
              boxShadow: isAdding ? 'none' : '0 10px 15px -3px rgba(79, 70, 229, 0.2)'
            }}
            onMouseEnter={(e) => {
                if(!isAdding) e.currentTarget.style.backgroundColor = '#4338ca'; // Darker indigo
            }}
            onMouseLeave={(e) => {
                if(!isAdding) e.currentTarget.style.backgroundColor = '#4f46e5'; // Reset
            }}
          >
            {isAdding ? (
              <>
                <svg className="animate-spin" style={{ animation: 'spin 1s linear infinite', height: '16px', width: '16px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Adding...</span>
              </>
            ) : (
              <>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};