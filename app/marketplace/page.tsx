'use client';

import { useState } from 'react';
import { Star, ShoppingCart, Package, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { useWallet } from '@/lib/sui/hooks';
import { WalletButton } from '@/components/WalletButton';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  seller: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    description: 'Premium noise-canceling headphones with 40-hour battery life',
    price: 299,
    image: '🎧',
    seller: '0x1234...5678',
    rating: 4.5,
    reviews: 124
  },
  {
    id: '2',
    name: 'Smart Watch Ultra',
    description: 'Advanced fitness tracking with health monitoring features',
    price: 399,
    image: '⌚',
    seller: '0xabcd...efgh',
    rating: 4.8,
    reviews: 89
  },
  {
    id: '3',
    name: 'Mechanical Keyboard RGB',
    description: 'Gaming keyboard with customizable RGB and hot-swappable switches',
    price: 149,
    image: '⌨️',
    seller: '0x9876...5432',
    rating: 4.7,
    reviews: 203
  },
  {
    id: '4',
    name: 'Portable SSD 2TB',
    description: 'Ultra-fast external storage with USB-C connectivity',
    price: 199,
    image: '💾',
    seller: '0x5678...1234',
    rating: 4.9,
    reviews: 156
  },
  {
    id: '5',
    name: 'Webcam 4K Pro',
    description: 'Professional streaming webcam with auto-focus and HDR',
    price: 129,
    image: '📹',
    seller: '0xdef0...9abc',
    rating: 4.6,
    reviews: 78
  },
  {
    id: '6',
    name: 'USB-C Hub 8-in-1',
    description: 'Multiport adapter with HDMI, USB 3.0, and card readers',
    price: 49,
    image: '🔌',
    seller: '0x4321...8765',
    rating: 4.4,
    reviews: 312
  }
];

