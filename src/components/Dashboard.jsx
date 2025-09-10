import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Badge } from "flowbite-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleGetStarted = (option) => {
    // Navigate back to the main app with the selected option
    navigate(`/?option=${option}`);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] p-8 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      {/* Dashboard Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-white text-2xl font-bold">NEXA AI Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, {user.name || user.email}</span>
              <Button size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="text-white mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to NEXA AI</h1>
          <p className="text-xl text-white/80">Choose your solution to get started</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Embedded Chatbot Card */}
          <Card className="shadow-2xl">
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Embedded Chatbot</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Add an intelligent chatbot directly to your website. Instantly answer visitor questions using your site's content.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Easy one-line integration
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Learns from your website
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-green-600 mr-2">✓</span>
                  24/7 customer support
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-green-600 mr-2">✓</span>
                  No training required
                </div>
              </div>
              <Button 
                onClick={() => handleGetStarted('embedded-chatbot')}
                className="w-full"
              >
                Get Started with Chatbot
              </Button>
            </div>
          </Card>

          {/* Cashflow/Supply Chain Card */}
          <Card className="shadow-2xl">
            <div className="text-center p-6">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Cashflow / Supply Chain</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced business intelligence for managing your cashflow and supply chain operations with AI insights.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Real-time analytics
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Predictive insights
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Automated reporting
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Risk management
                </div>
              </div>
              <Button 
                onClick={() => handleGetStarted('cashflow-management')}
                className="w-full"
              >
                Get Started with Analytics
              </Button>
            </div>
          </Card>
        </div>

        {/* Account Status */}
        <Card className="shadow-2xl">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Account Status</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">Free</div>
                <div className="text-sm text-gray-600">Current Plan</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">0</div>
                <div className="text-sm text-gray-600">Active Chatbots</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">0</div>
                <div className="text-sm text-gray-600">Conversations</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;