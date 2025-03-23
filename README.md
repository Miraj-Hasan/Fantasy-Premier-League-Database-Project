# Fantasy Premier League - Advanced Edition

## 📌 Overview
Fantasy Premier League (FPL) - Database Project is a database-based project inspired by the official Fantasy Premier League website. This project extends the classic FPL experience by introducing additional analytical insights and enhanced player tracking features, providing managers with a deeper understanding of their squad's performance.

If you're new to FPL, you can watch this short overview on how to play:  
🔗 [Watch on YouTube](https://youtu.be/mAvr7qz7O1o?si=FC5_KFzMQtWLB8ZW)

## 🔥 Key Features
### **1. Enhanced Player Statistics**
- Introduced new metrics per gameweek:
  - **Shots Taken**: Tracks how many shots a player attempted.
  - **Chances Created**: Measures the number of goal-scoring opportunities a player generated.
- These metrics allow managers to better analyze the attacking potential of each player.

### **2. Gameweek Player Tagging**
- Players in a manager’s team are categorized based on their point contributions in a gameweek:
  - 🏆 **Booster**: High point contributor.
  - ⚖️ **Average**: Medium point contributor.
  - ❌ **Flop**: Low point contributor.
- Helps managers assess the impact of their selected players on their gameweek rank.

### **3. Player Popularity Analysis**
- Players are categorized based on ownership percentage in a gameweek:
  - **Template**: Highly owned players.
  - **Common**: Moderately owned players.
  - **Differential**: Lowly owned players.
- These insights assist managers in making strategic decisions for rank progression.

### **4. Admin Panel**
- Allows an administrator to manage gameweek settings and player attributes:
  - Modify **gameweek start dates**.
  - Update **player prices**.
  - Manage **player availability** (Fully fit, 75%, 50%, 25%, or Injured).
  - Change **player clubs** when real-life transfers occur.

## 🏗️ Tech Stack
| Component     | Technology Used  |
|--------------|----------------|
| **Database** | Oracle         |
| **Frontend** | Next.js, React, CSS |
| **Backend**  | Node.js        |