export default function MarketplacePage() {
  const { address, isConnected } = useWallet();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [purchaseStep, setPurchaseStep] = useState<'browse' | 'checkout' | 'purchased'>('browse');
  const [reviewStep, setReviewStep] = useState<'form' | 'submitting' | 'success'>('form');
  const [reviewData, setReviewData] = useState({
    rating: 5,
    title: '',
    content: ''
  });

  const handlePurchase = (product: Product) => {
    setSelectedProduct(product);
    setPurchaseStep('checkout');
  };

  const confirmPurchase = () => {
    setPurchaseStep('purchased');
    // Simulate blockchain transaction
    setTimeout(() => {
      // Transaction confirmed
    }, 2000);
  };

  const submitReview = async () => {
    setReviewStep('submitting');
    
    // Simulate Walrus upload and Sui transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setReviewStep('success');
  };

  const resetSimulation = () => {
    setPurchaseStep('browse');
    setReviewStep('form');
    setSelectedProduct(null);
    setReviewData({ rating: 5, title: '', content: '' });
  };

  // Browse Products View
  if (purchaseStep === 'browse') {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white">
        {/* Header */}
        <div className="border-b border-white/10 bg-[#13131a]/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-purple-400" />
                <h1 className="text-2xl font-bold">Marketplace Simulation</h1>
              </div>
              <div className="flex items-center gap-4">
                <WalletButton />
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className='text-black'>
                    Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="bg-linear-to-r from-purple-500/20 to-blue-500/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Try Verakita Review System</h2>
                <p className="text-gray-400 text-sm mt-1">
                  Purchase a product and submit a blockchain-verified review
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#13131a] border-white/10 overflow-hidden hover:border-purple-500/50 transition-colors">
                  <div className="aspect-square bg-linear-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center text-8xl">
                    {product.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <div className="text-xl font-bold text-purple-400">
                        ${product.price}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mb-4">
                      Seller: {product.seller}
                    </div>
                    <Button
                      className="w-full bg-purple-500 hover:bg-purple-600"
                      onClick={() => handlePurchase(product)}
                      disabled={!isConnected}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {isConnected ? 'Purchase Now' : 'Connect Wallet First'}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Checkout View
  if (purchaseStep === 'checkout' && selectedProduct) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <Card className="bg-[#13131a] border-white/10 p-8">
            <h2 className="text-2xl font-bold mb-6">Confirm Purchase</h2>
            
            <div className="flex gap-6 mb-8">
              <div className="w-32 h-32 rounded-lg bg-linear-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center text-6xl">
                {selectedProduct.image}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{selectedProduct.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{selectedProduct.description}</p>
                <div className="text-2xl font-bold text-purple-400">
                  ${selectedProduct.price}
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0f] rounded-lg p-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Subtotal</span>
                <span>${selectedProduct.price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Gas Fee (Sui)</span>
                <span className="text-sm">~0.01 SUI</span>
              </div>
              <div className="border-t border-white/10 mt-3 pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-purple-400">${selectedProduct.price}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setPurchaseStep('browse')}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-purple-500 hover:bg-purple-600"
                onClick={confirmPurchase}
              >
                Confirm Purchase
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Review Form View
  if (purchaseStep === 'purchased' && selectedProduct) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          {reviewStep === 'form' && (
            <Card className="bg-[#13131a] border-white/10 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-white">Purchase Successful!</h2>
                <p className="text-gray-400">
                  Now you can submit a blockchain-verified review
                </p>
              </div>

              <div className="flex gap-4 p-4 bg-[#0a0a0f] rounded-lg mb-8">
                <div className="text-4xl">{selectedProduct.image}</div>
                <div>
                  <h3 className="font-semibold text-white">{selectedProduct.name}</h3>
                  <p className="text-sm text-gray-400">Transaction confirmed on Sui</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="mb-3 block text-white">Your Rating</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setReviewData({ ...reviewData, rating: star })}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= reviewData.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="title" className="text-white">Review Title</Label>
                  <Input
                    id="title"
                    placeholder="Sum up your experience"
                    value={reviewData.title}
                    onChange={(e) => setReviewData({ ...reviewData, title: e.target.value })}
                    className="mt-2 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="content" className="text-white">Your Review</Label>
                  <textarea
                    id="content"
                    placeholder="Share your thoughts about this product..."
                    value={reviewData.content}
                    onChange={(e) => setReviewData({ ...reviewData, content: e.target.value })}
                    className="mt-2 w-full min-h-[150px] px-3 py-2 bg-[#0a0a0f] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  />
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex gap-3">
                    <ExternalLink className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="text-blue-400 font-medium mb-1">
                        Blockchain-Verified Review
                      </p>
                      <p className="text-gray-400">
                        Your review will be stored immutably on Sui blockchain and Walrus storage.
                        It cannot be edited or deleted once submitted.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-purple-500 hover:bg-purple-600"
                  onClick={submitReview}
                  disabled={!reviewData.title || !reviewData.content}
                >
                  Submit Review to Blockchain
                </Button>
              </div>
            </Card>
          )}

          {reviewStep === 'submitting' && (
            <Card className="bg-[#13131a] border-white/10 p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Package className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-white">Submitting Review...</h2>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Uploading content to Walrus storage
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  Creating transaction on Sui blockchain
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                  Waiting for confirmation...
                </p>
              </div>
            </Card>
          )}

          {reviewStep === 'success' && (
            <Card className="bg-[#13131a] border-white/10 p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-400 fill-green-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-white">Review Submitted! ✨</h2>
              <p className="text-gray-400 mb-6">
                Your review has been permanently recorded on the blockchain
              </p>

              <div className="bg-[#0a0a0f] rounded-lg p-4 mb-6 text-left">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < reviewData.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="font-semibold mb-1 text-white">{reviewData.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{reviewData.content}</p>
                <div className="text-xs text-gray-500">
                  <p>Transaction: 0x{Math.random().toString(36).substring(7)}...</p>
                  <p>Walrus Blob ID: {Math.random().toString(36).substring(7)}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={resetSimulation}
                >
                  Try Again
                </Button>
                <Link href="/dashboard/reviews" className="flex-1">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">
                    View My Reviews
                  </Button>
                </Link>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    );
  }

  return null;
}
