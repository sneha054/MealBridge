import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { motion } from 'framer-motion';
import './App.css';
import logo from './logo.png';


export default function FoodDonationApp() {
  const [userType, setUserType] = useState(null);
  const [donations, setDonations] = useState([]);
  const [newDonation, setNewDonation] = useState({ item: '', quantity: '' });

  const foodItems = [
    'Rice', 'Bread', 'Milk', 'Fruits', 'Vegetables', 'Pasta', 'Canned Beans', 'Soup', 'Cheese', 'Eggs', 'Yogurt', 'Chicken', 'Fish', 'Juice', 'Cereal'
  ];

  const quantityUnits = {
    'Rice': ['1 kg', '2 kg', '5 kg', '10 kg'],
    'Bread': ['1 loaf', '2 loaves', '5 loaves'],
    'Milk': ['1 liter', '2 liters', '5 liters'],
    'Fruits': ['1 kg', '2 kg', '5 kg'],
    'Vegetables': ['1 kg', '2 kg', '5 kg'],
    'Pasta': ['500 g', '1 kg', '2 kg'],
    'Canned Beans': ['1 can', '2 cans', '5 cans'],
    'Soup': ['1 can', '2 cans', '5 cans'],
    'Cheese': ['200 g', '500 g', '1 kg'],
    'Eggs': ['6 eggs', '12 eggs', '24 eggs'],
    'Yogurt': ['1 cup', '2 cups', '5 cups'],
    'Chicken': ['1 kg', '2 kg', '5 kg'],
    'Fish': ['1 kg', '2 kg', '5 kg'],
    'Juice': ['1 liter', '2 liters', '5 liters'],
    'Cereal': ['500 g', '1 kg', '2 kg']
  };

  const handleDonationSubmit = () => {
    setDonations([...donations, newDonation]);
    setNewDonation({ item: '', quantity: '' });
  };

  const handleClaimDonation = (index) => {
    const updatedDonations = donations.filter((_, i) => i !== index);
    setDonations(updatedDonations);
  };

  return (
    <div className="App">
      {!userType ? (
        <motion.div 
          className="container"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <img className="title-logo" src={logo} />
          <h1 className="title">Welcome to MealBridge</h1>
          <Button onClick={() => setUserType('donor')} className="button">Login as Donor</Button><br></br><br></br>
          <Button onClick={() => setUserType('ngo')} className="button">Login as NGO</Button>
        </motion.div>
      ) : (
        <motion.div 
          className="container"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h1 className="h1, h2">{userType === 'donor' ? 'Post a Donation' : 'Available Donations'}</h1>

          {userType === 'donor' ? (
            <div className="input, select">
              <select
                value={newDonation.item}
                onChange={(e) => setNewDonation({ ...newDonation, item: e.target.value })}
                className="input, select"
              >
                <option value="">Select Food Item</option>
                {foodItems.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>

              {newDonation.item && (
                <select
                  value={newDonation.quantity}
                  onChange={(e) => setNewDonation({ ...newDonation, quantity: e.target.value })}
                  className="input, select"
                >
                  <option value="">Select Quantity</option>
                  {quantityUnits[newDonation.item].map((quantity, index) => (
                    <option key={index} value={quantity}>{quantity}</option>
                  ))}
                </select>
              )}
              
              <Button onClick={handleDonationSubmit} className="button">Submit Donation</Button>
            </div>
          ) : (
            <div>
              {donations.length > 0 ? (
                donations.map((donation, index) => (
                  <Card key={index} className="card">
                    <CardContent>
                      <h2 className="card">{donation.item}</h2>
                      <p className="h1, h2">Quantity: {donation.quantity}</p>
                      <Button onClick={() => handleClaimDonation(index)} className="button">Claim Donation</Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="h1, h2">No donations available at the moment.</p>
              )}
            </div>
          )}

          <br></br><Button onClick={() => setUserType(null)} className="button">Logout</Button>
        </motion.div>
      )}
    </div>
  );
}